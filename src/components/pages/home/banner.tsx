import { Text } from "../../units";
import { Button } from "../../units/Button";
import slider from "../../../assets/images/slider1.jpg";
import banner1 from "../../../assets/images/slider2.jpg";
import banner2 from "../../../assets/images/slider3.jpg";
import banner3 from "../../../assets/images/slider4.jpg";
import { useEffect, useState } from "react";
import { BannerInfo } from "./banner-info";

export const Banner = () => {
  const images = [slider, banner1, banner2, banner3];
  const [bannerImage, setBannerImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  console.log("rendereds");
  return (
    <div
      className="flex bg-cover bg-center font-sans relative"
      style={{ backgroundImage: `url(${images[bannerImage]})` }}
    >
      <section className="flex flex-col gap-20 w-[675px] px-8 py-28 font-sans">
        <Text size="heading-lg-default" secondaryFont>
          Industry leaders in compaction control and material compliance testing
        </Text>
        <div className="flex flex-col gap-6 w-[65%]">
          <Text usage="info" size="body-md-mid" secondaryFont>
            Delivering an unparalleled level of customer service and technical
            integrity.
          </Text>
          <section className="flex gap-3">
            <Button size="small" secondaryFont>
              Request Testing
            </Button>
            <Button size="small" usage="primary" secondaryFont>
              Contact us
            </Button>
          </section>
        </div>
      </section>
      <section className="absolute -bottom-64">
        <BannerInfo />
      </section>
    </div>
  );
};
