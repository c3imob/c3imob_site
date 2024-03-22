'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { IFeature } from 'src/components/models/Feature/feature-model';
import { useSearchParams } from 'next/navigation';
import { apiGetList as apiGetFeature } from 'src/services/Feature/feature-services';
import { apiGetList as apiGetProperty } from 'src/services/Property/property-services';
import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UseFormReturn, useForm } from 'react-hook-form';
import { AddPropertyDTO, AddPropertyDtoInterface } from './AddPropertyDTO';
import transformJSONObjectToArray from 'src/util/functions/transformJSONObjectToArray';

interface AddPropertyContextType {
  isNew: boolean;
  property: AddPropertyDtoInterface | null;
  features: IFeature[];
  setFeatures: (features: IFeature[]) => void;
  formFunctions: UseFormReturn<AddPropertyFormValuesInterface, any, undefined>;
}

export interface AddPropertyFormValuesInterface {
  id?: number;
  title: string;
  observation: string;
  overview: string;
  category: string;
  typeBusiness: NonNullable<PropertyTypeBusiness | undefined>;
  price: number;
  annualTax: string;

  zipCode?: string;
  city?: string;
  state?: string;
  address?: string;
  neighborhood?: string;
  complement?: string;

  features?: {
    id: number;
    value: string;
  }[];
  newPhotos?: string[];
  oldPhotos?: { id: number; link: string }[];
  removePhotosId?: number[];
}

const AddPropertyContext = createContext<AddPropertyContextType | undefined>(undefined);

const AddPropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [property, setProperty] = useState<AddPropertyDtoInterface | null>(null);
  const [features, setFeatures] = useState<IFeature[]>([]);

  const searchParams = useSearchParams();
  const propertySlug = searchParams.get('property');

  const schema = yup.object({
    id: yup.number().label('Id'),
    title: yup.string().required(),
    overview: yup.string().required(),
    observation: yup.string().required(),
    category: yup.string().required(),
    typeBusiness: yup.mixed<PropertyTypeBusiness>().oneOf(Object.values(PropertyTypeBusiness), 'Invalid component type').required('Component type is required'),
    price: yup.number().required(),
    annualTax: yup.string().required(),
    zipCode: yup.string().optional(),
    city: yup.string(),
    state: yup.string().optional(),
    address: yup.string(),
    neighborhood: yup.string(),
    complement: yup.string(),
    features: yup.array(yup.object({ id: yup.number().required(), value: yup.string().required() })),
    photos: yup.array(yup.string().required()),
  });

  const formFunctions = useForm<AddPropertyFormValuesInterface>({ resolver: yupResolver(schema) });

  useEffect(() => {
    getFeatureList();
  }, []);

  useEffect(() => {
    getPropertyBySlug(propertySlug);
  }, [propertySlug]);

  const getFeatureList = async () => {
    await apiGetFeature(
      {},
      (v) => {
        v && setFeatures(v.data);
      },
      ['title', 'order', 'size', 'showInFilter', 'sizeInFilter', 'type', 'featureCategory.id', 'featureCategory.title'],
    );
  };

  const getPropertyBySlug = async (slug: string | null) => {
    await apiGetProperty(
      { filters: { 'slug.equals': slug } },
      (v) => {
        v && setProperty(v.data[0] || {});
      },
      transformJSONObjectToArray(AddPropertyDTO),
    );
  };

  const isNew = propertySlug === null;

  return <AddPropertyContext.Provider value={{ isNew, property, features, setFeatures, formFunctions }}>{children}</AddPropertyContext.Provider>;
};

export const useAddPropertyContext = () => {
  const context = useContext(AddPropertyContext);
  if (context === undefined) {
    throw new Error('useAddProperty must be used within a AddPropertyProvider');
  }
  return context;
};

export default AddPropertyProvider;
