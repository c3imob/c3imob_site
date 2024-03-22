import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathBlog = 'blogs';
export interface IBlog {
    id?: number;
    page?: string;
    className?: string;
    imgTransparent?: string;
    infoName?: string;
    infoTime?: number;
    title?: string;
    desc?: string;
    category?: string;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IBlogFilter {
    id?: IFilter<number>;
    page?: IFilter<string>;
    className?: IFilter<string>;
    imgTransparent?: IFilter<string>;
    infoName?: IFilter<string>;
    infoTime?: IFilter<number>;
    title?: IFilter<string>;
    desc?: IFilter<string>;
    category?: IFilter<string>;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IBlogFilters extends IBlogFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IBlog> = {
    id: 0,
};
