import { IProperty, IPropertyFilter } from 'src/components/models/Property/property-model';
import { IFeature, IFeatureFilter } from 'src/components/models/Feature/feature-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathPropertyFeature = 'property-features';
export interface IPropertyFeature {
    id?: number;
    value?: string;
    property?: IProperty;
    feature?: IFeature;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyFeatureFilter {
    id?: IFilter<number>;
    value?: IFilter<string>;
    property?: IPropertyFilter[];
    feature?: IFeatureFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyFeatureFilters extends IPropertyFeatureFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IPropertyFeature> = {
    id: 0,
};
