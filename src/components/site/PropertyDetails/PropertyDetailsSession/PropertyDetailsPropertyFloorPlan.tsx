import Image from 'next/image';

import floorPlan_1 from '@/assets/images/listing/floor_1.jpg';
import floorPlan_2 from '@/assets/images/listing/floor_2.jpg';

import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';

interface PropertyDetailsPropertyFloorPlanInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsPropertyFloorPlan = ({ property }: PropertyDetailsPropertyFloorPlanInterface) => {
  return (
    <div className={`property-floor-plan mb-50`}>
      <h4 className="mb-40">Floor Plans</h4>
      <div className={` p-30 bg-white shadow4 border-20`}>
        <div id="floor-plan" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={floorPlan_1} alt="" className="w-100" />
            </div>
            <div className="carousel-item">
              <Image src={floorPlan_2} alt="" className="w-100" />
            </div>
            <div className="carousel-item">
              <Image src={floorPlan_1} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPropertyFloorPlan;
