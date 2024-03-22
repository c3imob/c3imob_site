import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IPropertyType } from 'src/components/models/PropertyType/property-type-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-types`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['propertyCategory', 'propertyType', 'propertySubType', 'properties.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-types`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['propertyCategory', 'propertyType', 'propertySubType'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-types`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['propertyCategory', 'propertyType', 'propertySubType'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IPropertyType, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`property-types`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IPropertyType, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`property-types`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`property-types`, {
        id: id,
        onSuccess,
    });
};
