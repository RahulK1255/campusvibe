import React from "react";
import { Text, Heading, Img } from "./..";

export default function WishlistProductcard({
  image = "images/img_rectangle_136.png",
  trendytshirt = "Athleisure Performance Tee",
  rscounter1 = "Rs. 750",
  rscounter2 = "Rs. 1000",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="relative h-[461px] self-stretch md:h-auto">
        <Img
          src={image}
          alt="main image"
          className="h-[461px] w-full object-cover"
        />
        <Img
          src="images/img_icon_gray_400_01.svg"
          alt="secondary icon"
          className="absolute right-[12.33px] top-[12.00px] m-auto h-[24px] w-[24px]"
        />
      </div>
      <div className="flex flex-col items-start gap-[15px]">
        <Text size="2x1" as="p">
          {trendytshirt}
        </Text>
        <div className="flex flex-wrap gap-2">
          <Heading size="2x1" as="h4">
            {rscounter1}
          </Heading>
          <Text size="2x1" as="p" className="!text-gray-400 line-through">
            {rscounter2}
          </Text>
        </div>
      </div>
    </div>
  );
}