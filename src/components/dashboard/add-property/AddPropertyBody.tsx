'use client';
import DashboardHeader from '@/layouts/headers/dashboard/DashboardHeader';
import Overview from './Overview';
import ListingDetails from './ListingDetails';
import Link from 'next/link';
import PropertyPhotos from './PropertyPhotos';
import AddressAndLocation from '../profile/AddressAndLocation';
import { useRouter } from 'next/navigation';

import { apiGetEntityView as getProperty, apiUpdateEntity as updateProperty, apiNewEntity as newProperty } from 'src/services/Property/property-services';
import { apiDeleteEntity as deletePropertyImage, apiNewEntity as newPropertyImage } from 'src/services/PropertyImage/property-image-services';
import { apiUpdateEntity as updatePropertyFeature, apiNewEntity as newPropertyFeature } from 'src/services/PropertyFeature/property-feature-services';

import { FieldErrors, useForm } from 'react-hook-form';
import { IPropertyImage } from 'src/components/models/PropertyImage/property-image-model';
import { IProperty } from 'src/components/models/Property/property-model';
import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';
import createSlug from 'src/util/functions/createSlug';
import { AddPropertyFormValuesInterface, useAddPropertyContext } from 'src/context/AddPropertyProvider/AddPropertyProvider';
import { useEffect } from 'react';
import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';
import { AddPropertyDtoInterface } from 'src/context/AddPropertyProvider/AddPropertyDTO';
import { baseApiPath } from 'src/util/entity-utils';

const AddPropertyBody = () => {
  const { push } = useRouter();
  const { formFunctions, property, isNew } = useAddPropertyContext();
  const { handleSubmit, reset } = formFunctions;

  const saveProperty = async (data: AddPropertyFormValuesInterface) => {
    const propertyForm: IProperty = {
      title: data.title,
      slug: data.title != property?.title ? createSlug(data.title) : property?.slug || '',
      typeBusiness: data.typeBusiness,
      observation: data.observation,
      overview: data.overview,
      priceSale: data.price,
      annualTax: data.annualTax,
      zipCode: data.zipCode,
      city: data.city,
      state: data.state,
      address: data.address,
      neighborhood: data.neighborhood,
      complement: data.complement,
    };

    if (isNew) {
      const propertyDB = (await newProperty(propertyForm)).data;
      await saveNewPropertyImage(propertyDB?.id, data.newPhotos || []);
      await saveNewPropertyFeature(propertyDB?.id, data.features || []);
    } else if (property?.id) {
      await updateProperty({ id: property?.id, ...propertyForm });
      await deleteAllPropertyImage(data.removePhotosId || []);
      await saveNewPropertyImage(property?.id, data.newPhotos || []);
      await updateAllPropertyFeature(property?.id, data.features || [], property?.propertyFeatures || []);
    }

    push('/dashboard/properties-list');
  };

  const onInvalid = (dataError: FieldErrors<AddPropertyFormValuesInterface>) => {
    console.info('onInvalid', { dataError });
  };

  useEffect(() => {
    if (property?.id) {
      getAdminUserSuccess(property);
    }
  }, [property?.id]);

  const getAdminUserSuccess = (property: AddPropertyDtoInterface) => {
    const oldPhotos = property.propertyImages?.map((image) => ({ id: image.id || 0, link: baseApiPath(image.link) || '' }));
    const features = property.propertyFeatures?.map((propertyFeature) => ({
      id: propertyFeature.feature?.id || 0,
      value: propertyFeature.value || '',
    }));

    const propertyForm: AddPropertyFormValuesInterface = {
      id: property.id,
      title: property.title || '',
      observation: property.observation || '',
      overview: property.overview || '',
      category: 'Apartamento',
      typeBusiness: (property.typeBusiness as NonNullable<PropertyTypeBusiness | undefined>) || '',
      price: property.priceSale || 0,
      annualTax: property.annualTax || '',
      zipCode: property.zipCode || '',
      city: property.city,
      state: property.state || '',
      address: property.address,
      neighborhood: property.neighborhood,
      complement: property.complement,
      features,
      oldPhotos,
      newPhotos: [],
      removePhotosId: [],
    };

    reset(propertyForm);
  };

  return (
    <>
      <h2 className="main-title d-block d-lg-none">Adicionar nova Propiedade</h2>

      <form onSubmit={handleSubmit(saveProperty, onInvalid)}>
        <div
          className="float-end button-group d-flex flex-row-reverse mt-15a2w 
          +6587"
        >
          <Link onClick={handleSubmit(saveProperty, onInvalid)} href="#" className="dash-btn-two tran3s me-3">
            Salvar
          </Link>
        </div>
        <Overview />
        <PropertyPhotos />
        <AddressAndLocation />
        <ListingDetails />
      </form>
    </>
  );
};

const saveNewPropertyImage = async (propertyId: number, newPhotos: string[]) => {
  for (let i = 0; i < (newPhotos || []).length; i++) {
    const linkBase64 = newPhotos?.[i];
    const photoObj: IPropertyImage = {
      order: i,
      linkBase64,
      property: { id: propertyId },
    };
    await newPropertyImage(photoObj);
  }
};
const deleteAllPropertyImage = async (photosIds: number[]) => {
  for (let i = 0; i < (photosIds || []).length; i++) {
    const photosId: number = photosIds[i] || 0;
    await deletePropertyImage(photosId);
  }
};
const saveNewPropertyFeature = async (propertyId: number, features: { id: number; value: string }[]) => {
  for (let i = 0; i < (features || []).length; i++) {
    const featureData = features?.[i];
    const photoObj: IPropertyFeature = {
      value: featureData?.value,
      property: { id: propertyId },
      feature: { id: featureData?.id },
    };
    await newPropertyFeature(photoObj);
  }
};
const updateAllPropertyFeature = async (propertyId: number, features: { id: number; value: string }[], propertyFeatures: IPropertyFeature[]) => {
  for (let i = 0; i < (features || []).length; i++) {
    const featureData = features?.[i];
    const propertyFeature = propertyFeatures.find((propertyFeature) => propertyFeature.feature?.id === featureData?.id);
    if (propertyFeature) {
      if (featureData?.value !== propertyFeature.value)
        await updatePropertyFeature({
          id: propertyFeature.id,
          value: featureData?.value,
        });
    } else {
      await newPropertyFeature({
        value: featureData?.value,
        property: { id: propertyId },
        feature: { id: featureData?.id },
      });
    }
  }
};

export default AddPropertyBody;
