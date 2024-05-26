import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, TextArea, SelectBox, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddressOnePage() {
  return (
    <>
      <Helmet>
        <title>Add Shipping Address - FashionFlow Checkout</title>
        <meta
          name="description"
          content="Enter your shipping details to complete your FashionFlow purchase. Enjoy discounts and free shipping on premium fashion items."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        <div className="flex flex-col gap-6">
          {/* promo announcement section */}
          <Header />
          {/* breadcrumb navigation section */}
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start sm:flex-col">
                <Text as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_500.svg"
                  alt="arrow right"
                  className="h-[24px] w-[24px] self-start sm:w-full"
                />
                <Text as="p" className="self-end capitalize tracking-[-0.20px] !text-gray-500">
                  Shopping Cart
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrow right"
                  className="h-[24px] w-[24px] self-start sm:w-full"
                />
                <Heading as="h1" className="capitalize tracking-[-0.20px]">
                  Product Details
                </Heading>
              </div>
            </div>
            {/* shipping information section */}
            <div className="container-xs flex gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                <div className="flex flex-col items-start gap-4 pt-[5px]">
                  <Heading as="h2">Shipping information</Heading>
                  <div className="h-px w-full self-stretch bg-blue_gray-100" />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-[7px] self-stretch">
                    <Text as="p" className="!font-medium">
                      <span className="text-blue_gray-900_01">Name&nbsp;</span>
                      <span className="text-red-600">*</span>
                    </Text>
                    <Input
                      shape="round"
                      type="text"
                      name="Name Input"
                      placeholder="Enter your name"
                      className="self-stretch border-blue_gray-100 sm:pr-5"
                    />
                  </div>
                  <div className="flex gap-5 self-stretch md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        <span className="text-blue_gray-900_01">Email address&nbsp;</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <Input
                        shape="round"
                        type="email"
                        name="Email Input"
                        placeholder="Enter your email"
                        className="self-stretch border-blue_gray-100 sm:pr-5"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        <span className="text-blue_gray-900_01">Phone number&nbsp;</span>
                        <span className="text-red-600">*</span>
                      </Text>
                      <Input
                        shape="round"
                        type="number"
                        name="Phone Input"
                        placeholder="Enter your phone number"
                        className="self-stretch border-blue_gray-100 sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[5px] self-stretch">
                    <Text as="p" className="!font-medium">
                      <span className="text-blue_gray-900_01">Country&nbsp;</span>
                      <span className="text-red-600">*</span>
                    </Text>
                    <SelectBox
                      color="white_A700"
                      size="md"
                      indicator={
                        <Img
                          src="images/img_arrowdown_blue_gray_900_01.svg"
                          alt="arrow_down"
                          className="h-[6px] w-[11px]"
                        />
                      }
                      getOptionLabel={(e) => (
                        <>
                          <div className="flex items-center">
                            <Img src="images/img_television.svg" alt="television" className="h-[26px] w-[34px]" />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="Country Dropdown"
                      placeholder="Select Country"
                      options={dropDownOptions}
                      className="self-stretch rounded-md border border-solid border-blue_gray-100 sm:px-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[7px] self-stretch">
                    <Text as="p" className="!font-medium">
                      <span className="text-blue_gray-900_01">Your address&nbsp;</span>
                      <span className="text-red-600">*</span>
                    </Text>
                    <TextArea
                      shape="round"
                      name="Address Input"
                      placeholder="Enter full address"
                      className="self-stretch !border-blue_gray-100 text-gray-400 sm:pb-5 sm:pr-5"
                    />
                  </div>
                  <Button
                    color="blue_gray_900_01"
                    size="5x1"
                    shape="round"
                    className="min-w-[178px] font-medium sm:px-5"
                  >
                    ADD ADDRESS
                  </Button>
                </div>
              </div>
              {/* price summary section */}
              <div className="flex w-[42%] items-start gap-[23px] md:w-full sm:flex-col">
                <div className="h-full w-px bg-gray-300 sm:h-px sm:w-full" />
                <div className="flex flex-1 flex-col gap-8 rounded-lg bg-white-A700 sm:self-stretch">
                  <div className="flex flex-col items-start gap-[22px]">
                    <Heading as="h3">PRICE DETAILS (2 items)</Heading>
                    <div className="flex flex-col gap-[15px] self-stretch">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="!text-gray-600">
                          Total MRP
                        </Text>
                        <Text as="p">₹2598</Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="!text-gray-600">
                          Discount on MRP
                        </Text>
                        <Text as="p" className="!text-green-600_01">
                          -1430
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-end text-gray-600">
                          Coupon Discount
                        </Text>
                        <Text as="p" className="self-start !text-green-600_01">
                          -179
                        </Text>
                      </div>
                      <div className="flex justify-between gap-5">
                        <Text as="p" className="self-end !text-gray-600">
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
                      <Heading as="h5">₹992</Heading>
                    </div>
                  </div>
                  <Button color="gray_300_02" size="5xl" shape="round" className="w-full font-medium sm:px-5">
                    CONFIRM PAYMENT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter signup section */}
        <Footer />
      </div>
    </>
  );
}
