import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathAgency = 'agencies';
export interface IAgency {
    id?: number;
    tag?: string;
    category?: string;
    thumbContentType?: string;
    thumbBase64?: string;
    thumbFileName?: string;
    thumb?: any;
    title?: string;
    rating?: number;
    desc?: string;
    email?: string;
    telephone?: string;
    whatsap?: string;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgencyFilter {
    id?: IFilter<number>;
    tag?: IFilter<string>;
    category?: IFilter<string>;
    thumbContentType?: string;
    thumbBase64?: string;
    thumbFileName?: string;
    thumb?: IFilter<any>;
    title?: IFilter<string>;
    rating?: IFilter<number>;
    desc?: IFilter<string>;
    email?: IFilter<string>;
    telephone?: IFilter<string>;
    whatsap?: IFilter<string>;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgencyFilters extends IAgencyFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IAgency> = {
    id: 0,
};
