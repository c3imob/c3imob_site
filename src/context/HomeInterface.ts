import { StaticImageData } from "next/image";

export interface AgentInterface {
  id: number;
  page: string;
  thumb: StaticImageData;
  title: string;
  desc: string;
}

export interface BlogInterface {
  id: number;
  page: string;
  class_name: string;
  date: string;
  info_name: string;
  info_time: number;
  title: string;
  data_delay_time?: string;
}

export interface BrandInterface {
  id: number;
  page: string;
  img: StaticImageData[];
}

export interface CategoryInterface {
  id: number;
  page: string;
  icon?: StaticImageData;
  text: string;
  item_bg_img?: string;
  data_delay_time?: string;
}
[];

export interface DropdownInterface {
  id: number;
  page: string;
  col?: string;
  border_lg?: string;
  label: string;
  options: {
    value: string;
    text: string;
  }[];
  className?: string;
}
[];

export interface FaqInterface {
  id: number;
  page: string;
  question: string;
  answer: string;
  showAnswer: boolean;
}

export interface FeatureInterface {
  id: number;
  page: string;
  item_bg?: string;
  img?: StaticImageData;
  icon?: StaticImageData;
  title: string;
  desc?: string;
  tag?: string;
  data_delay_time?: string;
  btn?: string;
  class_name?: string;
}

export interface FeaturedListingInterface {
  id: number;
  page: string;
  tag: string;
  title: string;
  address: string;
  data_delay_time?: string;
  item_bg_img: string;
  property_info: {
    feature: string;
    total_feature: number;
  }[];
}
[];

export interface FeedbackInterface {
  id: number;
  page: string;
  desc: string;
  title: string;
  country: string;
  thumb: StaticImageData;
  quote_icon: StaticImageData;
}

export interface FooterInterface {
  id: number;
  page: string;
  widget_title: string;
  widget_class?: string;
  widget_class2?: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

export interface MenuInterface {
  id: number;
  title: string;
  class_name?: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
  menu_column?: {
    id: number;
    mega_title: string;
    mega_menus: {
      link: string;
      title: string;
    }[];
  }[];
}
[];

export interface PropertyHomeInterface {
  id: number;
  page: string;
  tag: string;
  tag_bg?: string;
  thumb?: StaticImageData;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];
  title: string;
  address: string;
  property_info: {
    icon: StaticImageData;
    feature: string;
    total_feature: number;
  }[];
  data_delay_time?: string;
  price: number;
  price_text?: string;
  carousel?: string;
}
[];
