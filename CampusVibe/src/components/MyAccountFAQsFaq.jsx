import React from "react";
import { Text, Img, Heading } from "../components";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";

export default function MyAccountFAQsFaq({
  questiontext = "How long does shipping take?",
  descriptiontext = "Our standard shipping typically takes 3-5 business days within the contiguous United States. International shipping times may vary based on the destination country and customs processing times. We also offer expedited shipping options for customers who need their orders to arrive more quickly.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-6 p-6 sm:p-5 border-blue_gray-900_01 border border-solid bg-white-A700 flex-1 rounded-[12px]`}
    >
      <AccordionItemHeading className="w-full">
        <AccordionItemButton>
          <AccordionItemState>
            {(state) => (
              <div className="flex items-center justify-between gap-5 self-stretch pl-[5px]">
                <Heading as="h6" className="self-end">
                  {questiontext}
                </Heading>
                <Img
                  src={
                    state.expanded
                      ? "images/img_arrow_up.svg"
                      : "images/img_arrow_down.svg"
                  }
                  alt="expand icon"
                  className="h-[24px] w-[24px] self-start"
                />
              </div>
            )}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="self-stretch">
          <Text as="p" className="leading-[25px] !text-gray-600">
            {descriptiontext}
          </Text>
        </div>
      </AccordionItemPanel>
    </div>
  );
}
