import Spark from '../utils/spark';
const {SparkScroll, SparkProxy, sparkScrollFactory} = Spark;

export default ({children}) => (
  <SparkScroll.div
    className="banner-wrapper"
    timeline={{
      ease:'easeOutQuad',
      bannerAlmostBottom: {top: 0},
      bannerBottom: {top: -150}
    }}
  >
    <div className="date-wrapper">
      <div className="date-month">July</div>
      <div className="date-day">7</div>
    </div>
    <style jsx global>{`
      .banner-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 85vh;
        background: url('/static/banner.jpg');
        background-size: cover;
        background-position: center bottom;
        position: fixed;
      }
      .banner-wrapper:after {
        content: '';
        background-image: linear-gradient(0deg,hsla(0,0%,98%,0),rgba(249,249,249, .85) 65%);
        height: 330px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .date-wrapper {
        text-align: center;
        width: 300px;
        height: 300px;
        border: 20px solid white;
        color: white;
        font-family: Lucida Sans, Arial;
      }

      .date-month {
        font-size: 62px;
        line-height: 1.6em;
      }

      .date-day {
        font-size: 240px;
        line-height: .8em;
        font-weight: bold;
      }
    `}</style>
  </SparkScroll.div>
)
