import { Text } from "../../units/Text";
import bg from "../../../assets/images/core-bg.jpg";
import { Button } from "../../units/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
export const TestingMethods = [
  {
    id: 1,
    title: "Site Assessment",
    content:
      "Comprehensive evaluations to understand site-specific soil conditions, ensuring safe and cost-effective construction planning.",
    icon: "fluent-mdl2:assessment-group-template",
  },
  {
    id: 2,
    title: "Soil Testing",
    content:
      "Advanced soil testing services that analyze strength, stability, and composition, providing crucial data for reliable foundations",
    icon: "cuida:test-tube-outline",
  },
  {
    id: 3,
    title: "Project Management",
    content:
      "Comprehensive project support, from concept through construction, ensuring smooth execution and high standards.",
    icon: "carbon:inventory-management",
  },
  {
    id: 4,
    title: "Geotechnical Investigations",
    content:
      "Thorough site investigations for subsurface conditions, enabling accurate design and construction adaptations.",
    icon: "hugeicons:investigation",
  },
  {
    id: 5,
    title: "Environmental Consulting",
    content:
      "Eco-conscious engineering solutions that reduce environmental impact while meeting project goals and regulatory standards",
    icon: "tdesign:undertake-environment-protection",
  },
  {
    id: 6,
    title: "Foundation Engineering",
    content:
      "Expert design of foundations tailored to withstand local soil conditions, from urban high-rises to heavy industrial structures.",
    icon: "carbon:ibm-engineering-workflow-mgmt",
  },
];

export const Core = () => {
  return (
    <div className="flex flex-col bg-white px-32 py-16 gap-24">
      <section className="flex flex-col gap-10 " id="services">
        <div
          className="flex text-center place-items-center justify-center gap-6"
          id="service-header"
        >
          <div className="h-[.5px] w-[30%] bg-grey" />
          <Text size="heading-base-mid" usage="black3" secondaryFont>
            Our Services
          </Text>
          <div className="h-[.5px] w-[30%] bg-grey" />
        </div>
        <section className="grid grid-cols-3 gap-6">
          {TestingMethods.map((method) => (
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
      <section className="flex justify-between gap-14 place-items-center">
        <div className=" pb-10 px-3 shadow-xl rounded-xl">
          <div
            className="flex px-6 py-14  flex-col bg-cover  bg-center w-[480px] relative gap-8 rounded-xl  "
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="absolute rounded-xl inset-0 bg-fadish-blue opacity-60 "></div>
            <Text size="heading-lg-default" usage="click" className="z-10">
              Geotechnical Laboratories
            </Text>
            <Text size="body-base-default" usage="click" className="z-10">
              The industry leaders in compaction control and associated
              geotechnical testing. Delivering an unparalleled level of customer
              service and technical integrity.
            </Text>
            <Button usage="brand" className="w-[40%] z-10">
              <Text usage="click" size="body-base-default">
                Our Capabilities
              </Text>
              <Icon icon="iconamoon:arrow-right-2-duotone" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-9 w-[575px]">
          <Text size="body-base-default" usage="brand">
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
          <Button usage="brand" className="w-[20%]">
            <Text size="body-base-default" usage="click">
              Contact us
            </Text>
            <Icon icon="iconamoon:arrow-right-2-duotone" />
          </Button>
        </div>
      </section>
    </div>
  );
};
