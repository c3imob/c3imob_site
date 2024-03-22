import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';
import { IProperty } from 'src/components/models/Property/property-model';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';
import { INumber, IString } from 'src/util/entity-utils';

const ListingLayoutFetaureDTO: IPropertyFeature = {
  id: INumber,
  value: IString,
  feature: { id: INumber },
};
const ListingLayoutImageDTO: IPropertyImage = {
  id: INumber,
  link: IString,
};

export const ListingLayoutDTO: IProperty = {
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
  propertyFeatures: [ListingLayoutFetaureDTO],
  propertyImages: [ListingLayoutImageDTO],
};

type ListingLayoutDto = typeof ListingLayoutDTO;
export interface ListingLayoutDtoInterface extends ListingLayoutDto {}
