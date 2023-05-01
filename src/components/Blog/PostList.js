import React from 'react';
import { Link } from 'react-router-dom';
import FormattedDate from '../../components/Blog/FormattedDate';
import styles from './PostList.styles';
import EightPointStar from './EightPointStar';

const PostList = ({ posts, searchTerm, highlightSearchTerm }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  const isNewPost = (createdAt) => {
    const currentDate = new Date();
    const postDate = new Date(createdAt);
    const daysDifference = (currentDate - postDate) / (1000 * 60 * 60 * 24);
    return daysDifference <= 14;
  };

  return (
    <div style={styles.mainContainer}>
      {sortedPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <div style={styles.postContainer}>
            {isNewPost(post.created_at) && (
              <div style={styles.starContainer}>
                <EightPointStar size={40} label="New" />
              </div>
            )}
            <div style={styles.postTop}>
              <img
                src={post.image_url}
                alt={post.title}
                style={styles.postImage}
              />
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p
                style={styles.postSummary}
                dangerouslySetInnerHTML={{ __html: highlightSearchTerm(truncateText(post.summary, 180), searchTerm) }}
              />
            </div>
            <div style={styles.postBottom}>
              <p style={styles.postCategory}>Categoría: {post.category}</p>
              <p style={styles.postDate}>
                Publicado el <FormattedDate dateString={post.created_at} />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;