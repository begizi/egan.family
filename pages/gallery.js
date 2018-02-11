import {Component} from 'react';
import Lightbox from 'react-images';

export default class ImageGrid extends Component {
  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      max: 18,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  showMore(event) {
    event.preventDefault();
    this.setState({max: this.state.max + 18})
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery () {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.slice(0, this.state.max).map((obj, i) => {
      return (
        <a
          href={obj.src}
          className="thumbnail-link"
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} className="thumbnail" />
          <style jsx>{`
            .thumbnail-link {
              min-width: 256px;
              text-align: center;
            }
          `}</style>
        </a>
      );
    });

    return (
      <div className="gallery-wrapper">
        <div className="gallery">
          {gallery}
        </div>
        {this.state.max < this.props.images.length &&
          <div className="more">
            <a className="show-more" href="https://photos.app.goo.gl/jqdEpaTsy5XygHjl1" onClick={this.showMore}>
              Show More
            </a>
          </div>
        }
        <style jsx>{`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
          }

          .more a {
            display: block;
            position: relative;
            top: -3em;
            text-align: center;
            line-height: 3em;
            background: rgba(255, 255, 255, .85);
            color: black;
            text-decoration: none;
          }

          .more a:active {
            color: black;
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={true}
          />
      </div>
    );
  }
}
