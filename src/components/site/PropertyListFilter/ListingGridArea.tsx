'use client';
import Image from 'next/image';
import Link from 'next/link';

import featureIcon_1 from '@/assets/images/icon/icon_32.svg';
import featureIcon_2 from '@/assets/images/icon/icon_33.svg';
import featureIcon_3 from '@/assets/images/icon/icon_34.svg';
import { IListingAreaInterface } from './ListingLayout';
import { IProperty } from 'src/components/models/Property/property-model';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { baseApiPath } from 'src/util/entity-utils';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';

const ListingGridArea = ({ propertyList, currentItems }: IListingAreaInterface) => {
  return (
    <>
      {propertyList.map((item: IProperty, i: number) => {
      
const featureSqft: IPropertyFeature | undefined = item.propertyFeatures?.find(v=>v.feature?.id===60);
const featureBed: IPropertyFeature | undefined = item.propertyFeatures?.find(v=>v.feature?.id===49);
const featureBath: IPropertyFeature | undefined = item.propertyFeatures?.find(v=>v.feature?.id===53);


        return (
          <div key={item.id} className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay={'0.1s'}>
            <div className="listing-card-one style-two shadow-none h-100 w-100">
              <div className="img-gallery">
                <div className="position-relative overflow-hidden">
                  <div className="tag fw-500">{item.typeBusiness}</div>
                  <Link href="#" className="fav-btn tran3s">
                    <i className="fa-light fa-heart"></i>
                  </Link>
                  <div id={`carousel-grid-1-${i}`} className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target={`#carousel-grid-1-${i}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target={`#carousel-grid-1-${i}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target={`#carousel-grid-1-${i}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      {item.propertyImages?.map((item: IPropertyImage, i: number) => (
                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="1000000">
                          <Link href="/property/Titulo2" className="d-block">
                            <img src={baseApiPath(item.link || '')} className="w-100" alt="..." />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="property-info pt-20">
                <Link href="/property/Titulo2" className="title tran3s">
                  {item.title}
                </Link>
                <div className="address">{item.address}</div>
                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                  <li className="d-flex align-items-center">
                    <Image src={featureIcon_1} alt="" className="lazy-img icon me-2" />
                    <span className="fs-16">
                      <span className="color-dark">{featureSqft?.value || 0}</span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <Image src={featureIcon_2} alt="" className="lazy-img icon me-2" />
                    <span className="fs-16">
                      <span className="color-dark">{featureBed?.value || 0}</span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <Image src={featureIcon_3} alt="" className="lazy-img icon me-2" />
                    <span className="fs-16">
                      <span className="color-dark">{featureBath?.value || 0}</span>
                    </span>
                  </li>
                </ul>
                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                  <strong className="price fw-500 color-dark">
                    R$
                    {item.priceSale}
                  </strong>{' '}
                  <Link href={`/property/${item.slug}`} className="btn-four">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListingGridArea;
