import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyAccountFAQsFaq from "../../components/MyAccountFAQsFaq";
import { Accordion, AccordionItem } from "react-accessible-accordion";

export default function MyAccountFAQsPage() {
  return (
    <>
      <Helmet>
        <title>FAQs - Find Answers to Your Shopping Queries</title>
        <meta
          name="description"
          content="Get all the answers to your questions about ordering, shipping, returns, and more on our comprehensive FAQ page. Shop with confidence!"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[86px] bg-white-A700 md:gap-16 sm:gap-[43px]">
        <div className="flex flex-col gap-6">
          {/* promo announcement section */}
          <Header />
          {/* faq breadcrumbs section */}
          <div className="flex flex-col items-center gap-6">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start">
                <Text as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img src="images/img_arrow_right_gray_600.svg" alt="arrow icon" className="h-[24px] w-[24px]" />
                <a href="FAQs" target="_blank" rel="noreferrer" className="self-end">
                  <Heading as="h1" className="capitalize tracking-[-0.20px]">
                    FAQs
                  </Heading>
                </a>
              </div>
            </div>
            {/* faq content section */}
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex w-[27%] flex-col gap-4 self-start md:w-full">
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[15px] pt-4">
                  <Text as="p" className="!font-medium">
                    General Information
                  </Text>
                </div>
                <div className="flex rounded-md bg-blue_gray-900_01 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="!font-medium !text-white-A700">
                    Ordering & Shipping
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="!font-medium">
                    Returns & Exchanges
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="!font-medium">
                    Payment & Discounts
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[15px] pt-4">
                  <Text as="p" className="!font-medium">
                    Account & Profile
                  </Text>
                </div>
              </div>
              <div className="h-[712px] w-px bg-gray-300 md:h-px md:w-[712px]" />
              <Accordion preExpanded={[0]} className="flex flex-1 flex-col gap-6 md:w-full md:self-stretch">
                {[...Array(6)].map((_, i) => (
                  <AccordionItem uuid={i} key={`Expandable List${i}`}>
                    <MyAccountFAQsFaq />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
