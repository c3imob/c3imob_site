import { IFeature, IFeatureFilter } from 'src/components/models/Feature/feature-model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathFeatureCategory = 'feature-categories';
export interface IFeatureCategory {
    id?: number;
    title?: string;
    description?: string;
    features?: IFeature[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFeatureCategoryFilter {
    id?: IFilter<number>;
    title?: IFilter<string>;
    description?: IFilter<string>;
    features?: IFeatureFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFeatureCategoryFilters extends IFeatureCategoryFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IFeatureCategory> = {
    id: 0,
};
