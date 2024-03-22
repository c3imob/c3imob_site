
import Header from "src/components/site/Header";
import ListingDetailsArea from "./PropertyDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"
import Footer from '../Footer';

const PropertyDetails = () => {
  return (
    <>
      <Header />
      <ListingDetailsArea />
      <FancyBanner />
      <Footer />
    </>
  )
}

export default PropertyDetails
