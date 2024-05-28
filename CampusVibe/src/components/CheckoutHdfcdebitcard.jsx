import { Text, Img } from ".";
import React from "react";

export default function CheckoutHdfcDebitCard({
  cardtitle = "HDFC Debit Card",
  cardnumber = "XXXX XXXX XXXX XX48",
  expirydate = "Exp : 03/22",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-center items-center gap-[9px] p-4 border-blue_gray-100 border border-solid bg-white_A700 flex-1 rounded-md`}
    >
      <Img
        src="images/img_clock.svg"
        alt="card image"
        className="h-[36px] w-[36px] md:w-full"
      />
      <div className="flex flex-1 items-center gap-[9px] md:self-stretch">
        <Img
          src="images/img_ellipse_3.png"
          alt="bank logo"
          className="h-[60px] w-[60px] rounded-[50%]"
        />
        <div className="flex flex-1 flex-col items-start gap-2 md:self-stretch">
          <Text size="xl" as="p">
            {cardtitle}
          </Text>
          <div className="flex flex-wrap justify-between gap-5 self-stretch">
            <Text
              size="md"
              as="p"
              className="self-start !font-medium !text-gray-600"
            >
              {cardnumber}
            </Text>
            <Text
              size="md"
              as="p"
              className="self-end !font-medium !text-gray-600"
            >
              {expirydate}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
