import React from "react";
import { Text, Heading, Img } from "../components";

export default function HomepageRowfree({
  title = "Free Shipping",
  description = "Free Shipping for order above $180",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-4`}>
      <Img
        src="images/img_thumbs_up.svg"
        alt="thumbs up image"
        className="h-[54px] w-[54px]"
      />
      <div className="flex flex-col items-start gap-[5px]">
        <Heading size="xl" as="h5">
          {title}
        </Heading>
        <Text size="md" as="p" className="!font-medium !text-gray-600">
          {description}
        </Text>
      </div>
    </div>
  );
}
