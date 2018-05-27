export default () => (
  <div className="hotel-content">
    <div className="hotel-image">
      <div className="hotel-info">
        <h2>Shilo Inn, Bend Oregon</h2>
        <p>
          3105 O.B. Riley Rd.
          <br/>
          Bend OR, 97703
          <br/>
          Block Reservation #: (541) 389-9600
          <br/>
          Block Rate: $169/night
        </p>
        <p className="note">
          * Block ends June 7th, 2018
          <br />
          * When booking please identify yourself with the "Egan Reception"
        </p>
      </div>
      <img src="/static/shiloinn.jpg" />
    </div>
    <style jsx>{`
      @media only screen
        and (max-device-width: 667px) {
        .hotel-info {
          padding: 0 !important;
          width: 100%;
        }
      }

      .hotel-image {
        max-width: 100%;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .hotel-info {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        background: rgba(255, 255, 255, .85);
        padding: 70px;
      }

      .note {
        font-size: .8em;
      }

      .hotel-image img {
        width: 100%;
      }
    `}</style>
  </div>
)
