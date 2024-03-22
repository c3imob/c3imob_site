import { useAddPropertyContext } from 'src/context/AddPropertyProvider/AddPropertyProvider';
import { IFeature } from 'src/components/models/Feature/feature-model';
import { IFeatureCategory } from 'src/components/models/FeatureCategory/feature-category-model';
import { ChangeEvent, useEffect, useState } from 'react';

const ListingDetails = () => {
  const { formFunctions, features } = useAddPropertyContext();
  const [listFeaturesEdited, setListFeaturesEdited] = useState<{ id: number; value: string }[]>([]);
  const { getValues, setValue } = formFunctions;

  useEffect(() => {
    const { features } = getValues();
    if (features) {
      setListFeaturesEdited(features || []);
    }
  }, [getValues('features')]);

  const handleChangeFeature = (featureId: number, newValue: string) => {
    console.info('handleChangeFeature',featureId, newValue);
    const valueFeatures = [...(getValues('features') || [])];
    const featureIndex = valueFeatures.findIndex((feature: IFeature) => feature.id === featureId);

    if (featureIndex > -1) {
      valueFeatures.splice(featureIndex, 1, { id: featureId, value: newValue });
    } else {
      valueFeatures.push({ id: featureId, value: newValue });
    }
    setListFeaturesEdited(valueFeatures);
    setValue('features', valueFeatures);
  };

  const featureCategories: { [id: number]: IFeatureCategory } = {};
  features.forEach((feature: IFeature) => {
    const featureCategoriesId: number = feature?.featureCategory?.id || 0;
    if (featureCategoriesId > 0) {
      if (!featureCategories[featureCategoriesId]) {
        featureCategories[featureCategoriesId] = { ...feature.featureCategory, features: [] };
      }
      featureCategories[featureCategoriesId].features?.push({ ...feature, featureCategory: undefined });
    }
  });

  const inputTypeString = (title: string, featureId: number) => {
    const value = listFeaturesEdited.find((feature: IFeature) => feature.id === featureId)?.value;
    return (
      <>
        <label htmlFor={`#feature-input-${featureId}`}>{title}</label>
        <input type="text" value={value} id={`feature-input-${featureId}`} onChange={(event) => handleChangeFeature(featureId, event.target.value)} name={`feature-input-${featureId}`} placeholder="" />
      </>
    );
  };
  const inputTypeInteger = (title: string, featureId: number) => {
    const value = listFeaturesEdited.find((feature: IFeature) => feature.id === featureId)?.value;
    return (
      <>
        <label htmlFor={`#feature-input-${featureId}`}>{title}</label>
        <input type="number" value={value} id={`feature-input-${featureId}`} onChange={(event) => handleChangeFeature(featureId, event.target.value)} name={`feature-input-${featureId}`} placeholder="" />
      </>
    );
  };
  const inputTypeBoolean = (title: string, featureId: number) => {
    const checked = listFeaturesEdited.find((feature: IFeature) => feature.id === featureId)?.value === '1';
    return (
      <div className="style-none d-flex flex-wrap filter-input">
        <input checked={checked} type="checkbox" id={`feature-input-${featureId}`} onChange={(event) => handleChangeFeature(featureId, event.target.checked ? '1' : '0')} name={`feature-input-${featureId}`} />
        <label htmlFor={`#feature-input-${featureId}`} onClick={(event) => handleChangeFeature(featureId, !checked ? '1' : '0')} >{title}</label>
      </div>
    );
  };

  const inputByType = (title: string, featureId: number, type: string, value: string | number | boolean) => {
    switch (type) {
      case 'String':
        return inputTypeString(title, featureId);
      case 'Integer':
        return inputTypeInteger(title, featureId);
      case 'Boolean':
        return inputTypeBoolean(title, featureId);
      default:
        return inputTypeString(title, featureId);
    }
  };

  return (
    <>
      {Object.values(featureCategories).map((category, i) => (
        <div key={i} className="bg-white card-box border-20 mt-40">
          <h4 className="dash-title-three">{category.title}</h4>
          <div className="row align-items-end">
            {category.features?.map((feature) => (
              <div className={`col-md-${feature.size}`} key={feature.id}>
                <div className="dash-input-wrapper mb-30">{inputByType(`${feature.title}`, feature.id || 0, `${feature.type}`, `0`)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListingDetails;
