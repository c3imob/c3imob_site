import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import {} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import { PropertyListFilterInterface, PropertyInterface } from "./PropertyInterface"

interface PropertyListContext {
  listings: PropertyInterface[];
  setPropertyLists: (listings: PropertyInterface[]) => void;
  filters: Partial<PropertyListFilterInterface>;
  updateFilters: (newFilters: Partial<PropertyListFilterInterface>) => void;
}

const PropertyListContext = createContext<PropertyListContext | undefined>(undefined);

const PropertyListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [listings, setPropertyLists] = useState<PropertyInterface[]>([]);
  const [filters, setFilters] = useState<Partial<PropertyListFilterInterface>>({});
  const navigate = useNavigate(); 
  const location = useLocation();

  useEffect(() => {
    const parseFiltersFromURL = () => {
      const searchParams = new URLSearchParams(location.search);
      const filters: Partial<PropertyListFilterInterface> = {};

      searchParams.forEach((value, key) => {
        if (key === "priceRange" && value.includes("-")) {
          const [min, max] = value.split("-").map(Number);
          filters.priceRange = [min, max];
        } else if (key === "keyword") {
          filters.keyword = value;
        } else {
        }
      });

      return filters;
    };

    const filtersFromURL = parseFiltersFromURL();
    setFilters(filtersFromURL);
  }, [location]);

  const updateFilters = (newFilters: Partial<PropertyListFilterInterface>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    const queryString = new URLSearchParams(updatedFilters as any).toString();
    navigate(`?${queryString}`);
  };

  return (
    <PropertyListContext.Provider
      value={{ listings, setPropertyLists, filters, updateFilters }}
    >
      {children}
    </PropertyListContext.Provider>
  );
};

export const usePropertyListsContext = () => {
  const context = useContext(PropertyListContext);
  if (context === undefined) {
    throw new Error("usePropertyLists must be used within a PropertyListProvider");
  }
  return context;
};

export default PropertyListProvider;
