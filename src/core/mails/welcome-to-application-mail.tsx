import { Html, Head, Font, Img, Link } from '@react-email/components';

export default function WelcomToApplicationClientMail() {
  return (
    <Html>
      <Head>
        <Font
          fontFamily='Roboto Slab'
          fallbackFontFamily='Verdana'
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </Head>

      <div
        style={{
          backgroundColor: '#312e38',
          height: 'screen',
          width: 'screen',
          fontFamily: 'RobotoSlab',
          fontSize: '30px',
          color: '#f4ede8',
        }}
      >
        <Img src='../../../public/gobarber_image001.svg' />

        <h1
          style={{
            color: '#ff9000',
            fontSize: '36px',
          }}
        >
          <strong>Bem vindo ao GoBarber-2.0!</strong>
        </h1>

        <p
          style={{
            fontSize: '30px',
            color: '#f4ede8',
          }}
        >
          Estamos muito felizes que você tenha ingressado em nossa aplicação!
          <br />
          Esperamos que você sinta-se acolhido e contemplado com as
          possibilidades e conteúdo disponibilizado pelos barbeiros.
        </p>
        <br />
        <p>
          Você pode começar fazendo um agendamento por 🚀
          <Link href='http://localhost:3000/dashboard/client'>
            <strong> aqui.</strong>
          </Link>
        </p>
      </div>
    </Html>
  );
}

// import image from '@public/gobarber_image001.svg';

// export default function WelcomeToApplicationClientMail() {
//   return (
// <div
//   style={{
//     backgroundColor: '#312e38',
//     height: 'screen',
//     width: 'screen',
//     fontFamily: 'RobotoSlab',
//   }}
// >
//   <img
//     src={image}
//     alt='Logo da aplicação GoBarber-2.0'
//     // width={124}
//     // height={64}
//   />

//   <h1
//     style={{
//       color: '#ff9000',
//       fontSize: '2.25rem',
//       lineHeight: 'calc(2.5 / 2.25)',
//     }}
//   >
//     <strong>Bem vindo ao GoBarber-2.0!</strong>
//   </h1>

//   <p
//     style={{
//       fontSize: '1.875rem',
//       lineHeight: 'calc(2.25 / 1.875)',
//       color: '#f4ede8',
//     }}
//   >
//     Estamos muito felizes que você tenha ingressado em nossa aplicação e
//     esperamos que você sinta-se acolhido e contemplado com as possibilidades
//     e conteúdo!
//   </p>
//   <br />
//   <p>
//     Você pode começar fazendo um agendamento por
//     <a href='http://localhost:3000/dashboard/client'>aqui.</a>
//   </p>
// </div>
//   );
// }
