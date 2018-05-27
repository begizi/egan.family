import Spark from '../utils/spark';
const {SparkScroll, SparkProxy, sparkScrollFactory} = Spark;

import Link from './link';

export default () => (
  <SparkScroll.div
    className="header-wrapper"
    timeline={{
      ease:'easeInQuad',
      bannerAlmostBottom: {background: 'rgba(255, 255, 255, 0)'},
      bannerBottom: {background: 'rgba(255, 255, 255, 1)'}
    }}
  >
    <div className="links">
      <Link title="About Us" subTitle="our story" href="#about" />
      <Link title="Hotels" subTitle="accommodations" href="#accommodations" />
      <Link title="Timeline" subTitle="reception information" href="#timeline" />
      <Link title="Registry" subTitle="our honeymoon" href="#registry" />
      <Link title="FAQs" subTitle="questions" href="#faqs" />
      <Link title="Ceremony" subTitle="our pictures" href="#images" />
    </div>
    <style jsx>{`
    .links {
        padding: 0 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 2;
        flex: 1;
        flex-wrap: wrap;
      }
      @media only screen
        and (max-device-width: 667px) {
        .links {
          padding: 0;
        }
      }
    `}</style>
    <style jsx global>{`
      .header-wrapper {
        background: rgba(255, 255, 255, 0);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        z-index: 1;
      }
    `}</style>
  </SparkScroll.div>
)
