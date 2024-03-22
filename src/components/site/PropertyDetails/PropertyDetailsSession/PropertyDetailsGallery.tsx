import Image, { StaticImageData } from 'next/image';
import Fancybox from '@/components/common/Fancybox';

import bigCarousel_1 from '@/assets/images/listing/img_43.jpg';
import bigCarousel_2 from '@/assets/images/listing/img_44.jpg';
import bigCarousel_3 from '@/assets/images/listing/img_45.jpg';
import bigCarousel_4 from '@/assets/images/listing/img_46.jpg';

import smallCarousel_1 from '@/assets/images/listing/img_43_s.jpg';
import smallCarousel_2 from '@/assets/images/listing/img_44_s.jpg';
import smallCarousel_3 from '@/assets/images/listing/img_45_s.jpg';
import smallCarousel_4 from '@/assets/images/listing/img_46_s.jpg';

import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';
import { baseApiPath } from 'src/util/entity-utils';

const largeThumb: string[] = ['1', '2', '3'];

const gallery_data: any = {
  big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4],
};

const { big_carousel, small_carousel } = gallery_data;

interface PropertyDetailsGalleryInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsGallery = ({ property }: PropertyDetailsGalleryInterface) => {
  const photos = property.propertyImages || [];
  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className={` bg-white border-20 md-mb-20 shadow4 p-30`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Sell all 37 Photos
                <Fancybox
                  options={{
                    Carousel: {
                      initialSlide: 0,
                      infinite: true,
                    },
                  }}
                >
                  {photos.map((photo: any, index: number) => (
                    <a key={index} className="d-block" data-fancybox="img2" href={baseApiPath(photo.link)}></a>
                  ))}
                </Fancybox>
              </div>

              <div className="carousel-inner">
                {photos.map((photo, i: number) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img src={baseApiPath(photo.link)} alt="" className="w-100 border-20" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className={`carousel-indicators position-relative p-15 w-100 h-100 border-15 bg-white shadow4`}>
            {photos.map((photo, i: number) => (
              <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className={'active'} aria-current="true" aria-label="Slide 1">
                <img src={baseApiPath(photo.link)} alt="" className="w-100 border-10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsGallery;
