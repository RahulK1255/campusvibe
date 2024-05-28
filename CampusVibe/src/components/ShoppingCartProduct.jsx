import React from "react";
import { Img, Heading, Text, SelectBox, Button } from "../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShoppingCartProduct({
  image = "images/img_rectangle_145_149x118.png",
  trendyblackt = "Trendy Black T-shirt",
  price = "Sold by:GENUS APPARELS LTD. ",
  price1 = "584",
  oldprice = "1299.00",
  offer = "(55% OFF)",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-center items-start p-3 border-gray-300 border border-solid flex-1 rounded-md`}
    >
      <div className="flex flex-1 md:self-stretch">
        <div className="relative h-[149px] w-[18%] md:h-auto md:w-full">
          <Img
            src={image}
            alt="product image"
            className="h-[149px] w-full object-cover"
          />
          <Button
            color="blue_gray_900_01"
            size="xs"
            className="absolute left-[8.00px] top-[8.00px] m-auto w-[20px] rounded"
          >
            <Img src="images/img_checkmark_white_a700.svg" />
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-start gap-[21px] pb-[7px] pl-4 pr-2 pt-2 md:self-stretch">
          <div className="flex flex-col items-start gap-[7px]">
            <Heading as="h6">{trendyblackt}</Heading>
            <Text size="xs" as="p" className="!text-blue_gray-200_01">
              {price}
            </Text>
          </div>
          <div className="flex w-[34%] gap-2 md:w-full">
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="images/img_arrowdown_black_900_01.svg"
                  alt="arrow_down"
                  className="h-[16px] w-[16px]"
                />
              }
              name="Size Dropdown"
              placeholder="Size: XL"
              options={dropDownOptions}
              className="flex-grow gap-px font-semibold sm:pr-5"
            />
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="images/img_arrowdown_black_900_01.svg"
                  alt="arrow_down"
                  className="h-[16px] w-[16px]"
                />
              }
              name="Quantity Dropdown"
              placeholder="Qty: 1"
              options={dropDownOptions}
              className="w-[46%] gap-px font-semibold sm:pr-5"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Heading size="md" as="h6">
              {price1}
            </Heading>
            <Text size="md" as="p" className="!text-gray-400 line-through">
              {oldprice}
            </Text>
            <Heading size="md" as="h6" className="!text-teal-400">
              {offer}
            </Heading>
          </div>
        </div>
      </div>
      <Img
        src="images/img_icon_gray_400_01.svg"
        alt="secondary image"
        className="h-[24px] w-[24px] md:w-full"
      />
    </div>
  );
}
