import { Text } from "../../units/Text";
import bg from "../../../assets/images/core-bg2.jpg";
import { Button } from "../../units/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Services } from "../../../utils/Mocks";

export const Core = () => {
  return (
    <div className="flex flex-col bg-white px-32 py-16 gap-24">
      <section className="flex flex-col gap-10 " id="services">
        <div
          className="flex text-center place-items-center justify-center gap-6"
          id="service-header-div"
        >
          <div className="h-[.5px] w-[30%] bg-grey" id="border" />
          <Text
            size="heading-base-mid"
            usage="black3"
            secondaryFont
            id="service-header"
          >
            Our Services
          </Text>
          <div className="h-[.5px] w-[30%] bg-grey" id="border" />
        </div>
        <section className="grid grid-cols-3 gap-6" id="services-content-divs">
          {Services.map((method) => (
            <div key={method.id} className="flex flex-col gap-4 pb-4">
              <Icon icon={method.icon} fontSize={24} color="#fa9a00" />
              <section className="flex flex-col gap-2">
                <Text size="body-base-rare" secondaryFont>
                  {method.title}
                </Text>
                <Text size="body-base-default" usage="black4">
                  {method.content}
                </Text>
              </section>
            </div>
          ))}
        </section>
      </section>

      <section
        className="flex justify-between gap-14 place-items-center"
        id="blogs"
      >
        <div className=" pb-10 px-3 shadow-xl rounded-xl">
          <div
            className="flex px-6 py-14  flex-col bg-cover  bg-center w-[480px] relative gap-8 rounded-xl  "
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute rounded-xl inset-0 bg-black-4 opacity-60 "></div>
            <Text
              size="heading-lg-default"
              usage="click"
              className="z-10"
              secondaryFont
            >
              Geotechnical Laboratories
            </Text>
            <Text size="body-base-default" className="z-10 text-grey">
              The industry leaders in compaction control and associated
              geotechnical testing. Delivering an unparalleled level of customer
              service and technical integrity.
            </Text>
            <Button usage="brand" className="w-[50%] z-10" id="gallery-button">
              <Text usage="click" size="body-base-mid">
                View More
              </Text>
              <Icon icon="iconamoon:arrow-right-2-duotone" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-9 w-[575px]">
          <Text size="body-base-default" usage="black4">
            The industry leaders in compaction control and associated
            geotechnical testing. Delivering an unparalleled level of customer
            service and technical integrity. Our Capabilities Geotechnical
            Laboratories Pty Ltd is a NATA accredited (# 14561) construction
            materials testing facility that specialises in the area of
            compaction control and material compliance. In conjunction with its
            sister company, Geotechnical Engineering Pty Ltd, boasts an
            extensive laboratory facility accredited for a wide range of soil,
            aggregate and specialised tests. Geolabs primary laboratory is
            located in Ravenhall Victoria.
          </Text>
          <Button usage="brand" className="w-[40%]" id="blogs-button">
            <Text size="body-base-mid" usage="click">
              See More Blogs
            </Text>
            <Icon icon="iconamoon:arrow-right-2-duotone" />
          </Button>
        </div>
      </section>
    </div>
  );
};
