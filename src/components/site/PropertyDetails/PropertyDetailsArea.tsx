'use client';
import NiceSelect from '@/ui/NiceSelect';
import MediaGallery from './PropertyDetailsSession/PropertyDetailsGallery';
import Review from '@/components/inner-pages/agency/agency-details/Review';
import PropertyDetailsSidebar from './PropertyDetailsSidebar';
import PropertyDetailsBanner from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsBanner';
import PropertyDetailsPropertyOverview from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsPropertyOverview';
import PropertyDetailsPropertyFeatureList from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsPropertyFeatureList';
import PropertyDetailsAmenities from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsAmenities';
import PropertyDetailsPropertyVideoTour from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsPropertyVideoTour';
import PropertyDetailsPropertyFloorPlan from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsPropertyFloorPlan';
import PropertyDetailsNearbyList from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsNearbyList';
import PropertyDetailsSimilarProperty from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsSimilarProperty';
import PropertyDetailsProPertyScore from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsProPertyScore';
import PropertyDetailsLocation from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsLocation';
import PropertyDetailsReviewForm from 'src/components/site/PropertyDetails/PropertyDetailsSession/PropertyDetailsReviewForm';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { apiGetList as apiGetProperty } from 'src/services/Property/property-services';
import transformJSONObjectToArray from 'src/util/functions/transformJSONObjectToArray';
import { AddPropertyDTO } from 'src/context/AddPropertyProvider/AddPropertyDTO';
import PropertyDetailsGallery from './PropertyDetailsSession/PropertyDetailsGallery';
import { PropertyDetailsAreaDTO, PropertyDetailsAreaDtoInterface } from './PropertyDetailsAreaDTO';

const PropertyDetailsArea = () => {
  const { slug: propertySlug } = useParams();

  const [property, setProperty] = useState<PropertyDetailsAreaDtoInterface | null>(null);

  useEffect(() => {
    if (propertySlug) {
      getPropertyBySlug(String(propertySlug));
    }
  }, [propertySlug]);

  const getPropertyBySlug = async (slug: string) => {
    await apiGetProperty(
      { filters: { 'slug.equals': slug } },
      (v) => {
        v && setProperty(v.data[0] || {});
      },
      transformJSONObjectToArray(PropertyDetailsAreaDTO),
    );
  };

  const selectHandler = (e: any) => {};

  if (!property) return <></>;

  return (
    <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container">
        <PropertyDetailsBanner property={property} />
        <PropertyDetailsGallery property={property} />
        <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
          <h4 className="sub-title-one mb-40 lg-mb-20">Visão geral da propriedade</h4>
          <PropertyDetailsPropertyOverview property={property} />
        </div>
        <div className="row">
          <div className="col-xl-8">
            <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
              <h4 className="mb-20">Visão geral</h4>
              <p className="fs-20 lh-lg">{property.overview}.</p>
            </div>
            <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
              <h4 className="mb-20">Características</h4>
              <p className="fs-20 lh-lg">{property.observation}.</p>
              <div className="accordion-style-two mt-45">
                <PropertyDetailsPropertyFeatureList property={property} />
              </div>
            </div>
            <PropertyDetailsAmenities property={property} />
            <PropertyDetailsPropertyVideoTour property={property} />
            <PropertyDetailsPropertyFloorPlan property={property} />
            <PropertyDetailsNearbyList property={property} />
            <PropertyDetailsSimilarProperty property={property} />
            <PropertyDetailsProPertyScore property={property} />
            <PropertyDetailsLocation property={property} />

            <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: '01', text: 'Newest' },
                      { value: '02', text: 'Best Seller' },
                      { value: '03', text: 'Best Match' },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name=""
                    placeholder=""
                  />
                </div>
                <Review style={true} />
              </div>
            </div>
            <div className="review-form bg-white shadow4 border-20 p-40">
              <PropertyDetailsReviewForm property={property} />
            </div>
          </div>
          <PropertyDetailsSidebar property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsArea;
