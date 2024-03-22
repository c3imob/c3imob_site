"use client"
import { useState } from "react";
import NiceSelect from "@/ui/NiceSelect";

const tab_title: string[] = ["Buy", "Rent",];

const DropdownFive = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_05';
   };

   return (
      <div className="search-wrapper-one layout-one mt-60 lg-mt-40 position-relative">
         <nav className="search-filter-nav-one d-flex">
            <div className="nav nav-tabs border-0" role="tablist">
               {tab_title.map((tab, index) => (
                  <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
               ))}
            </div>
         </nav>

         <div className="bg-wrapper p0 border-0 rounded-0">
            <div className="tab-content">
               <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }} className="md-pt-20">
                     <div className="row gx-0 align-items-center">
                        <div className="col-lg-3">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "apartments", text: "Buy Apartments" },
                                    { value: "condos", text: "Rent Condos" },
                                    { value: "houses", text: "Sell Houses" },
                                    { value: "industrial", text: "Rent Industrial" },
                                    { value: "villas", text: "Sell Villas" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                    { value: "germany", text: "Berlin, Germany" },
                                    { value: "dhaka", text: "Dhanmondi, Dhaka" },
                                    { value: "mexico", text: "Acapulco, Mexico" },
                                    { value: "france", text: "Cannes, France" },
                                    { value: "india", text: "Delhi, India" },
                                    { value: "giza", text: "Giza, Egypt" },
                                    { value: "cuba", text: "Havana, Cuba" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                           <div className="input-box-one">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "$10,000 - $200,000" },
                                    { value: "2", text: "$20,000 - $300,000" },
                                    { value: "3", text: "$30,000 - $400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-1">
                           <div className="input-box-one p0 ms-xl-5 md-mt-20">
                              <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }} className="md-pt-20">
                     <div className="row gx-0 align-items-center">
                        <div className="col-lg-3">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "industrial", text: "Rent Industrial" },
                                    { value: "apartments", text: "Buy Apartments" },
                                    { value: "condos", text: "Rent Condos" },
                                    { value: "houses", text: "Sell Houses" },
                                    { value: "villas", text: "Sell Villas" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                    { value: "france", text: "Cannes, France" },
                                    { value: "germany", text: "Berlin, Germany" },
                                    { value: "dhaka", text: "Dhanmondi, Dhaka" },
                                    { value: "mexico", text: "Acapulco, Mexico" },
                                    { value: "india", text: "Delhi, India" },
                                    { value: "giza", text: "Giza, Egypt" },
                                    { value: "cuba", text: "Havana, Cuba" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                           <div className="input-box-one">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "$10,000 - $200,000" },
                                    { value: "2", text: "$20,000 - $300,000" },
                                    { value: "3", text: "$30,000 - $400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-1">
                           <div className="input-box-one p0 ms-xl-5 md-mt-20">
                              <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DropdownFive
