import Head from 'next/head';
import Banner from '../components/banner';
import Header from '../components/header';

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

        <div className="about-content">
          <p>
            Our story began in early 2014. Brian planned the first date and kept it a secret
            until we arrived at the go-kart racing track. Though Alex is not a fan of fast moving,
            adrenaline inducing activities, she put on a brave face just for him. Now that he knows
            her, he won’t be taking her on those types of dates anymore. In May, we welcomed Bella,
            our first puppy, into our family. By August of 2014 we set off on our first big
            adventure. 8 days in a moving truck with a 6-month-old puppy. Destination: Providence,
            Rhode Island. Brian started his first official job as a software engineer, and Alex
            quickly moved up the ranks of Starbucks and became a store manager. In December of 2015
            we welcomed our second puppy into our family, Luna. In our free time, we would travel
            near and far. Exploring New England, the east coast, Canada, and the south.
            <br />
            <br />
            In December of 2015 we set off on the 32-hour flight to New Zealand, with a quick pit
            stop in China. The 28-day trip was meticulously planned by Alex. We were to camp in a
            campervan from the northern tip of the North Island to the southern tip of the South Island.
            On Christmas Eve, after a day of spelunking and glowworm hunting, we found a place to camp
            at the Mangapohue Natural Bridge. Just outside of the town of Te Anga.
          </p>
        </div>
      </section>

      <section id="accommodations" className="accommodations">
        <p>Accommodations:</p>
        <h1>Hotels</h1>

        <div className="hotel-grid">
          <div className="hotel">
            <h1>Towne Place Suites</h1>
            <h3>755 SW 13th Place</h3>
            <a href="http://www.towneplacesuitesbend.com/">towneplacesuitesbend.com/</a>
            <div className="hotel-image">
              <img src="/static/towneplace.jpg" />
            </div>
            <p>
              A 20-minute drive from the snow-capped peaks of Mt. Bachelor and one mile from the vibrant
              streets of downtown, TownePlace Suites is one of the only all studio suite hotels in Bend.
              Our modern extended-stay hotel features charming studio suites with kitchens and
              comfortable work and living spaces.
            </p>
            <div className="tag">
              Closest to dinner
            </div>
          </div>
          <div className="hotel">
            <h1>Entrada Lodge</h1>
            <h3>19221 Southwest Century Drive</h3>
            <a href="http://entradalodge.com">entradalodge.com</a>
            <div className="hotel-image">
              <img src="/static/entrada.jpeg" />
            </div>
            <p>
              The Entrada Lodge is a Bend vacation getaway set in the midst of 40 acres bordering the
              Deschutes National Forest. Located on Century Drive and just minutes away from Bend’s
              Downtown and Old Mill Shopping District, it is the perfect escape for anyone looking for
              a piece of the relaxed, outdoorsy lifestyle that Bend has to offer.
            </p>
            <div className="tag">
              Bride and Groom's Hotel
            </div>
          </div>
          <div className="hotel">
            <h1>MT. Bachelor Village</h1>
            <h3>19717 Mount Bachelor Drive</h3>
            <a href="https://www.mtbachelorvillage.com/">mtbachelorvillage.com</a>
            <div className="hotel-image">
              <img src="/static/mtbachelor.jpg" />
            </div>
            <p>
              Mount Bachelor Village Resort offers a variety of Lodging options for all your Central
              Oregon activities. Choose from a hotel room, ski condo, river view condo or vacation
              rental homes, there is something for every budget and you'll find the perfect home base
              for all your Central Oregon pursuits
            </p>
          </div>
        </div>
      </section>

      <section id="dinner" className="dinner">
        <p>Location:</p>
        <h1>Dinner</h1>
        <div className="dinner-location">
          <div className="dinner-image">
            <img src="/static/dinner.jpg" />
          </div>
          <div className="dinner-content">
            <h1>Cascade Lakes Lodge</h1>
            <a href="http://cascadelakes.com/">cascadelakes.com</a>
            <p>
              <strong>Address: </strong>
              1441 SW Chandler Ave #100
            </p>
            <p>
              <strong>Time: </strong>
              7:30pm
            </p>
          </div>
        </div>
      </section>

      <section id="ceremony" className="ceremony">
        <p>Location:</p>
        <h1>Ceremony</h1>
        <div className="sparks-location">
          <img src="/static/sparks.png" />
        </div>
      </section>
    </div>

    <style jsx>{`
      h1 {
          text-align: center;
          font-size: 44px;
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

      .about-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      .content {
        top: 85vh;
        position: absolute;
        width: 100%;
        background: white;
        padding-bottom: 60px;
      }

      .hotel-grid {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
        flex-wrap: wrap;
      }

      .hotel {
        flex: 1 300px;
        padding: 0 30px;
      }

      .hotel h1 {
        text-align: left;
        font-size: 28px;
      }

      .hotel h3 {
        font-size: 14px;
        margin-bottom: 0;
      }

      .hotel p {
        text-align: left;
        font-size: 14px;
      }
      .hotel .tag {
        font-size: 12px;
        background-color: #420C3B;
        color: white;
        padding: 3px 5px;
        display: inline-block;
        border-radius: 4px;
      }

      .hotel-image {
        margin-top: 10px;
      }

      .hotel-image img {
        max-width: 100%;
      }

      .sparks-location img {
        max-width: 100%;
      }

      .dinner-location {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }

      .dinner-image {
        display: inline-block;
        border-radius: 4000px;
        overflow: hidden;
        height: 200px;
        width: 200px;
      }

      .dinner-image img {
        height: 200px;
      }

      .dinner-content {
        display: inline-block;
        vertical-align: top;
        padding-left: 50px;
      }

      .dinner-content p {
        text-align: left;
        margin-bottom: 5px;
        margin-top: 5px;
      }

      .dinner-content h1 {
        text-align: left;
        font-size: 28px;
        margin-bottom: 0;
      }

      .dinner-content a {
        margin-bottom: 25px;
      }
    `}</style>

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
    `}</style>
  </div>
)
