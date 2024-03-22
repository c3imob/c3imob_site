import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IAgencyService } from 'src/components/models/AgencyService/agency-service-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agency-services`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['order', 'title', 'description', 'icon', 'buttonText'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agency-services`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['order', 'title', 'description', 'icon', 'buttonText'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`agency-services`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['order', 'title', 'description', 'icon', 'buttonText'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IAgencyService, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`agency-services`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IAgencyService, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`agency-services`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`agency-services`, {
        id: id,
        onSuccess,
    });
};
