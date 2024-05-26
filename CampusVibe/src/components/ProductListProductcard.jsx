import React from "react";
import { Text, Heading, Img, Button } from "./..";

export default function ProductListProductcard({
  image = "images/img_rectangle_136_341x273.png",
  buttontext = "25% OFF",
  title = "Urban Vibe T-Shirt",
  brand = "H&M",
  rating = "4.8",
  price1 = "Rs. 550",
  price2 = "Rs 1000",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-[11px]`}
    >
      <div className="relative h-[341px] self-stretch md:h-auto">
        <Img
          src={image}
          alt="urban vibe image"
          className="h-[341px] w-full object-cover"
        />
        <Button
          size="1g"
          shape="square"
          className="absolute left-[9.97px] top-[10.00px] m-auto min-w-[78px] font-bold"
        >
          {buttontext}
        </Button>
      </div>
      <div className="flex flex-col items-start gap-[7px] self-stretch">
        <Heading as="h6">{title}</Heading>
        <div className="flex gap-4">
          <Heading size="s" as="p" className="! text-gray-400">
            {brand}
          </Heading>
          <div className="flex gap-1 pt-px">
            <Img
              src="images/img_frame_amber_500.svg"
              alt="rating image"
              className="h-[16px] w-[16px]"
            />
            <Heading size="s" as="p">
              {rating}
            </Heading>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Heading as="h6" className="font-bold">
            {price1}
          </Heading>
          <Text as="p" className="! text-gray-400 line-through">
            {price2}
          </Text>
        </div>
      </div>
    </div>
  );
}
