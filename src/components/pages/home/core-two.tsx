import { Text } from "../../units";
import { BlogsAndArticles } from "./blogs-and-articles";
import bgone from "../../../assets/images/blog1.jpg";
import bgtwo from "../../../assets/images/bg-office-black.jpg";

export const BlogsAndArticlesDatas = [
  {
    id: 1,
    title: "The Future of Sustainable Engineering",
    content:
      "Explore the latest advancements in sustainable engineering and how our company is committed to eco-friendly solutions in every project.",
    time: new Date("2024-01-15"),
    bgpics: bgone,
  },
  {
    id: 2,
    title: "Innovative Foundation Engineering for High-Rise Buildings",
    content:
      "Discover the methods used in foundation engineering to support tall structures, ensuring stability in complex terrains and challenging soil conditions.",
    time: new Date("2024-03-10"),
    bgpics: bgtwo,
  },
  {
    id: 3,
    title: "The Role of Geotechnical Engineering in Urban Development",
    content:
      "From skyscrapers to subways, see how geotechnical assessments shape safe and efficient urban expansion.",
    time: new Date("2024-05-18"),
    bgpics: bgone,
  },
  {
    id: 4,
    title: "From Field to Data: Digital Tools in Soil Analysis",
    content:
      "An overview of the digital tools that have transformed soil analysis, enhancing precision and data accessibility.",
    time: new Date("2025-02-23"),
    bgpics: bgtwo,
  },
];

export const BottomCore = () => {
  return (
    <div className="flex flex-col gap-8 px-32 py-16">
      <section className="flex flex-col gap-8" id="blogs_and_articles">
        <div className="flex place-items-center gap-6">
          <Text size="body-lg-mid" secondaryFont>
            Recent New
          </Text>
          <span className="h-[.5px] w-[40%] bg-grey" />
        </div>
        <div className="flex w-[620px] gap-10 overflow-scroll ">
          {BlogsAndArticlesDatas.map((value) => (
            <div className="min-w-[280px]">
              <BlogsAndArticles
                bgPics={value.bgpics}
                content={value.content}
                time={value.time}
                title={value.title}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
