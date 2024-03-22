import { Dayjs } from 'dayjs';
import { IFilter } from 'src/util/entity-utils';

export const ApiPathAgent = 'agents';
export interface IAgent {
    id?: number;
    title?: string;
    thumbContentType?: string;
    thumbBase64?: string;
    thumbFileName?: string;
    thumb?: any;
    tag?: string;
    email?: string;
    telephone?: string;
    whatsap?: string;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgentFilter {
    id?: IFilter<number>;
    title?: IFilter<string>;
    thumbContentType?: string;
    thumbBase64?: string;
    thumbFileName?: string;
    thumb?: IFilter<any>;
    tag?: IFilter<string>;
    email?: IFilter<string>;
    telephone?: IFilter<string>;
    whatsap?: IFilter<string>;

    createdBy?: number;
    createdDate?: Dayjs;
    lastModifiedBy?: number;
    lastModifiedDate?: Dayjs;
    deletedAt?: Dayjs;
}

export interface IAgentFilters extends IAgentFilter {
    baseFilters?: string;
    extraFilters?: string;
    activePage?: number;
    itemsPerPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
}

export const defaultValue: Readonly<IAgent> = {
    id: 0,
};
