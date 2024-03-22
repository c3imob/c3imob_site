import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAgent } from 'src/components/models/Agent/agent-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agents`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['title', 'thumb', 'tag', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agents`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['title', 'thumb', 'tag', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agents`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['thumb', 'title', 'tag', 'email', 'telephone', 'whatsap'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAgent, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`agents`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAgent, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`agents`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`agents`, {
        id: id,
        onSuccess,
    });
};
