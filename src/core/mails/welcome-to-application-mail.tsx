// import { Html, Img, Link } from '@react-email/components';

export default function WelcomeToApplicationClientMail() {
  return (
    // <Html>
    <div
      style={{
        backgroundColor: '#312e38',
        // height: 'screen',
        // width: 'screen',
        fontFamily: 'sans-serif',
        textAlign: 'justify',
        fontSize: '30px',
        color: '#f4ede8',
      }}
    >
      <table align='center' style={{ backgroundColor: '#312e38' }}>
        <td width={56} />
        <td>
          <tr>
            <th align='center'>
              <img
                src='@public/gobarber_logo.png'
                width={80}
                height={40}
                alt='Logo do GoBarber-2.0'
              />
            </th>

            <th>
              {' '}
              <h1
                style={{
                  color: '#ff9000',
                  fontSize: '32px',
                  textAlign: 'center',
                }}
              >
                <strong>Bem vindo ao GoBarber-2.0!</strong>
              </h1>
            </th>
          </tr>

          <tr>
            <p
              style={{
                fontSize: '26px',
                color: '#f4ede8',
              }}
            >
              Estamos muito felizes que você tenha ingressado em nossa
              aplicação!
            </p>
            <br />
            <p>
              Esperamos que você sinta-se acolhido e contemplado com as
              possibilidades e conteúdo disponibilizado pelos barbeiros.
            </p>
            <br />
            <p>
              Você pode começar fazendo um agendamento por 🚀
              <a
                href='http://localhost:3000/dashboard/client'
                style={{ color: '#ff9000' }}
              >
                <strong>aqui</strong>.
              </a>
            </p>
          </tr>
        </td>
        <td width={56} />
      </table>
      {/* <Img
          src='../../../public/gobarber_logo.png'
          width={80}
          height={40}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '8px',
          }}
        /> */}
    </div>
    // </Html>
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
