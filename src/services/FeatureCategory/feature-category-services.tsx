import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IFeatureCategory } from 'src/components/models/FeatureCategory/feature-category-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`feature-categories`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['title', 'features.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`feature-categories`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['title', 'features.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`feature-categories`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['title', 'features.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IFeatureCategory, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`feature-categories`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IFeatureCategory, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`feature-categories`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`feature-categories`, {
        id: id,
        onSuccess,
    });
};
