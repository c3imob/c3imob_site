import property_feature_list from '@/data/inner-data/PropertyFeatureListData';
import { FeatureType } from 'src/components/enumerations/feature-type.model';
import { IFeature } from 'src/components/models/Feature/feature-model';
import { IFeatureCategory } from 'src/components/models/FeatureCategory/feature-category-model';

import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { CATEGORY_MAIN_ID, CATEGORY_PROPERTY_DETAILS_ID, CATEGORY_UTILITY_DETAILS_ID, CATEGORY_OUTDOOR_RESOURCES_ID } from 'src/util/constants';

interface PropertyDetailsPropertyFeatureListInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsPropertyFeatureList = ({ property }: PropertyDetailsPropertyFeatureListInterface) => {
  const categoriesToShow = [CATEGORY_MAIN_ID, CATEGORY_PROPERTY_DETAILS_ID, CATEGORY_UTILITY_DETAILS_ID, CATEGORY_OUTDOOR_RESOURCES_ID];
  const categories: { [id: number]: FeatureCategoryData } = {};
  if (property.propertyFeatures) {
    property.propertyFeatures.forEach((propertyFeature: IPropertyFeature) => {
      const categoryId = propertyFeature.feature?.featureCategory?.id || 0;
      const categoryTitle = propertyFeature.feature?.featureCategory?.title || '';
      if (categoriesToShow.includes(categoryId)) {
        if (!categories[categoryId]) {
          categories[categoryId] = { id: categoryId, title: categoryTitle, description: "", features: [] };
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

  return (
    <div className="accordion" id="accordionTwo">
      {Object.values(categories).map((category, index) => (
        <div key={category.id} className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${category.id}`} aria-expanded="false" aria-controls={`collapse${category.id}`}>
              {category.title}
            </button>
          </h2>
          <div id={`collapse${category.id}`} className={`accordion-collapse collapse ${category.id === 1 ? 'show' : ''}`} data-bs-parent="#accordionTwo">
            <div className="accordion-body">
              <div className="feature-list-two">
                <ul className="style-none d-flex flex-wrap justify-content-between">
                  {category.features?.map((feature, i) => (
                    <li key={i}>
                      <span>{feature.title} </span> <span className="fw-500 color-dark">{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyDetailsPropertyFeatureList;
