export default () => (
  <div className="timeline-content">

    <div className="day">
      <h1>Saturday, July 7th</h1>
      <h2>Transportation</h2>
      <h4>Pickup from Shilo Inn</h4>
      <p>4:30pm, 4:45pm, 5:00pm, 5:15pm</p>
      <h4>Leave Aspen Hall</h4>
      <p>10:00pm, two shuttles at 10:45pm, 11:15pm.</p>

      <h2>Reception</h2>
      <h3>Location</h3>
      <p className="location">Aspen Hall 18920 NW Shevlin Park Rd, Bend, OR 97701</p>
      <h4>Cocktails</h4>
      <p>5:00pm</p>
      <h4>Dinner</h4>
      <p>5:30pm</p>
      <h4>Toasts</h4>
      <p>6:30pm</p>
      <h4>Celebrating</h4>
      <p>7:00pm-10:00pm</p>
    </div>

    <div className="day">
      <h1>Sunday, July 8th</h1>
      <h2>Brunch</h2>
      <p>Brunch will be hosted by Paula and Glen McClean. Come and go as you please!</p>
      <h3>Location</h3>
      <p>Bend Senior Center</p>
      <p className="location">1600 Southeast Reed Market Road, Bend, OR</p>
      <h4>Time</h4>
      <p>10:00am-2:00pm</p>
    </div>

    <style jsx>{`
      @media only screen
        and (max-device-width: 667px) {
        .timeline-content {
          display: block !important;
        }
      }
      .day {
        flex: 1;
      }
      .timeline-content {
        display: flex;
        max-width: 1200px;
        margin: auto;
        padding: 0 10px;
      }
      h1 {
        font-size: 38px;
        text-align: left;
      }
      h2 {
        text-align: left;
        text-decoration: underline;
      }
      h3 {
        margin-bottom: 0;
        text-align: left;
      }
      h4 {
        margin: 0;
      }
      p {
        text-align: left;
        margin: 0;
      }
      .location {
        padding-bottom: 10px;
      }
    `}</style>
  </div>
)
