'use client';
import NiceSelect from '@/ui/NiceSelect';
import PropertyTableBody from './PropertyTableBody';
import Link from 'next/link';
import Image from 'next/image';
import { apiGetList as apiGetProperty, apiDeleteEntity as apiDeleteProperty } from 'src/services/Property/property-services';

import icon_1 from '@/assets/images/icon/icon_46.svg';
import { useEffect, useState } from 'react';
import { IProperty } from 'src/components/models/Property/property-model';
import { IApiResponseProps } from 'src/util/entity-utils';

const PropertyListBody = () => {
  const [propertyList, setPropertyList] = useState<IProperty[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [order, setOrder] = useState<Object>({ createdDate: 'asc' });

  const selectHandler = (e: any) => {};

  const deleteProperty = async (id: number) => {
    await apiDeleteProperty(id);

    getListProperties({}, page, size, { createdDate: 'asc' }, (result) => {
      setPropertyList(result.data);
      const count = Number(result.headers?.get('X-Total-Count'));
      setCount(count || 0);
    });
  };

  useEffect(() => {
    getListProperties({}, page, size, { createdDate: 'asc' }, (result) => {
      setPropertyList(result.data);
      const count = Number(result.headers?.get('X-Total-Count'));
      setCount(count || 0);
    });
  }, []);

  return (
    <>
        <h2 className="main-title d-block d-lg-none">Minhas propriedades</h2>
        <div className="d-sm-flex align-items-center justify-content-between mb-25">
          <div className="fs-16">
            Mostrando <span className="color-dark fw-500"> 1-{propertyList.length} </span> de <span className="color-dark fw-500">{count}</span> resultados
          </div>
          <div className="d-flex ms-auto xs-mt-30">
            <div className="short-filter d-flex align-items-center ms-sm-auto">
              <div className="fs-16 me-2">Ordenar Por:</div>
              <NiceSelect
                className="nice-select"
                options={[
                  { value: '1', text: 'O mais novo' },
                  { value: '2', text: 'O mais antigo' },
                  { value: '3', text: 'Preço baixo' },
                  { value: '4', text: 'Preço alto' },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="bg-white card-box p0 border-20">
          <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
            <table className="table property-list-table">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Data</th>
                  <th scope="col">Visualizar</th>
                  <th scope="col">Status</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <PropertyTableBody propertyList={propertyList} deleteProperty={deleteProperty} />
            </table>
          </div>
        </div>

        <ul className="pagination-one d-flex align-items-center justify-content-center style-none pt-40">
          <li className="me-3">
            <Link href="#">1</Link>
          </li>
          <li className="selected">
            <Link href="#">2</Link>
          </li>
          <li>
            <Link href="#">3</Link>
          </li>
          <li>
            <Link href="#">4</Link>
          </li>
          <li>....</li>
          <li className="ms-2">
            <Link href="#" className="d-flex align-items-center">
              Último <Image src={icon_1} alt="" className="ms-2" />
            </Link>
          </li>
        </ul>
      </>
  );
};

const getListProperties = async (filters: Object, page: number, size: number, sort: Object, onSuccess: (response: IApiResponseProps) => void) => {
  apiGetProperty(
    {
      filters,
      sort,
      size,
      page,
    },
    onSuccess,
    ['title', 'slug', 'typeBusiness', 'city', 'neighborhood', 'address', 'number', 'zipCode', 'priceSale', 'propertyImages.id', 'propertyImages.link'],
  );
};

export default PropertyListBody;
