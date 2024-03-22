import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-images`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['order', 'title', 'link', 'description', 'property.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-images`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['order', 'link', 'title', 'property.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`property-images`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['link', 'title', 'property.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IPropertyImage, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`property-images`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IPropertyImage, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`property-images`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`property-images`, {
        id: id,
        onSuccess,
    });
};
