import { IProperty, IPropertyFilter } from 'src/components/models/Property/property-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathPropertyType = 'property-types';
export interface IPropertyType {
    id?: number;
    propertyCategory?: string;
    propertyType?: string;
    propertySubType?: string;
    properties?: IProperty[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyTypeFilter {
    id?: IFilter<number>;
    propertyCategory?: IFilter<string>;
    propertyType?: IFilter<string>;
    propertySubType?: IFilter<string>;
    properties?: IPropertyFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyTypeFilters extends IPropertyTypeFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IPropertyType> = {
    id: 0,
};
