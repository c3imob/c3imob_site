"use client";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "@/util/utils";
import ScrollToTop from "@/components/common/ScrollToTop";

import { apiGetList as apiGetAdminPermission } from "src/services/AdminPermission/admin-permission-services";
import { apiGetList as apiGetAdminProfile } from "src/services/AdminProfile/admin-profile-services";
import { apiGetList as apiGetAdminUser } from "src/services/AdminUser/admin-user-services";
import { apiGetList as apiGetAdminWhiteLabel } from "src/services/AdminWhiteLabel/admin-white-label-services";
import { apiGetList as apiGetAgency } from "src/services/Agency/agency-services";
import { apiGetList as apiGetAgencyService } from "src/services/AgencyService/agency-service-services";
import { apiGetList as apiGetAgent } from "src/services/Agent/agent-services";
import { apiGetList as apiGetBlog } from "src/services/Blog/blog-services";
import { apiGetList as apiGetFaq } from "src/services/Faq/faq-services";
import { apiGetList as apiGetFaqCategory } from "src/services/FaqCategory/faq-category-services";
import { apiGetList as apiGetProperty } from "src/services/Property/property-services";
import { apiGetList as apiGetPropertyFeature } from "src/services/PropertyFeature/property-feature-services";
import { apiGetList as apiGetPropertyImage } from "src/services/PropertyImage/property-image-services";
import { apiGetList as apiGetPropertyType } from "src/services/PropertyType/property-type-services";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // apiGetAdminPermission({});
    // apiGetAdminProfile({});
    // apiGetAdminUser({});
    // apiGetAdminWhiteLabel({});
    // apiGetAgency({});
    // apiGetAgencyService({});
    // apiGetAgent({});
    // apiGetBlog({});
    // apiGetFaq({});
    // apiGetFaqCategory({});
    // apiGetProperty({});
    // apiGetPropertyFeature({});
    // apiGetPropertyImage({});
    // apiGetPropertyType({});
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Wrapper;
