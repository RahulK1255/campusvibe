import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../components";
import AddressTwoAddress from "../components/AddressTwoAddress";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AddressTwoPage() {
  return (
    <>
      <Helmet>
        <title>Saved Address - Manage Your Shipping Details</title>
        <meta
          name="description"
          content="Easily edit or add new shipping addresses to ensure a seamless shopping experience. Enjoy exclusive discounts and free shipping on select orders."
        />
      </Helmet>
      {/* address page layout section */}
      <div className="flex w-full flex-col gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        {/* page header section */}
        <div className="flex flex-col gap-6">
          {/* promotion banner section */}
          <Header />
          {/* breadcrumb navigation section */}
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start">
                <Text
                  as="p"
                  className="capitalize tracking-[-1.14px] !text-gray-500"
                >
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_500.svg"
                  alt="arrow right"
                  className="h-[24px] w-[24px] self-start"
                />
                <Text
                  as="p"
                  className="self-end capitalize tracking-[-1.14px] !text-gray-500"
                >
                  Shopping Cart
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrow right"
                  className="h-[24px] w-[24px] self-start"
                />
                <Heading as="h1" className="capitalize tracking-[-1.14px]">
                  Product Details
                </Heading>
              </div>
            </div>
            {/* address section */}
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[22px] md:self-stretch">
                <div className="flex flex-col items-start gap-[15px]">
                  <Heading as="h2">Saved Address</Heading>
                  <div className="h-px w-full self-stretch bg-blue_gray-100" />
                </div>
                <div className="flex flex-col gap-[23px]">
                  {[...Array(2)].map((d, index) => (
                    <AddressTwoAddress
                      userimage="images/img_contrast.svg"
                      username="Jone Cooper"
                      useraddress="2118 Thornridge Cir. Syracuse, Connecticut 35624"
                      editbutton="Edit"
                      key={"addressList" + index}
                      className="pb-[23px]"
                    />
                  ))}
                </div>
                <Button
                  size="6x1"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_plus_solid.svg"
                      alt="plus/solid"
                      className="h-[36px] w-[36px]"
                    />
                  }
                  className="w-full gap-4 border border-solid border-blue_gray-100 font-medium !text-blue_gray-900_01 sm:px-5"
                >
                  Add Address
                </Button>
              </div>
              <div className="h-full w-px bg-gray-300 md:h-px md:w-full" />
              {/* price summary section */}
              <div className="flex w-[40%] flex-col gap-8 self-start rounded-lg bg-white-A700 md:w-full">
                <div className="flex flex-col items-start gap-[22px]">
                  <Heading as="h3">PRICE DETAILS (2 items)</Heading>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text as="p" className="!text-blue_gray-800">
                        Total MRP
                      </Text>
                      <Text as="p">₹2598</Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text as="p" className="!text-blue_gray-800">
                        Discount on MRP
                      </Text>
                      <Text as="p" className="!text-green-600_01">
                        ₹1430
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p" className="self-end !text-blue_gray-800">
                        Coupon Discount
                      </Text>
                      <Text as="p" className="self-start !text-green-600_01">
                        ₹179
                      </Text>
                    </div>
                    <div className="flex justify-between gap-5">
                      <Text as="p" className="self-end !text-blue_gray-800">
                        Shipping Fee
                      </Text>
                      <div className="flex flex-wrap gap-1 self-start">
                        <Text as="p" className="line-through">
                          ₹100
                        </Text>
                        <Text as="p" className="!text-green-600_01">
                          FREE
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full self-stretch bg-gray-300" />
                  <div className="flex flex-wrap justify-between gap-5 self-stretch">
                    <Heading as="h4">Total Amount</Heading>
                    <Heading as="h5">$992</Heading>
                  </div>
                </div>
                <Button
                  color="blue_gray_900_01"
                  size="5x1"
                  shape="round"
                  className="w-full font-medium sm:px-5"
                >
                  CONFIRM PAYMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* page footer section */}
        <Footer />
      </div>
    </>
  );
}
