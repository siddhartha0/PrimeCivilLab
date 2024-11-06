import { LandingPageLayout } from "../components/common/landingpagelayout";
import bg from "../assets/images/slider6.jpg";
import { Text } from "../components/units";

export const Projects = () => {
  return (
    <LandingPageLayout>
      <div className="flex flex-col">
        <div
          className="h-64 flex place-items-center justify-around bg-cover bg-center font-sans "
          style={{
            background: `url(${bg})`,
          }}
        >
          <Text usage="click" size="heading-lg-mid">
            Projects
          </Text>
        </div>
      </div>
      ;
    </LandingPageLayout>
  );
};
