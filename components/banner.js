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
    {children}
    <style jsx global>{`
      .banner-wrapper {
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
    `}</style>
  </SparkScroll.div>
)
