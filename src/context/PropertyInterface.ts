import { StaticImageData } from "next/image";

export interface PropertyListFilterInterface {
  id: number;
  page: string;
  tag: string;
  tag_bg?: string;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  thumb?: StaticImageData;
  bg_img?: string;
  title: string;
  address?: string;
  location: string;
  property_info: {
    sqft: number;
    bed: string;
    bath: string;
    kitchen?: string;
    parking_lot?: string;
    garden?: string;
  };
  data_delay_time?: string;
  priceRange: [number, number];
  keyword?: string;
  carousel?: string;
  type: string;
  status: string;
  amenities?: string[];
}

export interface PropertyInterface {
  id: number;
  page: string;
  tag: string;
  tag_bg?: string;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  thumb?: StaticImageData;
  bg_img?: string;
  title: string;
  address?: string;
  location: string;
  property_info: {
    sqft: number;
    bed: string;
    bath: string;
    kitchen?: string;
    parking_lot?: string;
    garden?: string;
  };
  data_delay_time?: string;
  price: number;
  price_text?: string;
  carousel?: string;
  type: string;
  status: string;
  amenities?: string[];
}

export interface AddPropertyInterface {
  id: number;
  page: string;
  tag: string;
  tag_bg?: string;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  thumb?: StaticImageData;
  bg_img?: string;
  title: string;
  address?: string;
  location: string;
  property_info: {
    sqft: number;
    bed: string;
    bath: string;
    kitchen?: string;
    parking_lot?: string;
    garden?: string;
  };
  data_delay_time?: string;
  price: number;
  price_text?: string;
  carousel?: string;
  type: string;
  status: string;
  amenities?: string[];
}
