import { IFaqCategory, IFaqCategoryFilter } from 'src/components/models/FaqCategory/faq-category-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathFaq = 'faqs';
export interface IFaq {
    id?: number;
    question?: string;
    answer?: string;
    faqCategory?: IFaqCategory;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFaqFilter {
    id?: IFilter<number>;
    question?: IFilter<string>;
    answer?: IFilter<string>;
    faqCategory?: IFaqCategoryFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFaqFilters extends IFaqFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IFaq> = {
    id: 0,
};
