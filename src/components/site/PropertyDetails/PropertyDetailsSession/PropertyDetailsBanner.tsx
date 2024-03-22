import Link from 'next/link';

import { PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';

interface PropertyDetailsBannerInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsBanner = ({ property }: PropertyDetailsBannerInterface) => {
  const addressArray: string[] = [];
  if (property.neighborhood) addressArray.push(property.neighborhood);
  if (property.city) addressArray.push(property.city);
  if (property.state) addressArray.push(property.state);
  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-titlee">{property.title}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div className={`list-type text-uppercase mt-15 me-3 text-uppercase border-20`}>{property.typeBusiness}</div>
          {addressArray.length > 0 && (
            <div className="address mt-15">
              <i className="bi bi-geo-alt"></i>
              {addressArray.join(' / ')}
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-40">
          <div className="price color-dark fw-500">Price: R$ {property.priceSale}</div>
          {/* <div className="est-price fs-20 mt-25 mb-35 md-mb-30">
            Est. Payment <span className="fw-500 color-dark">$8,343/mo*</span>
          </div> */}
          <ul className="style-none d-flex align-items-center action-btns">
            <li className="me-auto fw-500 color-dark"></li>
            <li>
              <Link href="#" className={`d-flex align-items-center justify-content-center tran3s rounded-circle`}>
                <i className="fa-light fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center justify-content-center tran3s rounded-circle`}>
                <i className="fa-sharp fa-regular fa-share-nodes"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsBanner;
