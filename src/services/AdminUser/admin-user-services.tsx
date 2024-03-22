import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAdminUser } from 'src/components/models/AdminUser/admin-user-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-users`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || [
            'fullname',
            'cellphone',
            'adminProfile.id',
            'adminProfile.name',
            'adminPermissionUsers.id',
            'adminPermissionUsers.adminPermission.id',
            'adminPermissionUsers.adminPermission.name',
            'adminWhiteLabel.id',
        ],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-users`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || [
            'login',
            'fullname',

            'adminProfile.id',
            'adminProfile.name',

            'adminPermissionUsers.id',
            'adminPermissionUsers.adminPermission.id',
            'adminPermissionUsers.adminPermission.name',

            'adminWhiteLabel.id',
        ],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`admin-users`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || [
            'login',
            'fullname',

            'adminProfile.id',
            'adminProfile.name',

            'adminPermissionUsers.id',
            'adminPermissionUsers.adminPermission.id',
            'adminPermissionUsers.adminPermission.name',

            'adminWhiteLabel.id',
        ],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAdminUser, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`admin-users`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAdminUser, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`admin-users`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`admin-users`, {
        id: id,
        onSuccess,
    });
};
