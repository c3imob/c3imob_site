import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';
import { IProperty } from 'src/components/models/Property/property-model';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';
import { INumber, IString } from 'src/util/entity-utils';

const AddPropertyFetaureDTO: IPropertyFeature = {
  id: INumber,
  value: IString,
  feature: { id: INumber },
};
const AddPropertyImageDTO: IPropertyImage = {
  id: INumber,
  link: IString,
};

export const AddPropertyDTO: IProperty = {
  title: IString,
  slug: IString,
  typeBusiness: PropertyTypeBusiness.Venda,
  observation: IString,
  overview: IString,
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

type AddPropertyDto = typeof AddPropertyDTO;
export interface AddPropertyDtoInterface extends AddPropertyDto {}
