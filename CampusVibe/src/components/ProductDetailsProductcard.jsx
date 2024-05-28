import React from "react";
import { Heading, Text, Img } from "../components";

export default function ProductDetailsProductcard({
  boldStatement = "images/img_rectangle_420.png",
  boldstatement = "Bold Statement Tee",
  price = "ZARA",
  fortyfour = "4.4",
  rscounter = "Rs. 700",
  rscounter1 = "Rs. 1000",
  offer = "(30% off)",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full pb-[15px] border-gray-200_01 border border-solid rounded-md`}
    >
      <Img
        src={boldStatement}
        alt="statement image"
        className="h-[350px] w-full rounded-tl-md rounded-tr-md object-cover md:h-auto"
      />
      <div className="ml-4 flex flex-col items-start gap-1.5 md:ml-0">
        <Text as="p" className="!font-medium">
          {boldstatement}
        </Text>
        <div className="flex gap-[9px]">
          <Text size="md" as="p" className="!font-medium !text-gray-600_01">
            {price}
          </Text>
          <div className="flex items-center gap-[3px]">
            <Text size="md" as="p" className="!text-gray-600_01">
              {fortyfour}
            </Text>
            <Img
              src="images/img_signal.png"
              alt="rating signal"
              className="h-[16px] w-[16px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[15px]">
          <Heading size="2xl" as="h4">
            {rscounter}
          </Heading>
          <Text as="p" className="!text-gray-600_01 line-through">
            {rscounter1}
          </Text>
          <Heading as="h6" className="self-end !font-bold !text-green-900_01">
            {offer}
          </Heading>
        </div>
      </div>
    </div>
  );
}
