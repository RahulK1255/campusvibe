import React from "react";
import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyAccountMyOrdersProduct from "../../components/MyAccountMyOrdersProduct";

const data = [
  {
    arrivingfri: "Arriving Fri, May 24",
    image: "images/img_rectangle_146.png",
    producttitle: "Athletic Performance Tee",
    soldby: "Sold by: GENUS APPARELS LTD.",
    sizebutton: "Size: XL",
    quantitytext: "Qty: 1",
    buyItAgain: "Buy it again",
    trackpackagebutton: "Track package",
    vieworeditbutton: "View or Edit order",
  },
  {
    arrivingfri: "Delivered, May 21",
    image: "images/img_rectangle_146_163x133.png",
    producttitle: "Graphic Print Tee",
    soldby: "Sold by: GENUS APPARELS LTD.",
    sizebutton: "Size: XL",
    quantitytext: "Qty: 1",
    buyItAgain: "Buy it again",
    trackpackagebutton: "Write a product review",
    vieworeditbutton: "Help",
  },
  {
    arrivingfri: "Delivered, May 19",
    image: "images/img_rectangle_146_1.png",
    producttitle: "Essential Solid Tee",
    soldby: "Sold by: GENUS APPARELS LTD.",
    sizebutton: "Size: XL",
    quantitytext: "Qty: 2",
    buyItAgain: "Buy it again",
    trackpackagebutton: "Write a product review",
    vieworeditbutton: "Help",
  },
  {
    arrivingfri: "Delivered, May 11",
    image: "images/img_rectangle_146_2.png",
    producttitle: "Stylish Scoop Neck Tee",
    soldby: "Sold by: GENUS APPARELS LTD.",
    sizebutton: "Size: XL",
    quantitytext: "Qty: 1",
    buyItAgain: "Buy it again",
    trackpackagebutton: "Write a product review",
    vieworeditbutton: "Help",
  },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MyAccountMyordersPage() {
  return (
    <>
      <Helmet>
        <title>My Orders - Track and Manage Your Purchases</title>
        <meta
          name="description"
          content="Easily manage and track your orders with our user-friendly My Orders page. Stay updated on your purchases, from athletic tees to stylish tops."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        {/* header section */}
        <div className="flex flex-col gap-6">
          <Header />
          {/* breadcrumb navigation section */}
          <div className="flex flex-col items-center gap-[22px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center self-start">
                <Text as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrow icon"
                  className="ml-1.5 h-[24px] w-[24px] self-start"
                />
                <Heading as="h1" className="ml-2.5 self-end capitalize tracking-[-0.20px]">
                  My Account
                </Heading>
              </div>
            </div>
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex w-[27%] flex-col gap-4 self-start md:w-full">
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[15px] pt-4">
                  <Text as="p" className="!font-medium">
                    Personal Information
                  </Text>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex rounded-md bg-blue_gray-900_01 px-4 pb-[13px] pt-[18px]">
                    <Text as="p" className="!font-medium !text-white-A700">
                      My Order
                    </Text>
                  </div>
                  <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                    <Text as="p" className="!font-medium">
                      Manage Address
                    </Text>
                  </div>
                  <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                    <Text as="p" className="!font-medium">
                      Payment Method
                    </Text>
                  </div>
                  <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                    <Text as="p" className="!font-medium">
                      Password Manager
                    </Text>
                  </div>
                  <a href="#">
                    <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                      <Text as="p" className="!font-medium">
                        Logout
                      </Text>
                    </div>
                  </a>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 md:h-px md:w-full" />
              {/* account navigation section */}
              <div className="flex flex-1 flex-col gap-[23px] md:self-stretch">
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-5">
                    <Text as="p" className="self-end !font-medium">
                      My Orders
                    </Text>
                    <div className="flex w-[17%] items-center justify-center gap-2">
                      <Text as="p" className="self-end !font-medium">
                        Sort by:
                      </Text>
                      <SelectBox
                        size="xs"
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900_01.svg"
                            alt="arrow_down"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        name="Sort Dropdown"
                        placeholder={`All`}
                        options={dropDownOptions}
                        className="w-full gap-px self-start font-medium sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="h-px bg-blue_gray-100" />
                </div>
                {/* order history section */}
                <div className="flex flex-col gap-6">
                  {data.map((d, index) => (
                    <MyAccountMyOrdersProduct {...d} key={"productsList" + index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
