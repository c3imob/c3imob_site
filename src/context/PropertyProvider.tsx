import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { PropertyInterface } from "./PropertyInterface";

interface PropertyContextType {
  property: PropertyInterface | null;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [property, setProperty] = useState<PropertyInterface | null>(null);
  const location = useLocation();

  const parseSlugFromURL = () => {
    const paths = location.pathname.split("/");
    const slug = paths[paths.length - 1];
    return slug;
  };

  useEffect(() => {
    const fetchPropertyBySlug = async (slug: string) => {
      return null;
    };

    const slug = parseSlugFromURL();
    fetchPropertyBySlug(slug).then(setProperty);
  }, [location]);

  return (
    <PropertyContext.Provider value={{ property }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyListsContext = () => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};

export default PropertyProvider;
