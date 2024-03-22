import { IProperty, IPropertyFilter } from 'src/components/models/Property/property-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathPropertyImage = 'property-images';
export interface IPropertyImage {
    id?: number;
    order?: number;
    title?: string;
    linkContentType?: string;
    linkBase64?: string;
    linkFileName?: string;
    link?: any;
    description?: any;
    property?: IProperty;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyImageFilter {
    id?: IFilter<number>;
    order?: IFilter<number>;
    title?: IFilter<string>;
    linkContentType?: string;
    linkBase64?: string;
    linkFileName?: string;
    link?: IFilter<any>;
    description?: IFilter<any>;
    property?: IPropertyFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IPropertyImageFilters extends IPropertyImageFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IPropertyImage> = {
    id: 0,
};
