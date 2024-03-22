import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathAgencyService = 'agency-services';
export interface IAgencyService {
    id?: number;
    order?: number;
    title?: string;
    description?: any;
    iconContentType?: string;
    iconBase64?: string;
    iconFileName?: string;
    icon?: any;
    buttonText?: string;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgencyServiceFilter {
    id?: IFilter<number>;
    order?: IFilter<number>;
    title?: IFilter<string>;
    description?: IFilter<any>;
    iconContentType?: string;
    iconBase64?: string;
    iconFileName?: string;
    icon?: IFilter<any>;
    buttonText?: IFilter<string>;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgencyServiceFilters extends IAgencyServiceFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IAgencyService> = {
    id: 0,
};
