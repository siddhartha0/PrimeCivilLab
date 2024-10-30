import { Text } from "../../units";

export const BannerInformations = [
  {
    id: 1,
    title: "Rewards",
    subtitle: "Award-Winning Sustainability ",
    content:
      "With a commitment to environmental stewardship, our projects have reduced carbon footprints by up to 30% while ensuring structural integrity. Our sustainable practices, recognized by industry awards, demonstrate our dedication to eco-friendly engineering that safeguards both the environment and future generations",
  },
  {
    id: 2,
    title: "Soil Insights",
    subtitle: "Pioneering Soil Analysis",
    content:
      "Our team has conducted over 1,000+ soil analyses for high-stakes projects, including skyscraper foundations and large-scale infrastructure. Using advanced soil testing technologies, we deliver data-driven insights that have helped clients minimize risks and optimize construction plans for lasting results",
  },
  {
    id: 3,
    title: "Engineering Excellence",
    subtitle: "Geotechnical Solutions ",
    content:
      "From stabilizing unstable slopes to designing foundations on rugged terrains, our geotechnical engineering expertise has enabled the successful completion of over 50 major construction projects in difficult environments. Our innovative solutions continue to set industry standards for safety and reliability.",
  },
];

export const BannerInfo = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-36  ">
      {BannerInformations.map((info) => (
        <section
          className="bg-white shadow-xl p-6 flex flex-col gap-2"
          key={info.id}
        >
          <Text usage="black4" size="body-md-default">
            {info.title}
          </Text>
          <Text size="body-sm-rare">{info.subtitle}</Text>
          <Text size="body-base-default" usage="black4">
            {info.content}
          </Text>
        </section>
      ))}
    </div>
  );
};
