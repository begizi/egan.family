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

  <h2>The (First) Proposal</h2>

  <p>
  After dinner, we set off on a hike to the natural bridge. We walked through a rain
  forest until we saw the giant rock formation. After climbing up the stairs into the
  bridge we found a meadow on the other side with large boulders. We decided to investigate.
                                                          Brian quickly set up a time lapse on the GoPro to capture our exploration. As we walked
  up to the rocks we found fossils of shells and small creatures. We took a second to
  admire the scene around us, and then Brian turned and looked at Alex. That’s when time
  stood still. Brian got down on one knee and asked if we could spend the rest of our lives
  together. Alex said yes.
                                                                      </p>

  <h2>The (Second) Proposal</h2>

  <p>
  Little did Brian know that Alex had been planning on proposing to him all along. On
  December 31st, three years to the day that they had met, they set out on a walk along
  the beach in Greymouth, New Zealand. It was a rainy day, but we were determined to
  enjoy the beach as much as we could. Before we got back to our campsite we stopped
  and watched the waves washing over the pebbles on the beach, we watched a kiwi bird
  run past us and into the clearing behind us, and for a second the rain subsided. Alex
  looked at Brian and pulled out the ring explaining that though they were already
  engaged she wanted to go through with her plan of proposing. It was a shock to Brian,
  but also not all that surprising. He put the ring on, and he said yes, again.
          </p>

  <h2>And Now</h2>

  <p>
  In June of 2017 we packed up our house and our dogs and set off across the country
  again. This time to Mountain View, California. Brian accepted a job with Google and
  Alex took on the challenge of managing a new store. In classic Alex and Brian fashion
  when we were discussing our wedding plans we made a joke that we should just get
  married this year. That joke turned into light planning. Which then turned into a
  fully formed idea. When it was officially decided that we would get married, we had
  48 days to plan our ceremony. And we wouldn’t have it any other way.
                              </p>
  </div>
  </section>
  </div>

  <style jsx>{`
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

      .about-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 10px;
      }

      .content {
        top: 85vh;
        position: absolute;
        width: 100%;
        background: white;
        padding-bottom: 60px;
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
