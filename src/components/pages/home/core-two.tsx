import { Text } from "../../units";
import { BlogsAndArticles } from "./blogs-and-articles";
import { Accordion } from "../../common/accordian";
import { BlogsAndArticlesDatas, WhyChooseUsDatas } from "../../../utils/Mocks";

export const CoreTwo = () => {
  return (
    <div className="flex  gap-8 px-32 py-16" id="parent_div">
      <section className="flex  flex-col gap-8" id="blogs_and_articles">
        <div className="flex place-items-center gap-6" id="header">
          <Text size="body-lg-mid" secondaryFont>
            Recent New
          </Text>
          <span className="h-[.5px] w-[70%] bg-grey" id="border" />
        </div>
        <div
          className="flex w-[620px] gap-10 overflow-scroll "
          id="blogs_articles_parent_div"
        >
          {BlogsAndArticlesDatas.map((value) => (
            <div
              className="min-w-[280px]"
              key={value.id}
              id="blogs_articles_div"
            >
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

      <section className="flex w-full flex-col gap-8" id="why_choose_us">
        <div className="flex place-items-center gap-6">
          <Text size="body-lg-mid" secondaryFont>
            Why Choose Us
          </Text>
          <span className="h-[.5px] w-[60%] bg-grey" />
        </div>
        <div className="flex flex-col gap-6 h-[400px]  overflow-scroll">
          {WhyChooseUsDatas.map((data) => (
            <div key={data.id} className="border-b border-grey pb-4">
              <Accordion
                title={data.title}
                content={data.content}
                originalState={data.showContent}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
