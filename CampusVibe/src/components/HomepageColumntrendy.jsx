import React from "react";
import { Text, Heading, Img, Button } from ".";

export default function HomepageColumntrendy({
  image = "images/img_rectangle_136_5.png",
  buttontext = "25% OFF",
  title = "Trendy Graphic Tee",
  brand = "H&M",
  rating = "4.8",
  price1 = "Rs. 1200",
  price2 = "Rs 1500",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="relative h-[461px] self-stretch md:h-auto">
        <Img
          src={image}
          alt="graphic image"
          className="h-[461px] w-full object-cover"
        />
        <Button
          shape="square"
          className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[106px] font-bold"
        >
          {buttontext}
        </Button>
      </div>
      <div className="flex flex-col items-start gap-[5px] self-stretch">
        <Heading size="2x1" as="h4" className="!font-semibold">
          {title}
        </Heading>
        <div className="flex gap-[17px]">
          <Heading size="md" as="h6" className="! font-semibold !text-gray-400">
            {brand}
          </Heading>
          <div className="flex items-center gap-1">
            <Img
              src="images/img_frame_amber_500.svg"
              alt="rating image"
              className="h-[16px] w-[16px]"
            />
            <Heading size="md" as="h6" className="!font-semibold">
              {rating}
            </Heading>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Heading size="2x1" as="h4">
            {price1}
          </Heading>
          <Text size="2x1" as="p" className="!text-gray-400 line-through">
            {price2}
          </Text>
        </div>
      </div>
    </div>
  );
}
