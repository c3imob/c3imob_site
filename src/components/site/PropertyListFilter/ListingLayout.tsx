'use client';
import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import NiceSelect from '@/ui/NiceSelect';
import UseShortedProperty from '@/hooks/useShortedProperty';
import DropdownOne from '@/components/search-dropdown/inner-dropdown/DropdownOne';

import icon from '@/assets/images/icon/icon_46.svg';

import ListingGridArea from './ListingGridArea';
import ListingListArea from './ListingListArea';

import { apiGetList as apiGetProperty, apiDeleteEntity as apiDeleteProperty } from 'src/services/Property/property-services';

import { useEffect, useState } from 'react';
import { IProperty } from 'src/components/models/Property/property-model';
import { IApiResponseProps } from 'src/util/entity-utils';
import transformJSONObjectToArray from 'src/util/functions/transformJSONObjectToArray';
import { ListingLayoutDTO } from './ListingLayoutDTO';

export interface IListingAreaInterface {
  currentItems: any[];
  propertyList: IProperty[];
}

enum ListPropertyTypeEnum {
  LIST = 'LIST',
  GRID = 'GRID',
}

const ListingLayout = () => {
  const [showPropertyType, setshowPropertyType] = useState<ListPropertyTypeEnum>(ListPropertyTypeEnum.LIST);

  const showPropertyTypeClassName = showPropertyType === ListPropertyTypeEnum.LIST ? 'fa-bars' : 'fa-grid-2';

  const togglePropertyType = () => {
    setshowPropertyType(showPropertyType === ListPropertyTypeEnum.LIST ? ListPropertyTypeEnum.GRID : ListPropertyTypeEnum.LIST);
  };

  const {
    itemOffset,
    sortedProperties,
    currentItems,
    pageCount,
    handlePageClick,
    handleBathroomChange,
    handleBedroomChange,
    handleSearchChange,
    handlePriceChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handleTypeChange,
  } = UseShortedProperty({ itemsPerPage: 6, page: 'listing_2' });

  const handleResetFilter = () => {
    resetFilters();
  };

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
    <div className="property-listing-six pt-200 xl-pt-150 pb-200 xl-pb-120">
      <div className="container container-large">
        <div className="row">
          <div className="col-lg-8">
            <div className="ps-xxl-5">
              <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
                <div>
                  Showing{' '}
                  <span className="color-dark fw-500">
                    {itemOffset + 1}–{itemOffset + currentItems.length}
                  </span>{' '}
                  of <span className="color-dark fw-500">{sortedProperties.length}</span> results
                </div>
                <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                    <div className="fs-16 me-2">Short by:</div>
                    <NiceSelect
                      className="nice-select rounded-0"
                      options={[
                        { value: 'newest', text: 'Newest' },
                        { value: 'best_seller', text: 'Best Seller' },
                        { value: 'best_match', text: 'Best Match' },
                        { value: 'price_low', text: 'Price Low' },
                        { value: 'price_high', text: 'Price High' },
                      ]}
                      defaultCurrent={0}
                      onChange={handleTypeChange}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Link href="#" onClick={togglePropertyType} className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To List View">
                    <i className={`fa-regular ${showPropertyTypeClassName}`}></i>
                  </Link>
                </div>
              </div>

              <div className="row gx-xxl-5">
                {showPropertyType === ListPropertyTypeEnum.LIST ? <ListingGridArea propertyList={propertyList} currentItems={currentItems} /> : <ListingListArea propertyList={propertyList} currentItems={currentItems} />}
              </div>

              <ReactPaginate
                breakLabel="..."
                nextLabel={<Image src={icon} alt="" className="ms-2" />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                previousLabel={<Image src={icon} alt="" className="ms-2" />}
                renderOnZeroPageCount={null}
                className="pagination-one square d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-60 lg-pt-30"
              />
            </div>
          </div>

          <div className="col-lg-4 order-lg-first">
            <div className="advance-search-panel dot-bg md-mt-80">
              <div className="main-bg rounded-0">
                <DropdownOne
                  handleSearchChange={handleSearchChange}
                  handleBedroomChange={handleBedroomChange}
                  handleBathroomChange={handleBathroomChange}
                  handlePriceChange={handlePriceChange}
                  maxPrice={maxPrice}
                  priceValue={priceValue}
                  handleResetFilter={handleResetFilter}
                  selectedAmenities={selectedAmenities}
                  handleAmenityChange={handleAmenityChange}
                  handleLocationChange={handleLocationChange}
                  handleStatusChange={handleStatusChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    transformJSONObjectToArray(ListingLayoutDTO),
  );
};

export default ListingLayout;
