import { IApiResponseProps } from 'src/util/entity-utils';
import apiDelete from 'src/util/functions/apiDelete';
import apiGet from 'src/util/functions/apiGet';
import apiPost from 'src/util/functions/apiPost';
import apiPut from 'src/util/functions/apiPut';
import { IProperty } from 'src/components/models/Property/property-model';

export const apiGetList = ({ sort, filters, page, size }: any, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`properties`, {
        filters,
        sort,
        page,
        size,
        selectColumns: selectColumns || [
            'title',
            'typeBusiness',
            'observation',
            'details',
            'detailsCondo',
            'annualTax',
            'city',
            'neighborhood',
            'address',
            'number',
            'zipCode',
            'priceSale',
            'priceRent',
            'priceCondo',
            'propertyImages.id',
            'propertyType.id',
            'propertyFeatures.id',
        ],
        onSuccess,
    });
};

export const apiGetEntityForm = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`properties`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || [
            'title',
            'typeBusiness',
            'observation',
            'details',
            'detailsCondo',
            'annualTax',
            'city',
            'neighborhood',
            'address',
            'number',
            'zipCode',
            'priceSale',
            'priceRent',
            'priceCondo',

            'propertyImages.id',

            'propertyType.id',

            'propertyFeatures.id',
        ],
        onSuccess,
    });
};

export const apiGetEntityView = (id: number, onSuccess?: (response: IApiResponseProps) => void, selectColumns?: string[] | undefined) => {
    return apiGet(`properties`, {
        filters: { 'id.equals': id },
        size: 1,
        selectColumns: selectColumns || [
            'title',
            'typeBusiness',
            'observation',
            'details',
            'detailsCondo',
            'annualTax',
            'city',
            'neighborhood',
            'address',
            'number',
            'zipCode',
            'priceSale',
            'priceRent',
            'priceCondo',

            'propertyImages.id',

            'propertyType.id',

            'propertyFeatures.id',
        ],
        onSuccess,
    });
};

export const apiUpdateEntity = (entityEdit: IProperty, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPut(`properties`, {
        body: entityEdit,
        onSuccess,
    });
};

export const apiNewEntity = (entityEdit: IProperty, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiPost(`properties`, {
        body: { ...entityEdit, id: undefined },
        onSuccess,
    });
};

export const apiDeleteEntity = (id: number, onSuccess?: (response: IApiResponseProps) => void) => {
    return apiDelete(`properties`, {
        id: id,
        onSuccess,
    });
};
