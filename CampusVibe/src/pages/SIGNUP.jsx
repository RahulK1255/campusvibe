import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button, CheckBox, Input } from "../components";
import React from "react";

export default function SIGNUPPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up - Create Your Account Today</title>
        <meta
          name="description"
          content="Join our community now by signing up. Create your personal account to enjoy exclusive benefits, offers, and stay updated with our latest Terms & Conditions and Privacy Policy."
        />
      </Helmet>
      {/* signup page section */}
      <div className="w-full bg-gray-200">
        {/* signup form section */}
        <div className="flex md:flex-col">
          {/* header logo section */}
          <div className="flex w-[50%] flex-col justify-center gap-[50px] bg-white-A700 px-12 pb-[343px] pt-[47px] md:w-full md:p-5">
            <Img
              src="images/img_header_logo.svg"
              alt="logo image"
              className="h-[32px] w-[126px] object-contain"
            />
            {/* signup form section */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-start gap-[30px] self-stretch">
                <Heading size="3xl" as="h1">
                  Sign up to create your account
                </Heading>
                <div className="flex flex-col gap-6 self-stretch">
                  <div className="flex gap-6 md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        First Name
                      </Text>
                      <Input
                        shape="round"
                        type="text"
                        name="First Name Input"
                        placeholder={`First name`}
                        className="self-stretch border-blue_gray-100 sm:pr-5"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-[7px]">
                      <Text as="p" className="!font-medium">
                        Last Name
                      </Text>
                      <Input
                        shape="round"
                        type="text"
                        name="Last Name Input"
                        placeholder={`Last name`}
                        className="self-stretch border-blue_gray-100 sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Text as="p" className="!font-medium">
                      Email Address
                    </Text>
                    <Input
                      shape="round"
                      type="email"
                      name="Email Input"
                      placeholder={`Email Address`}
                      className="self-stretch border-blue_gray-100 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Text as="p" className="!font-medium">
                      Phone Number
                    </Text>
                    <Input
                      shape="round"
                      type="number"
                      name="Phone Input"
                      placeholder={`Phone Number`}
                      prefix={
                        <Img
                          src="images/img_arrowdown_blue_gray_600.svg"
                          alt="arrow_down"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="gap-4 self-stretch border-blue_gray-100 sm:px-5"
                    />
                  </div>
                  <CheckBox
                    name="Terms Checkbox"
                    label="By signing up I agree to the Terms & Conditions and Privacy Policy"
                    id="TermsCheckbox"
                    className="gap-2 pb-px pr-[35px] pt-[5px] font-chivo text-base text-blue_gray-600 sm:pr-5"
                  />
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Button shape="round" className="w-full sm:px-5">
                    SIGN UP
                  </Button>
                </a>
              </div>
              {/* signin prompt section */}
              <div className="flex flex-wrap gap-[7px] pt-1">
                <Text size="md" as="p">
                  Already have account?
                </Text>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Heading size="md" as="h2" className="!font-semibold">
                    Sign In
                  </Heading>
                </a>
              </div>
            </div>
          </div>
          <Img
            src="images/img_frame_26911_1024x720.png"
            alt="image frame"
            className="h-[1024px] w-[50%] object-cover md:w-full"
          />
        </div>
      </div>
    </>
  );
}
