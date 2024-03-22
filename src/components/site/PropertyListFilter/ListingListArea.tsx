'use client';
import Image from 'next/image';
import Link from 'next/link';
import Fancybox from '@/components/common/Fancybox';
import { IListingAreaInterface } from './ListingLayout';
import { IProperty } from 'src/components/models/Property/property-model';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { baseApiPath } from 'src/util/entity-utils';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';

import featureIcon_Sqft from '@/assets/images/icon/icon_47.svg';
import featureIcon_Bed from '@/assets/images/icon/icon_48.svg';
import featureIcon_Bath from '@/assets/images/icon/icon_49.svg';
import featureIcon_Kitchen from '@/assets/images/icon/icon_50.svg';

const ListingListArea = ({ propertyList }: IListingAreaInterface) => {
  return (
    <>
      {' '}
      {propertyList.map((item: IProperty, i: number) => {
        const featureSqft: IPropertyFeature | undefined = item.propertyFeatures?.find((v) => v.feature?.id === 60);
        const featureBed: IPropertyFeature | undefined = item.propertyFeatures?.find((v) => v.feature?.id === 49);
        const featureBath: IPropertyFeature | undefined = item.propertyFeatures?.find((v) => v.feature?.id === 53);
        const featureKitchen: IPropertyFeature | undefined = item.propertyFeatures?.find((v) => v.feature?.id === 61);

        return (
          <div key={item.id} className="listing-card-seven grey-bg mb-50 wow fadeInUp">
            <div className="d-flex flex-wrap layout-one">
              <div className="img-gallery">
                <div className="position-relative overflow-hidden">
                  <div className="tag fw-500">{item.typeBusiness}</div>
                  <Link href="#" className="fav-btn tran3s">
                    <i className="fa-light fa-heart"></i>
                  </Link>
                  <div id={`carousel-list-1-${i}`} className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target={`#carousel-list-1-${i}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target={`#carousel-list-1-${i}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target={`#carousel-list-1-${i}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
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

              <div className="property-info pe-4 ps-4">
                <Link href="/property/Titulo2" className="title tran3s mb-15">
                  {item.title}
                </Link>
                <div className="address">{item.address}</div>
                <div className="feature border-0 mt-45 mb-30">
                  <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                    <li>
                    <Image src={featureIcon_Sqft} alt="" className="lazy-img icon me-2" />
                      <strong>{featureSqft?.value || 0}</strong> 
                    </li>
                    <li>
                    <Image src={featureIcon_Bed} alt="" className="lazy-img icon me-2" />
                      <strong>{featureBed?.value || 0}</strong> 
                    </li>
                    <li>
                    <Image src={featureIcon_Bath} alt="" className="lazy-img icon me-2" />
                      <strong>{featureBath?.value || 0}</strong> 
                    </li>
                    <li>
                    <Image src={featureIcon_Kitchen} alt="" className="lazy-img icon me-2" />
                      <strong>{featureKitchen?.value || 0}</strong>
                    </li>
                  </ul>
                </div>
                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                  <strong className="price fw-500 color-dark me-auto">R$ {item.priceSale}</strong>
                  <ul className="style-none d-flex action-icons me-4">
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-bookmark"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-light fa-circle-plus"></i>
                      </Link>
                    </li>
                  </ul>
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

export default ListingListArea;
