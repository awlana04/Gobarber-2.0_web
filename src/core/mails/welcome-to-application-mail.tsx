export default function WelcomeToApplicationClientMail() {
  return (
    <div
      style={{
        backgroundColor: '#312e38',

        fontFamily: 'sans-serif',
        textAlign: 'justify',
        fontSize: '30px',
        color: '#f4ede8',
      }}
    >
      <table
        align='center'
        //  style={{ backgroundColor: '#312e38' }}
        width={800}
        bgcolor='#312e38'
      >
        <td color='#312e38' align='center' width={600}>
          <tr>
            <td width={56}></td>
          </tr>
          <tr>
            <img
              src='./static/gobarber_logo.png'
              width={80}
              height={40}
              alt='Logo do GoBarber-2.0'
            />

            <h1
              style={{
                color: '#ff9000',
                fontSize: '32px',
                textAlign: 'center',
              }}
            >
              <strong>Bem vindo ao GoBarber-2.0!</strong>
            </h1>

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
          <tr>
            <td width={56}></td>
          </tr>
        </td>
      </table>
    </div>
  );
}
{
  /* <td width={56} />
        <td>
          <tr>
            <th align='center'>
              <img
                src='./static/gobarber_logo.png'
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
        <td width={56} /> */
}
