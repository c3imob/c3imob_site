import { FeatureType } from 'src/components/enumerations/feature-type.model';
import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';

import { INumber, IString } from 'src/util/entity-utils';

const AddPropertyFetaureDTO = {
  id: INumber,
  value: IString,
  feature: { id: INumber, title: IString, type: FeatureType.String, featureCategory: { id: INumber, title: IString , description: IString } },
};
const AddPropertyImageDTO = {
  id: INumber,
  link: IString,
};

export const PropertyDetailsAreaDTO = {
  id: INumber,
  title: IString,
  slug: IString,
  youtubeVideoLink: IString,
  typeBusiness: PropertyTypeBusiness.Venda,
  overview: IString,
  observation: IString,
  priceSale: INumber,
  annualTax: IString,
  zipCode: IString,
  city: IString,
  state: IString,
  address: IString,
  neighborhood: IString,
  complement: IString,
  propertyFeatures: [AddPropertyFetaureDTO],
  propertyImages: [AddPropertyImageDTO],
};

type PropertyDetailsAreaDto = typeof PropertyDetailsAreaDTO;
export interface PropertyDetailsAreaDtoInterface extends PropertyDetailsAreaDto {}


export interface FeatureData {
  id: number;
  title: string;
  value: string;
  typeValue: FeatureType;
}
export interface FeatureCategoryData {
  id: number;
  title: string;
  description: string;
  features: FeatureData[];
}

