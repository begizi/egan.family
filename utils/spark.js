import Spark from 'react-spark-scroll-gsap';

export default Spark({
  invalidateAutomatically: true,
  formulas: {
    bannerAlmostBottom: (element, container, rect, containerRect, offset) =>
      ~~(containerRect.height*.85 - rect.height*3),
    bannerBottom: (element, container, rect, containerRect, offset) =>
      ~~(containerRect.height*.85 - rect.height)
  }
});
