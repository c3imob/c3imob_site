import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';
import { CATEGORY_AMENITIES_ID, CATEGORY_WHATS_NEARBY_ID } from 'src/util/constants';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { FeatureType } from 'src/components/enumerations/feature-type.model';

interface DataType {
  title: string;
  count: string;
}
[];

const list_data: DataType[] = [
  { title: 'School & Collage:', count: '0.9km' },
  { title: 'Grocery Center:', count: '0.2km' },
  { title: 'Metro Station:', count: '0.7km' },
  { title: 'Gym:', count: '2.3km' },
  { title: 'University:', count: '2.7km' },
  { title: 'Hospital:', count: '1.7km' },
  { title: 'Shopping Mall:', count: '1.1km' },
  { title: 'Police Station:', count: '1.2km' },
  { title: 'Bus Station:', count: '1.1km' },
  { title: 'River:', count: '3.1km' },
  { title: 'Market:', count: '3.4km' },
];

interface PropertyDetailsNearbyListInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsNearbyList = ({ property }: PropertyDetailsNearbyListInterface) => {
  const categoriesToShow = [CATEGORY_WHATS_NEARBY_ID];
  const categories: { [id: number]: FeatureCategoryData } = {};
  if (property.propertyFeatures) {
    property.propertyFeatures.forEach((propertyFeature: IPropertyFeature) => {
      const categoryId = propertyFeature.feature?.featureCategory?.id || 0;
      const categoryTitle = propertyFeature.feature?.featureCategory?.title || '';
      if (categoriesToShow.includes(categoryId)) {
        if (!categories[categoryId]) {
          categories[categoryId] = { id: categoryId, title: categoryTitle, description: '', features: [] };
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

  if (!Boolean(categories[CATEGORY_WHATS_NEARBY_ID]?.features)) {
   return <></>;
 }

  return (
    <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
      <h4 className="mb-20">{categories[CATEGORY_WHATS_NEARBY_ID]?.title}</h4>
      <p className="fs-20 lh-lg pb-25">{categories[CATEGORY_WHATS_NEARBY_ID]?.description}</p>
      <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
        {categories[CATEGORY_WHATS_NEARBY_ID]?.features?.map((feature, i) => (
          <li key={i}>
            {feature.title}
            <span className="fw-500 color-dark">{feature.value} km</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetailsNearbyList;
