import { LandingPageLayout } from "../../components/common/landingpagelayout";
import { Banner } from "../../components/pages/home/banner";
import { Core } from "../../components/pages/home/core";
import { Membership } from "../../components/pages/home/membership";

export const Home = () => {
  return (
    <LandingPageLayout>
      <div className="flex flex-col ">
        <Banner />
        <Core />
        <Membership />
      </div>
    </LandingPageLayout>
  );
};
