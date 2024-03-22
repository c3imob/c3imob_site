import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import icon_1 from '@/assets/images/dashboard/icon/icon_18.svg';
import icon_2 from '@/assets/images/dashboard/icon/icon_19.svg';
import icon_3 from '@/assets/images/dashboard/icon/icon_20.svg';
import icon_4 from '@/assets/images/dashboard/icon/icon_21.svg';

import listImg_1 from '@/assets/images/dashboard/img_01.jpg';
import listImg_2 from '@/assets/images/dashboard/img_02.jpg';
import listImg_3 from '@/assets/images/dashboard/img_03.jpg';
import listImg_4 from '@/assets/images/dashboard/img_04.jpg';
import listImg_5 from '@/assets/images/dashboard/img_05.jpg';
import { IProperty } from 'src/components/models/Property/property-model';
import { baseApiPath } from 'src/util/entity-utils';
import dayjs, { Dayjs } from 'dayjs';
import { PropertyTypeBusiness } from 'src/components/enumerations/property-type-business.model';

interface DataType {
  id: number;
  title: string;
  address: string;
  price: number;
  date: string;
  view: number;
  img: StaticImageData;
  status: string;
  status_bg?: string;
}

const list_data: DataType[] = [
  {
    id: 1,
    title: 'Galaxy Flat',
    address: 'Mirpur 10, dhaka, BD',
    price: 32800,
    date: '13 Jan, 2023',
    view: 1210,
    img: listImg_1,
    status: 'Active',
  },
  {
    id: 2,
    title: 'White House villa',
    address: 'Ranchview, California, USA',
    price: 42130,
    date: '09 Jan, 2023',
    view: 0,
    img: listImg_2,
    status: 'Pending',
    status_bg: 'pending',
  },
  {
    id: 3,
    title: 'Luxury villa in Dal lake',
    address: 'Muza link road, ca, usa',
    price: 2370,
    date: '17 Oct, 2022',
    view: 0,
    img: listImg_3,
    status: 'Processing',
    status_bg: 'processing',
  },
  {
    id: 4,
    title: 'Wooden World',
    address: 'Board Baxar, Califronia, USA',
    price: 63300,
    date: '23 Sep, 2022',
    view: 970,
    img: listImg_4,
    status: 'Active',
  },
  {
    id: 5,
    title: 'Orkit Villa',
    address: 'Green Road, Uttara, BD',
    price: 72000,
    date: '15 Aug, 2022',
    view: 2320,
    img: listImg_5,
    status: 'Active',
  },
];
interface PropertyTableBodyInterface {
  propertyList: IProperty[];
  deleteProperty: (id: number) => Promise<void>;
}
const PropertyTableBody = ({ propertyList, deleteProperty }: PropertyTableBodyInterface) => {
  return (
    <tbody className="border-0">
      {propertyList.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="d-lg-flex align-items-center position-relative">
              {item.propertyImages?.[0] && <img src={baseApiPath(item.propertyImages[0].link)} alt="" className="p-img" />}
              <div className="ps-lg-4 md-pt-10">
                <Link href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">
                  {item.title}
                </Link>
                <div className="address">{item.address}</div>
                <strong className="price color-dark">R$ {item.priceSale}</strong>
              </div>
            </div>
          </td>
          <td>{dayjs(item.createdDate).format('DD/MM/YYYY')}</td>
          <td>
            <div className={`property-status ${item.typeBusiness === PropertyTypeBusiness.Venda ? 'processing' : 'success'}`}>{item.typeBusiness}</div>
          </td>
          <td>
            <div className="action-dots float-end">
              <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" target="_blank" href={`/property/${item.slug}`}>
                    <Image src={icon_1} alt="" className="lazy-img" /> Ver anuncio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <Image src={icon_2} alt="" className="lazy-img" /> Compartir anuncio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={`/dashboard/add-property?property=${item.slug}`}>
                    <Image src={icon_3} alt="" className="lazy-img" /> Editar  anuncio
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => deleteProperty(item.id || 0)}>
                    <Image src={icon_4} alt="" className="lazy-img" /> Apagar anuncio
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PropertyTableBody;
