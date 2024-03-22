import Image from 'next/image';

import { FeatureCategoryData, PropertyDetailsAreaDtoInterface } from 'src/components/site/PropertyDetails/PropertyDetailsAreaDTO';

import featureIcon_Sqft from '@/assets/images/icon/icon_47.svg';
import featureIcon_Bed from '@/assets/images/icon/icon_48.svg';
import featureIcon_Bath from '@/assets/images/icon/icon_49.svg';
import featureIcon_Kitchen from '@/assets/images/icon/icon_50.svg';
import featureIcon_Type from '@/assets/images/icon/icon_51.svg';

import { IPropertyFeature } from 'src/components/models/PropertyFeature/property-feature-model';


interface PropertyDetailsPropertyOverviewInterface {
  property: PropertyDetailsAreaDtoInterface;
}

const PropertyDetailsPropertyOverview = ({ property }: PropertyDetailsPropertyOverviewInterface) => {
  const featureSqft: IPropertyFeature | undefined = property.propertyFeatures?.find((v) => v.feature?.id === 60);
  const featureBed: IPropertyFeature | undefined = property.propertyFeatures?.find((v) => v.feature?.id === 49);
  const featureBath: IPropertyFeature | undefined = property.propertyFeatures?.find((v) => v.feature?.id === 53);
  const featureKitchen: IPropertyFeature | undefined = property.propertyFeatures?.find((v) => v.feature?.id === 61);
  // const propertyCategory: IPropertyFeature | undefined = property.propertyFeatures?.find((v) => v.feature?.id === 61);
  property;
  return (
    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
      <li>
        <Image src={featureIcon_Sqft} alt="" className="lazy-img icon me-2" />
        <strong>{featureSqft?.value || 0} m²</strong>
      </li>
      <li>
        <Image src={featureIcon_Bed} alt="" className="lazy-img icon me-2" />
        <strong>{featureBed?.value || 0} quartos</strong>
      </li>
      <li>
        <Image src={featureIcon_Bath} alt="" className="lazy-img icon me-2" />
        <strong>{featureBath?.value || 0} banheiros</strong>
      </li>
      <li>
        <Image src={featureIcon_Kitchen} alt="" className="lazy-img icon me-2" />
        <strong>{featureKitchen?.value || 0} cozinhas</strong>
      </li>
    {/*   <li>
        <Image src={featureIcon_Type} alt="" className="lazy-img icon me-2" />
        <strong>Tipe {featureKitchen?.value || 0}</strong>
      </li> */}

    </ul>
  );
};

export default PropertyDetailsPropertyOverview;
