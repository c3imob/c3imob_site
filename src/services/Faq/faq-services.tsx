import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IFaq } from 'src/components/models/Faq/faq-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faqs`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || ['question', 'answer', 'faqCategory.id'],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faqs`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['question', 'answer', 'faqCategory.id'],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`faqs`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || ['question', 'answer', 'faqCategory.id'],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IFaq, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`faqs`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IFaq, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`faqs`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`faqs`, {
        id: id,
        onSuccess,
    });
};
