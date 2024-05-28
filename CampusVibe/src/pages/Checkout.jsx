import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img } from "../components";
import CheckoutHdfcdebitcard from "../components/CheckoutHdfcdebitcard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Secure Checkout - Complete Your Purchase with Ease</title>
        <meta
          name="description"
          content="Experience a smooth and secure checkout process with multiple payment options including UPI, Net Banking, and COD. Shop now and enjoy hassle-free payment for your fashion picks."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        {/* checkout steps section */}
        <div className="flex flex-col gap-6">
          <Header />
          {/* payment options section */}
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center gap-1.5 self-start">
                <Text
                  as="p"
                  className="capitalize tracking-[-0.20px] !text-gray-500"
                >
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_500.svg"
                  alt="right arrow"
                  className="h-[24px] w-[24px] self-start"
                />
                <Text
                  as="p"
                  className="self-end capitalize tracking-[-0.20px] !text-gray-500"
                >
                  Shopping Cart
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="right arrow"
                  className="h-[24px] w-[24px] self-start"
                />
                <Heading
                  as="h1"
                  className="self-end capitalize tracking-[-0.20px]"
                >
                  Checkout
                </Heading>
              </div>
            </div>
            {/* saved cards section */}
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[43px] md:self-stretch">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-start gap-[13px]">
                    <Text size="2xl" as="p" className="font-medium">
                      Payment Option
                    </Text>
                    <div className="h-px w-full self-stretch bg-blue_gray-100" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-solid border-blue_gray-100 bg-white-A700 p-4">
                      <Img
                        src="images/img_clock.svg"
                        alt="upi icon"
                        className="h-[36px] w-[36px]"
                      />
                      <div className="flex items-center gap-4">
                        <Img
                          src="images/img_image_46.png"
                          alt="upi image"
                          className="h-[16px] object-cover"
                        />
                        <Text size="xl" as="p">
                          UPI
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-solid border-blue_gray-100 bg-white-A700 p-4 md:flex-col">
                      <Img
                        src="images/img_clock.svg"
                        alt="google pay icon"
                        className="h-[36px] w-[36px] md:w-full"
                      />
                      <div className="flex flex-1 items-center justify-center gap-2.5 md:self-stretch">
                        <div className="flex px-px pb-[5px] pt-[7px]">
                          <Img
                            src="images/img_settings.svg"
                            alt="settings icon"
                            className="h-[17px]"
                          />
                        </div>
                        <div className="flex">
                          <Text size="xl" as="p">
                            Google Pay
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-solid border-blue_gray-100 bg-white-A700 p-4">
                      <Img
                        src="images/img_clock.svg"
                        alt="clock"
                        className="h-[36px] w-[36px]"
                      />
                      <div className="flex items-center gap-4">
                        <Img
                          src="images/img_ic_baseline_laptop.svg"
                          alt="icbaseline"
                          className="h-[34px]"
                        />
                        <Text size="xl" as="p" className="self-end">
                          Net Banking
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-solid border-blue_gray-100 bg-white-A700 p-4">
                      <Img
                        src="images/img_clock.svg"
                        alt="clock"
                        className="h-[36px] w-[36px]"
                      />
                      <div className="flex items-center gap-4">
                        <Img
                          src="images/img_money_1.svg"
                          alt="moneyone"
                          className="h-[34px]"
                        />
                        <Text size="xl" as="p" className="self-end">
                          Cash on Delivery
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px]">
                  <div className="flex flex-col items-start gap-[15px]">
                    <Text size="2xl" as="p" className="font-medium">
                      Saved Cards
                    </Text>
                    <div className="h-px w-full self-stretch bg-blue_gray-100" />
                  </div>
                  <div className="flex flex-col gap-6">
                    {[...Array(2)].map((d, index) => (
                      <CheckoutHdfcdebitcard key={index} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-[30px] rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 py-6 sm:py-5">
                    <div className="flex items-center gap-6 self-start sm:flex-col">
                      <Img
                        src="images/img_contrast.svg"
                        alt="add card icon"
                        className="h-[36px] w-[36px] sm:w-full"
                      />
                      <Text size="xl" as="p">
                        Add New Credit/Debit/ATM Card
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 pl-[60px] md:pl-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex self-start">
                          <Text as="p" className="font-medium">
                            Card Holder Name
                          </Text>
                        </div>
                        <Input
                          size="xs"
                          shape="round"
                          type="text"
                          name="Name Input"
                          placeholder="Enter Your Full Name"
                          className="border-blue_gray-100 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex self-start">
                          <Text as="p" className="font-medium">
                            Card Number
                          </Text>
                        </div>
                        <Input
                          size="xs"
                          shape="round"
                          name="Number Input"
                          placeholder="XXXX XXXX XXXX XX34"
                          suffix={
                            <Img
                              src="images/img_rupaylogo_1.png"
                              alt="rupay-logo"
                              className="h-[17px] w-[57px]"
                            />
                          }
                          className="gap-[35px] border-blue_gray-100"
                        />
                      </div>
                      <div className="flex gap-4 md:flex-col">
                        <div className="flex w-full flex-col gap-2">
                          <div className="flex self-start">
                            <Text as="p" className="font-medium">
                              Expiry Date
                            </Text>
                          </div>
                          <Input
                            size="xs"
                            shape="round"
                            name="Expiry Input"
                            placeholder="00/0000"
                            className="border-blue_gray-100 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <div className="flex self-start">
                            <Text as="p" className="font-medium">
                              CW
                            </Text>
                          </div>
                          <Input
                            size="xs"
                            shape="round"
                            name="CW Input"
                            placeholder="XXXX"
                            className="border-blue_gray-100 sm:pr-5"
                          />
                        </div>
                      </div>
                      <Button
                        color="blue_gray_900_01"
                        size="5x1"
                        shape="round"
                        className="w-full font-medium sm:px-5"
                      >
                        ADD CARD
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-full w-px bg-gray-300 md:h-px md:w-full" />
                {/* price summary section */}
                <div className="flex w-[40%] flex-col gap-8 self-start rounded-lg bg-white-A700 md:w-full">
                  <div className="flex flex-col items-start gap-[22px]">
                    <Heading as="h2">PRICE DETAILS (2 items)</Heading>
                    <div className="flex flex-col gap-[15px] self-stretch">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="text-gray-600">
                          Total MRP
                        </Text>
                        <Text as="p">₹2598</Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="text-gray-600">
                          Discount on MRP
                        </Text>
                        <Text as="p" className="text-green-600">
                          -₹1430
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-end text-gray-600">
                          Coupon Discount
                        </Text>
                        <Text as="p" className="self-start text-green-600">
                          -₹179
                        </Text>
                      </div>
                      <div className="flex justify-between gap-5">
                        <Text as="p" className="self-end text-gray-600">
                          Shipping Fee
                        </Text>
                        <div className="flex flex-wrap gap-1 self-start">
                          <Text as="p" className="line-through">
                            ₹100
                          </Text>
                          <Text as="p" className="text-green-600">
                            FREE
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full self-stretch bg-gray-300" />
                  <div className="flex flex-wrap justify-between gap-5 self-stretch">
                    <Heading as="h3">Total Amount</Heading>
                    <Heading as="h4">₹992</Heading>
                  </div>
                </div>
                <Button
                  color="gray_300_02"
                  size="5x1"
                  shape="round"
                  className="w-full font-medium sm:px-5"
                >
                  CONFIRM PAYMENT
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
