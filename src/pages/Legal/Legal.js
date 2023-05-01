import React, { useEffect } from 'react';
import { LegalContainer, LegalTitle, LegalText } from './Legal.styles';

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LegalContainer>
      <LegalTitle>Política de Cookies</LegalTitle>
      <LegalText>
        Nuestra web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y entender cómo se utiliza el sitio. Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario y nos permiten recopilar información sobre su uso del sitio.
      </LegalText>
      <LegalText>
        Utilizamos varios tipos de cookies en nuestro sitio, incluyendo:
      </LegalText>
      <LegalText>
        <ul>
          <li>Cookies estrictamente necesarias: son esenciales para el funcionamiento de nuestro sitio y nos permiten brindar una experiencia de navegación segura y eficiente.</li>
          <li>Cookies de rendimiento: nos ayudan a entender cómo los usuarios interactúan con el sitio y recopilar información sobre su uso, incluyendo el número de visitas, la duración de las visitas y las páginas más visitadas.</li>
          <li>Cookies de funcionalidad: nos permiten personalizar la experiencia del usuario y recordar sus preferencias, como la selección de idioma o la ubicación geográfica.</li>
          <li>Cookies publicitarias: nos permiten entregar anuncios relevantes y eficaces a los usuarios y medir la eficacia de nuestras campañas publicitarias.</li>
        </ul>
      </LegalText>
      <LegalText>
        Al utilizar nuestro sitio, aceptas nuestra política de cookies. Si prefieres no aceptar cookies, puedes cambiar la configuración de tu navegador para rechazarlas.
      </LegalText>
      <LegalText>
        Utilizamos la información recopilada a través de las cookies para mejorar la experiencia del usuario, entender cómo se utiliza el sitio y personalizar la experiencia. También podemos utilizar la información para fines publicitarios o para compartirla con terceros.
      </LegalText>
      <LegalTitle>Política de Privacidad</LegalTitle>
      <LegalText>
        Nuestra política de privacidad describe cómo protegemos la privacidad de los usuarios y manejamos su información personal.
      </LegalText>
      <LegalText>
        Recopilamos información personal de los usuarios cuando se registran en nuestro sitio, realizan una compra, rellenan el formulario de contacto o se suscriben a nuestro boletín de noticias. La información personal que recopilamos incluye, entre otros, el nombre, la dirección de correo electrónico, la dirección postal y los datos de facturación y pago.
      </LegalText>
      <LegalText>
        Utilizamos la información personal de los usuarios para brindar un servicio más personalizado y para mejorar nuestro sitio web. También podemos utilizar la información para enviar correos electrónicos con ofertas especiales o para informar sobre cambios en nuestro sitio.
      </LegalText>
      <LegalText>
        No vendemos ni compartimos la información personal de los usuarios con terceros, salvo en los casos en los que sea necesario para brindar un servicio o cumplir con una obligación legal.
      </LegalText>
      <LegalText>
    Tomamos medidas de seguridad razonables para proteger la información personal de los usuarios contra pérdida, robo o acceso no autorizado. Sin embargo, no podemos garantizar la seguridad absoluta de la información personal y no somos responsables de cualquier pérdida o daño que resulte del uso no autorizado de la información.
  </LegalText>
  <LegalText>
    Los usuarios tienen derecho a acceder, rectificar y eliminar su información personal en cualquier momento. Si deseas ejercer estos derechos, por favor ponte en contacto con nosotros.
  </LegalText>
</LegalContainer>
);
};
export default Legal;