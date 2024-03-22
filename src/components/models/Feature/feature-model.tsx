import { IPropertyFeature, IPropertyFeatureFilter } from 'src/components/models/PropertyFeature/property-feature-model';
import { IFeatureCategory, IFeatureCategoryFilter } from 'src/components/models/FeatureCategory/feature-category-model';
import { FeatureType } from 'src/components/enumerations/feature-type.model';
import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathFeature = 'features';
export interface IFeature {
    id?: number;
    order?: number;
    title?: string;
    size?: number;
    showInFilter?: boolean;
    sizeInFilter?: number;
    type?: FeatureType;
    propertyFeatures?: IPropertyFeature[];
    featureCategory?: IFeatureCategory;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFeatureFilter {
    id?: IFilter<number>;
    order?: IFilter<number>;
    title?: IFilter<string>;
    size?: IFilter<number>;
    showInFilter?: IFilter<boolean>;
    sizeInFilter?: IFilter<number>;
    type?: IFilter<FeatureType>;
    propertyFeatures?: IPropertyFeatureFilter[];
    featureCategory?: IFeatureCategoryFilter[];

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IFeatureFilters extends IFeatureFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IFeature> = {
    id: 0,
};
