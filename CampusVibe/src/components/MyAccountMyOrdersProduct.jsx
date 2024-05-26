import React from "react";
import { Button, Img, Heading, Text } from "./..";

export default function MyAccountMyOrdersProduct({
  arrivingfri = "Arriving Fri, May 24",
  image = "images/img_rectangle_146.png",
  producttitle = "Athletic Performance Tee",
  soldby = "Sold by: GENUS APPARELS LTD.",
  sizebutton = "Size: XL",
  quantitytext = "Qty: 1",
  buyItAgain = "Buy it again",
  trackpackagebutton = "Track package",
  vieworeditbutton = "View or Edit order",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-3.5 p-3 border-gray-300 border border-solid flex-1 rounded-md`}
    >
      <Text size="md" as="p" className="!font-medium">
        {arrivingfri}
      </Text>
      <div className="flex self-stretch md:flex-col">
        <Img
          src={image}
          alt="product image"
          className="h-[163px] w-[16%] object-cover md:w-full"
        />
        <div className="flex flex-1 items-start justify-between gap-5 py-2 pl-4 pr-2 md:self-stretch sm:flex-col">
          <div className="flex flex-col items-start gap-[17px]">
            <div className="flex flex-col gap-[9px]">
              <Heading as="h6">{producttitle}</Heading>
              <Text size="xs" as="p" className="!text-blue_gray-200_01">
                {soldby}
              </Text>
            </div>
            <div className="flex gap-2">
              <Button
                color="gray_100_01"
                size="sm"
                className="min-w-[63px] rounded-sm font-semibold"
              >
                {sizebutton}
              </Button>
              <Heading
                size="xs"
                as="p"
                className="flex items-center justify-center rounded-sm bg-gray-100_01 px-2 py-1 !text-gray-600"
              >
                {quantitytext}
              </Heading>
            </div>
            <Button
              color="blue_700"
              variant="outline"
              shape="round"
              className="min-w-[150px] gap-2 font-medium sm:px-5"
              leftIcon={
                <Img
                  src="images/img_fi545661.svg"
                  alt="fi_545661"
                  className="h-[16px] w-[16px]"
                />
              }
            >
              {buyItAgain}
            </Button>
          </div>
          <div className="flex w-[30%] flex-col gap-3 sm:w-full">
            <Button
              color="blue_gray_900_01"
              shape="round"
              className="w-full border border-solid border-blue_gray-900_01 font-medium sm:px-5"
            >
              {trackpackagebutton}
            </Button>
            <Button
              color="gray_600"
              variant="outline"
              shape="round"
              className="w-full font-medium sm:px-5"
            >
              {vieworeditbutton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
