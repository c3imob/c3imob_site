import ListingLayout from "./ListingLayout"
import FancyBanner from "@/components/common/FancyBanner"
import Header from "src/components/site/Header";
import Footer from '../Footer';

const PropertyListFilter = () => {
   return (
      <>
         <Header />
         <ListingLayout/>
         <FancyBanner />
         <Footer />
      </>
   )
}

export default PropertyListFilter;
