import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IFaqCategory } from 'src/components/models/FaqCategory/faq-category-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faq-categories`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['name', 'title', 'faqs.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faq-categories`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'title', 'faqs.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faq-categories`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['name', 'title', 'faqs.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IFaqCategory, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`faq-categories`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IFaqCategory, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`faq-categories`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`faq-categories`, {
        id: id,
        onSuccess,
    });
};
