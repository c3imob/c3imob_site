import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAgency } from 'src/components/models/Agency/agency-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agencies`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['tag', 'category', 'thumb', 'title', 'rating', 'desc', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agencies`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['tag', 'category', 'thumb', 'title', 'rating', 'desc', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agencies`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['tag', 'category', 'thumb', 'title', 'rating', 'desc', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAgency, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`agencies`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAgency, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`agencies`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`agencies`, {
        id: id,
        onSuccess,
    });
};
