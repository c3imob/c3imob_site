import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAdminProfile } from 'src/components/models/AdminProfile/admin-profile-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-profiles`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['id', 'name', 'adminPermissionProfiles.id', 'adminPermissionProfiles.adminPermission.id', 'adminPermissionProfiles.adminPermission.name'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-profiles`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'adminPermissionProfiles.id', 'adminPermissionProfiles.adminPermission.id', 'adminPermissionProfiles.adminPermission.name'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-profiles`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'adminPermissionProfiles.id', 'adminPermissionProfiles.adminPermission.id', 'adminPermissionProfiles.adminPermission.name'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAdminProfile, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`admin-profiles`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAdminProfile, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`admin-profiles`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`admin-profiles`, {
        id: id,
        onSuccess,
    });
};
