import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IBlog } from 'src/components/models/Blog/blog-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`blogs`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['page', 'className', 'imgTransparent', 'infoName', 'infoTime', 'title', 'desc', 'category'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`blogs`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['page', 'className', 'imgTransparent', 'infoName', 'infoTime', 'title', 'desc', 'category'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`blogs`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['page', 'className', 'imgTransparent', 'infoName', 'infoTime', 'title', 'desc', 'category'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IBlog, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`blogs`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IBlog, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`blogs`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`blogs`, {
        id: id,
        onSuccess,
    });
};
