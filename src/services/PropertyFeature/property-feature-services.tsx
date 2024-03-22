import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-features`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['value', 'property.id', 'feature.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-features`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['value', 'property.id', 'feature.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-features`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['value', 'property.id', 'feature.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IPropertyFeature, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`property-features`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IPropertyFeature, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`property-features`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`property-features`, {
        id: id,
        onSuccess,
    });
};
