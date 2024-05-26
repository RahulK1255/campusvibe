import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MyAccountPersonalInformationPage() {
  return (
    <>
      <Helmet>
        <title>My Account - Manage Your Personal Information</title>
        <meta
          name="description"
          content="Easily update your personal information, manage orders, and payment methods in My Account. Ensure your details are up-to-date for a personalized shopping experience."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[88px] bg-white-A700 md:gap-[66px] sm:gap-11">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="flex flex-col items-center gap-[22px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center self-start">
                <Text as="p" className="capitalize tracking-[-0.20px] !text-gray-500">
                  Home
                </Text>
                <Img src="images/img_arrow_right_gray_600.svg" alt="arrow image" className="ml-1.5 h-[24px] w-[24px] self-start" />
                <Heading as="h1" className="ml-2.5 self-end capitalize tracking-[-0.20px]">
                  My Account
                </Heading>
              </div>
            </div>
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex w-[27%] flex-col gap-4 self-start md:w-full">
                <div className="flex rounded-md bg-blue_gray-900_01 px-4 pb-[15px] pt-4">
                  <Text as="p" className="font-medium !text-white-A700">
                    Personal Information
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="font-medium">
                    My Orders
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="font-medium">
                    Manage Address
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="font-medium">
                    Payment Method
                  </Text>
                </div>
                <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                  <Text as="p" className="font-medium">
                    Password Manager
                  </Text>
                </div>
                <a href="#">
                  <div className="flex rounded-md border border-solid border-blue_gray-100 bg-white-A700 px-4 pb-[13px] pt-[18px]">
                    <Text as="p" className="font-medium">
                      Logout
                    </Text>
                  </div>
                </a>
              </div>
              <div className="h-[660px] w-px bg-gray-300 md:h-px md:w-full" />
              {/* Personal information form content goes here */}
              <div className="flex flex-1 flex-col gap-9 md:self-stretch">
                <div className="relative h-[120px] w-[14%] md:h-auto">
                  <Img src="images/img_sherlock_toy_face_low.png" alt="profile image" className="h-[120px] w-[120px] rounded-[50%]" />
                  <Button color="blue_700" size="x1" shape="circle" className="absolute bottom-[1.00px] right-[1.00px] m-auto w-[38px] !rounded-[19px]">
                    <Img src="images/img_pencil_alt_1.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start gap-9">
                  <div className="flex flex-col gap-6 self-stretch">
                    <div className="flex gap-6 md:flex-col">
                      <div className="flex w-full flex-col items-start gap-[7px]">
                        <Text as="p" className="!font-medium">
                          <span className="text-blue_gray-900_01">First</span>
                          <span className="text-blue_gray-900_01">&nbsp;name&nbsp;</span>
                          <span className="text-red_600_01">*</span>
                        </Text>
                        <Input shape="round" type="text" name="First Name Input" placeholder="First name" className="self-stretch border-blue_gray-100 sm:pr-5" />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[7px]">
                        <Text as="p" className="!font-medium">
                          <span className="text-blue_gray-900_01">Last</span>
                          <span className="text-blue_gray-900_01">&nbsp;name&nbsp;</span>
                          <span className="text-red_600_01">*</span>
                        </Text>
                        <Input shape="round" type="text" name="Last Name Input" placeholder="Last name" className="self-stretch border-blue_gray-100 sm:pr-5" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        <span className="text-blue_gray-900_01">Email</span>
                        <span className="text-red_600_01">*</span>
                      </Text>
                      <Input shape="round" type="email" name="Email Input" placeholder="Email" className="self-stretch border-blue_gray-100 sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        <span className="text-blue_gray-900_01">Phone Number</span>
                      </Text>
                      <Input shape="round" type="text" name="Phone Number Input" placeholder="Phone number" className="self-stretch border-blue_gray-100 sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        <span className="text-blue_gray-900_01">Gender&nbsp;</span>
                        <span className="text-red_600_01">*</span>
                      </Text>
                      <SelectBox
                        color="white_A700"
                        size="md"
                        indicator={
                          <Img
                            src="images/img_arrowdown_blue_gray_600.svg"
                            alt="arrow_down"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        name="Gender Dropdown"
                        placeholder={`Female`}
                        options={dropDownOptions}
                        className="gap-px self-stretch rounded-md border border-solid border-blue_gray-100 sm:pr-5"
                      />
                    </div>
                  </div>
                  <Button color="blue_gray_900_01" size="5xl" shape="round" className="min-w-[237px] font-medium sm:px-5">UPDATE</Button>
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
