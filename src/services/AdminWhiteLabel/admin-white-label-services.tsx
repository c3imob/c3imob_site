import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAdminWhiteLabel } from 'src/components/models/AdminWhiteLabel/admin-white-label-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-white-labels`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['name'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-white-labels`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-white-labels`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAdminWhiteLabel, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`admin-white-labels`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAdminWhiteLabel, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`admin-white-labels`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`admin-white-labels`, {
        id: id,
        onSuccess,
    });
};
