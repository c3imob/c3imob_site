import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAdminPermission } from 'src/components/models/AdminPermission/admin-permission-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-permissions`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['name', 'session', 'method'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-permissions`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'session', 'method'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-permissions`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'session', 'method'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAdminPermission, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`admin-permissions`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAdminPermission, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`admin-permissions`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`admin-permissions`, {
        id: id,
        onSuccess,
    });
};
