import { IFaq, IFaqFilter } from 'src/components/models/Faq/faq-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathFaqCategory = 'faq-categories';
export interface IFaqCategory {
    id?: number;
    name?: string;
    title?: string;
    faqs?: IFaq[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFaqCategoryFilter {
    id?: IFilter<number>;
    name?: IFilter<string>;
    title?: IFilter<string>;
    faqs?: IFaqFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFaqCategoryFilters extends IFaqCategoryFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IFaqCategory> = {
    id: 0,
};
