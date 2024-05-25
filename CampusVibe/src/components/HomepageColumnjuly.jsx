import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomepageColumnjuly({
  userimage = "images/img_rectangle_142_306x381.png",
  datetext = "July 23, 2023",
  brandtext = "H&M",
  titletext = "Trendy fashion",
  descriptiontext = "Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-[29px]`}
    >
      <Img
        src={userimage}
        alt="mainimage"
        className="h-[306px] w-full rounded-md object-cover md:h-auto"
      />
      <div className="flex flex-col gap-2.5 self-stretch">
        <div className="flex items-start gap-4">
          <Text size="md" as="p" className="!text-gray-800_01">
            {datetext}
          </Text>
          <div className="h-[16px] w-px bg-blue_gray-700" />
          <Text size="md" as="p" className="!text-gray-800_01">
            {brandtext}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-3.5">
          <Heading as="h6">{titletext}</Heading>
          <Text as="p" className="w-full leading-7 !text-gray-800_01">
            {descriptiontext}
          </Text>
        </div>
      </div>
    </div>
  );
}