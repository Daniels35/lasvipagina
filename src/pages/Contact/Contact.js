import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  ContactContainer,
  ContactInfoContainer,
  ContactFormContainer,
  ContactTitle,
  ContactInfoItem,
  ContactInfoIcon,
  ContactInfoText,
  ContactForm,
  FormInput,
  FormTextArea,
  SubmitButton,
  LogoContainer,
  LogoImage,
  Question,
  CheckboxLabel,
  ButtonContainer,
  ClearButton,
  LoadingOverlay,
  ImageContact,
  StyledImage,
} from './Contact.styles';
import logo from '../../assets/images/logo.webp';
import ScrollingBanner from '../../components/ScrollingBanner/ScrollingBanner';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import image1 from '../../assets/images/contact.webp';
import imageMobile1 from '../../assets/images/contactmobile.webp';
import { Helmet } from 'react-helmet';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const clearAllErrors = () => {
    Object.keys(errors).forEach((error) => {
      clearErrors(error);
    });
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { name, lastname, email, phone, address, product } = data;
      const sanitizedData = {
        name: DOMPurify.sanitize(name),
        lastname: DOMPurify.sanitize(lastname),
        email: DOMPurify.sanitize(email),
        phone: DOMPurify.sanitize(phone),
        address: DOMPurify.sanitize(address),
        product: DOMPurify.sanitize(product),
      };
      await axios.post('/send-email', sanitizedData);
      reset();
      window.alert('Mensaje Enviado, Gracias!!');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        window.alert(error.response.data);
      } else {
        window.alert('Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    } finally {
      setLoading(false); 
    }
  };
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    if (!loading) {
      clearAllErrors();
    }
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
  
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [loading]);
  return (
    <>
    <Helmet>
        <title>CONTACTO</title>
      </Helmet>
    <LoadingOverlay loading={loading}>
      <LoadingSpinner customStyle /> 
    </LoadingOverlay>
    <ContactContainer>  
      <ContactFormContainer>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo de la empresa" />
        </LogoContainer>
        <Question>Contacte con nosotros.</Question>
        <ContactForm onSubmit={handleSubmit(onSubmit)} noValidate> {/* Agrega el atributo noValidate para prevenir la validación de HTML5 y agregar la validación personalizada */}
          <label htmlFor="name" style={{ marginBottom: '-2rem' }}><strong>Nombre y Apellido:</strong></label>
          <FormInput
            type="text"
            name="name"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio*</span>}     
          {/* <label htmlFor="lastname" style={{ marginBottom: '-2rem' }}><strong>Apellido:</strong></label>
          <FormInput
            type="text"
            name="lastname"
            placeholder="Apellido"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio*</span>} */}       
          <label htmlFor="email" style={{ marginBottom: '-2rem' }}><strong>Correo Electrónico:</strong></label>
          <FormInput
            type="email" 
            name="email"
            placeholder="Correo Electrónico"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />
          {errors.email && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio y debe ser una dirección de correo electrónico válida*</span>}     
          {/* <label htmlFor="phone" style={{ marginBottom: '-2rem' }}><strong>Número de teléfono:</strong></label>
<FormInput
type="tel"
name="phone"
placeholder="Número de teléfono"
{...register("phone", { required: true })}
/> */}
{/* {errors.phone && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio*</span>} */}
      {/* <label htmlFor="address" style={{ marginBottom: '-2rem' }}><strong>Dirección postal completa:</strong></label>
      <FormInput
        type="text"
        name="address"
        placeholder="Dirección postal completa"
        {...register("address", { required: true })}
      />
      {errors.address && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio*</span>} */}
      <label htmlFor="product" style={{ marginBottom: '-2rem' }}><strong>Mensaje:</strong></label>
      <FormInput
        type="text"
        name="product"
        placeholder="Mensaje"
        {...register("product", { required: true })}
      />
      {errors.product && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Este campo es obligatorio*</span>}
      <CheckboxLabel htmlFor="agree">
        <FormInput
          type="checkbox"
          name="agree"
          {...register("agree", {
            required: "Debes aceptar el aviso legal y la política de privacidad",
          })}
        />
        {errors.agree && <span style={{color: 'red', fontSize: '0.9rem', margin: '-1.8rem 0 -1.8rem 0'}}>Debes aceptar el aviso legal y la política de privacidad*</span>}
        <strong>He leído y acepto el aviso legal y su política de privacidad.<Link to="/legal" id="link"> (LEER)</Link></strong>
      </CheckboxLabel>
      <ButtonContainer>
        <SubmitButton type="submit">Enviar</SubmitButton>
        <ClearButton type="button" onClick={() => reset()}>Borrar</ClearButton>
      </ButtonContainer>
    </ContactForm>
  </ContactFormContainer>
  <ScrollingBanner />
  <ContactInfoContainer>
                  <ContactInfoItem>
                  <ImageContact>
        <StyledImage src={isMobile ? imageMobile1 : image1} alt="contacto" />
      </ImageContact>
                  </ContactInfoItem>
                </ContactInfoContainer>
</ContactContainer>
</>
);
};
export default Contact;