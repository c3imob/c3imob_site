import { IPropertyImage, IPropertyImageFilter } from 'src/components/models/PropertyImage/property-image-model';
import { IPropertyType, IPropertyTypeFilter } from 'src/components/models/PropertyType/property-type-model';
import { IPropertyFeature, IPropertyFeatureFilter } from 'src/components/models/PropertyFeature/property-feature-model';
import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathProperty = 'properties';
export interface IProperty {
    id?: number;
    slug?: string;
    title?: string;
    typeBusiness?: PropertyTypeBusiness;
    overview?: string;
    observation?: string;
    details?: string;
    detailsCondo?: string;
    annualTax?: string;
    city?: string;
    neighborhood?: string;
    address?: string;
    state?: string;
    number?: string;
    complement?: string;
    youtubeVideoLink?: string;
    zipCode?: string;
    priceSale?: number;
    priceRent?: number;
    priceCondo?: number;
    propertyImages?: IPropertyImage[];
    propertyType?: IPropertyType;
    propertyFeatures?: IPropertyFeature[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyFilter {
    id?: IFilter<number>;
    slug?: IFilter<string>;
    title?: IFilter<string>;
    typeBusiness?: IFilter<PropertyTypeBusiness>;
    overview?: IFilter<string>;
    observation?: IFilter<string>;
    details?: IFilter<string>;
    detailsCondo?: IFilter<string>;
    annualTax?: IFilter<string>;
    city?: IFilter<string>;
    neighborhood?: IFilter<string>;
    address?: IFilter<string>;
    state?: IFilter<string>;
    number?: IFilter<string>;
    complement?: IFilter<string>;
    youtubeVideoLink?: IFilter<string>;
    zipCode?: IFilter<string>;
    priceSale?: IFilter<number>;
    priceRent?: IFilter<number>;
    priceCondo?: IFilter<number>;
    propertyImages?: IPropertyImageFilter[];
    propertyType?: IPropertyTypeFilter[];
    propertyFeatures?: IPropertyFeatureFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyFilters extends IPropertyFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IProperty> = {
    id: 0,
};
