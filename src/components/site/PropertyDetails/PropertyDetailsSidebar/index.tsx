import PropertySidebarInfo from './PropertySidebarInfo';
import FeatureListing from './FeatureListing';
import PropertySidebarScheduleForm from './PropertySidebarScheduleForm';
import MortgageCalculator from './MortgageCalculator';
import { PropertyDetailsAreaDtoInterface } from '../PropertyDetailsAreaDTO';

interface PropertySidebarInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertySidebar = ({ property }: PropertySidebarInterface) => {
  return (
    <div className="col-xl-4 col-lg-8 me-auto ms-auto">
      <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
        <div className="agent-info bg-white border-20 p-30 mb-40">
          <PropertySidebarInfo  property={property} />
        </div>
        <div className="tour-schedule bg-white border-20 p-30 mb-40">
          <h5 className="mb-40">Agendar visita</h5>
          <PropertySidebarScheduleForm  property={property} />
        </div>
        <div className="mortgage-calculator bg-white border-20 p-30 mb-40">
          <h5 className="mb-40">Calcular financiamento</h5>
          <MortgageCalculator property={property} />
        </div>
        <FeatureListing />
      </div>
    </div>
  );
};

export default PropertySidebar;
