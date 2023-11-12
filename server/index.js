require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_WINDOW_MS),
  max: parseInt(process.env.RATE_MAX),
  message: 'Se ha superado el límite de envío de mensajes. Por favor, espere 2 horas antes de volver a intentarlo.',
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,  
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');

  const createPostsTableSql = `
  CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(255) NOT NULL,
    summary TEXT
  );
`;

  const createSessionsTableSql = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  );
  
`;

  db.query(createPostsTableSql, (err, result) => {
    if (err) throw err;
    console.log('Tabla "posts" verificada o creada');
  });

  db.query(createSessionsTableSql, (err, result) => {
    if (err) throw err;
    console.log('Tabla "users" verificada o creada');
  });
});

app.post('/posts', (req, res) => {
  const { title, content, author, created_at, image_url, category, summary } = req.body;
  const sql = 'INSERT INTO posts (title, content, author, created_at, image_url, category, summary) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [title, content, author, created_at, image_url, category, summary];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el post', message: err.message });
    } else {
      res.status(201).json({ message: 'Post creado exitosamente', id: result.insertId });
    }
  });
});

app.get('/posts/count', (req, res) => {
  const sql = 'SELECT COUNT(*) as count FROM posts';

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al contar las publicaciones' });
    } else {
      res.status(200).json(result[0].count);
    }
  });
});

app.get('/posts/index/:index', (req, res) => {
  const postIndex = req.params.index;
  const sql = 'SELECT * FROM posts LIMIT 1 OFFSET ?';

  db.query(sql, postIndex, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener la publicación por índice' });
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).json({ error: 'Publicación no encontrada' });
      }
    }
  });
});

app.get('/posts', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const offset = (page - 1) * limit;

  const category = req.query.category;
  const search = req.query.search;

  let sql = 'SELECT * FROM posts';
  let values = [];

  if (category || search) {
    sql += ' WHERE';
    if (category) {
      sql += ' category = ?';
      values.push(category);
    }
    if (search) {
      if (category) {
        sql += ' AND';
      }
      sql += ' (title LIKE ? OR content LIKE ?)';
      values.push(`%${search}%`, `%${search}%`);
    }
  }

  sql += ' ORDER BY id DESC LIMIT ? OFFSET ?';
  values.push(limit, offset);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los posts' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const sql = 'SELECT * FROM posts WHERE id = ?';

  db.query(sql, postId, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el post' });
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).json({ error: 'Post no encontrado' });
      }
    }
  });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvenido a nuestra API!' });
});

app.post('/send-email', contactLimiter, async (req, res) => {
  const { name, lastname, email, phone, address, product } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${name}
      Apellido: ${lastname}
      Email: ${email}
      Teléfono: ${phone}
      Dirección: ${address}
      Producto: ${product}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Mensaje enviado');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al enviar el mensaje');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
