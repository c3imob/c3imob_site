"use client"

import React, { createContext, useContext, ReactNode, useState } from "react";
import {
  AgentInterface,
  BlogInterface,
  BrandInterface,
  CategoryInterface,
  DropdownInterface,
  FaqInterface,
  FeatureInterface,
  FeaturedListingInterface,
  FeedbackInterface,
  FooterInterface,
  MenuInterface,
  PropertyHomeInterface,
} from "./HomeInterface";

interface HomeContextType {
  agent: AgentInterface[];
  blog: BlogInterface[];
  brand: BrandInterface[];
  category: CategoryInterface[];
  dropdown: DropdownInterface[];
  faq: FaqInterface[];
  feature: FeatureInterface[];
  featuredListing: FeaturedListingInterface[];
  feedback: FeedbackInterface[];
  footer: FooterInterface[];
  menu: MenuInterface[];
  property: PropertyHomeInterface[];

  setAgent: (listings: AgentInterface[]) => void;
  setBlog: (listings: BlogInterface[]) => void;
  setBrand: (listings: BrandInterface[]) => void;
  setCategory: (listings: CategoryInterface[]) => void;
  setDropdown: (listings: DropdownInterface[]) => void;
  setFaq: (listings: FaqInterface[]) => void;
  setFeature: (listings: FeatureInterface[]) => void;
  setFeaturedListing: (listings: FeaturedListingInterface[]) => void;
  setFeedback: (listings: FeedbackInterface[]) => void;
  setFooter: (listings: FooterInterface[]) => void;
  setMenu: (listings: MenuInterface[]) => void;
  setProperty: (listings: PropertyHomeInterface[]) => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

const HomeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [agent, setAgent] = useState<AgentInterface[]>([]);
  const [blog, setBlog] = useState<BlogInterface[]>([]);
  const [brand, setBrand] = useState<BrandInterface[]>([]);
  const [category, setCategory] = useState<CategoryInterface[]>([]);
  const [dropdown, setDropdown] = useState<DropdownInterface[]>([]);
  const [faq, setFaq] = useState<FaqInterface[]>([]);
  const [feature, setFeature] = useState<FeatureInterface[]>([]);
  const [featuredListing, setFeaturedListing] = useState<
    FeaturedListingInterface[]
  >([]);
  const [feedback, setFeedback] = useState<FeedbackInterface[]>([]);
  const [footer, setFooter] = useState<FooterInterface[]>([]);
  const [menu, setMenu] = useState<MenuInterface[]>([]);
  const [property, setProperty] = useState<PropertyHomeInterface[]>([]);

  return (
    <HomeContext.Provider
      value={{
        agent,
        blog,
        brand,
        category,
        dropdown,
        faq,
        feature,
        featuredListing,
        feedback,
        footer,
        menu,
        property,
        setAgent,
        setBlog,
        setBrand,
        setCategory,
        setDropdown,
        setFaq,
        setFeature,
        setFeaturedListing,
        setFeedback,
        setFooter,
        setMenu,
        setProperty,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};

export default HomeProvider;
