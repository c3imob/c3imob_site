import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IFeature } from 'src/components/models/Feature/feature-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`features`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['title', 'order', 'size', 'showInFilter', 'sizeInFilter', 'type', 'propertyFeatures.id', 'featureCategory.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`features`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['title', 'order', 'size', 'showInFilter', 'sizeInFilter', 'type', 'propertyFeatures.id', 'featureCategory.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`features`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['title', 'order', 'size', 'showInFilter', 'sizeInFilter', 'type', 'propertyFeatures.id', 'featureCategory.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IFeature, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`features`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IFeature, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`features`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`features`, {
        id: id,
        onSuccess,
    });
};
