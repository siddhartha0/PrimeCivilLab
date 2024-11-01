import { LandingPageLayout } from "../../components/common/landingpagelayout";
import { Banner } from "../../components/pages/home/banner";
import { Core } from "../../components/pages/home/core";
import { CoreThree } from "../../components/pages/home/core-three";
import { CoreTwo } from "../../components/pages/home/core-two";

export const Home = () => {
  return (
    <LandingPageLayout>
      <div className="flex flex-col ">
        <Banner />
        <div className="pt-72">
          <Core />
        </div>
        <CoreTwo />

        <CoreThree />
      </div>
    </LandingPageLayout>
  );
};
