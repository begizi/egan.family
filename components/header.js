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
      <Link title="Home" subTitle="wedding overview" href="#" />
      <Link title="About Us" subTitle="our story" href="#about" />
      <Link title="Accommodations" subTitle="hotels" href="#accommodations" />
      <Link title="Dinner" subTitle="location and time" href="#dinner" />
      <Link title="Ceremony" subTitle="location" href="#ceremony" />
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
