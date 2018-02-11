import Head from 'next/head';
import About from '../pages/about';
import Hotels from '../pages/hotels';
import Banner from '../components/banner';
import Header from '../components/header';
import ImageGallery from '../pages/gallery';
import images from '../helpers/images';

export default () => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lora|Playfair+Display" rel="stylesheet" />
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>

    <Header />
    <Banner />

    <div className="content">
      <section id="about" className="about">
        <p>About Us:</p>
        <h1>Alexandra&nbsp;&amp;&nbsp;Brian Egan</h1>
        <About />
      </section>

      <section id="images" className="images">
        <p>Pictures:</p>
        <h1>The Ceremony</h1>
        <ImageGallery images={images} />
      </section>

      <section id="accommodations" className="accommodations">
        <p>Accommodations:</p>
        <h1>Hotels</h1>
        <Hotels />
      </section>

      <section id="registry" className="registry">
        <div className="zola-registry-embed" data-registry-key="egan">
          <p>Registry:</p>
          <h1>Honeymoon</h1>
          <div className="registry-link">
            <a href="https://www.zola.com/registry/egan">Our Wedding Registry</a>
          </div>
        </div>
        <script async src="https://widget.zola.com/js/widget.js" />
      </section>
    </div>

    <style jsx global>{`
    html, body {
        height: 100%
      }

      body {
        margin: 0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
      }

      a {
        color: #420C3B;
      }

      h1 {
        text-align: center;
        font-size: 44px;
        margin-top: 20px;
      }

      h2 {
        text-align: center;
        margin-top: 20px;
      }

      section {
        padding-top: 80px;
      }

      .pre-header {
        text-align: center;
      }

      p {
        font-size: 18px;
        line-height: 1.6em;
        letter-spacing: 0;
        font-weight: 400;
        text-align: center;
        color: #686868;
      }

      .content {
        top: 85vh;
        position: absolute;
        width: 100%;
        background: white;
        padding-bottom: 60px;
      }

      .registry-link {
        text-align: center;
      }
    `}</style>
  </div>
)
