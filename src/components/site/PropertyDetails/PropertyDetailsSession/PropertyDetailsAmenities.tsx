
import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';
import { CATEGORY_AMENITIES_ID } from 'src/util/constants';
import { FeatureType } from 'src/components/enumerations/feature-type.model';

const ammenities_data: string[] = ['A/C & Heating', 'Garages', 'Garden', 'Disabled Access', 'Swimming Pool', 'Parking', 'Wifi', 'Pet Friendly', 'Ceiling Height', 'Fireplace', 'Play Ground', 'Elevator'];

interface PropertyDetailsAmenitiesInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsAmenities = ({ property }: PropertyDetailsAmenitiesInterface) => {
  const categoriesToShow = [CATEGORY_AMENITIES_ID];
  const categories: { [id: number]: FeatureCategoryData } = {};
  if (property.propertyFeatures) {
    property.propertyFeatures.forEach((propertyFeature) => {
      const categoryId = propertyFeature.feature?.featureCategory?.id || 0;
      const categoryTitle = propertyFeature.feature?.featureCategory?.title || '';
      const categoryDesc = propertyFeature.feature?.featureCategory?.description || '';
      if (categoriesToShow.includes(categoryId)) {
        if (!categories[categoryId]) {
          categories[categoryId] = { id: categoryId, title: categoryTitle, description: categoryDesc, features: [] };
        }
        categories[categoryId].features?.push({
          id: propertyFeature.id || 0,
          title: propertyFeature.feature?.title || '',
          value: propertyFeature.value || '',
          typeValue: propertyFeature.feature?.type || FeatureType.String,
        });
      }
    });
  }

  if (!Boolean(categories[CATEGORY_AMENITIES_ID]?.features)) {
    return <></>;
  }
  return (
    <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
      <h4 className="mb-20">{categories[CATEGORY_AMENITIES_ID]?.title}</h4>
      <p className="fs-20 lh-lg pb-25">{categories[CATEGORY_AMENITIES_ID]?.description}</p>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {categories[CATEGORY_AMENITIES_ID]?.features?.map((feature, i) => (
          <li key={i}>{feature.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetailsAmenities;
