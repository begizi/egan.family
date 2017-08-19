export default ({title, subTitle, href}) => (
  <a href={href}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    <style jsx>{`
      a {
        text-decoration: none;
        color: black;
        text-align: center;
        padding: 0 30px;
      }
      h1 {
        font-size: 1.2em;
        font-weight: 300;
        font-family: 'Lora', serif;
      }
      h2 {
        font-size: 1em;
        font-weight: 200;
        font-style: italic;
        font-family: 'Lora', serif;
      }

      @media only screen
        and (max-device-width: 667px) {
        h1 {
          font-size: .8em;
        }
        h2 {
          display: none;
          font-size: .6em;
        }
        a {
          padding: 10px 5px;
        }
      }
    `}</style>
  </a>
)
