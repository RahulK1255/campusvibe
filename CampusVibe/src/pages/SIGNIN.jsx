import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Input } from "../components";

export default function SIGNINPage() {
  return (
    <>
      <Helmet>
        <title>Sign In - Access Your Personalized Shopping Experience</title>
        <meta
          name="description"
          content="Sign in to your account to enjoy a personalized shopping experience. Discover exclusive deals, track orders, and update your preferences."
        />
      </Helmet>
      {/* main container section */}
      <div className="w-full bg-gray-200">
        <div className="flex md: flex-col">
          {/* header section */}
          <div className="flex w-[50%] flex-col justify-center gap-[50px] bg-white-A700 px-12 pb-[383px] pt-[47px] md:w-full md:p-5">
            <Img
              src="images/img_header_logo.svg"
              alt="header logo"
              className="h-[32px] w-[126px] object-contain"
            />
            <div className="flex flex-col items-center gap-[23px]">
              {/* sign in form section */}
              <div className="flex flex-col items-center gap-6 self-stretch">
                {/* sign in fields section */}
                <div className="flex flex-col items-start gap-[29px] self-stretch">
                  <Heading size="3xl" as="h1">
                    Sign in to your account
                  </Heading>
                  <div className="flex flex-col gap-8 self-stretch">
                    {/* email field section */}
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
                    <div className="flex flex-col items-end gap-[21px]">
                      {/* password field section */}
                      <div className="flex flex-col items-start gap-[7px] self-stretch">
                        <Text as="p" className="!font-medium">
                          Password
                        </Text>
                        <Input
                          shape="round"
                          type="password"
                          name="Password Input"
                          placeholder={`Password`}
                          className="self-stretch border-blue_gray-100 sm:pr-5"
                        />
                      </div>
                      <a href="#">
                        <Heading size="md" as="h2" className="!font-semibold">
                          Forgot Password?
                        </Heading>
                      </a>
                    </div>
                  </div>
                  <a href="#" target="_blank">
                    <Button shape="round" className="w-full sm:px-5">
                      SIGN IN
                    </Button>
                  </a>
                </div>

                {/* sign up prompt section */}
                <div className="flex flex-wrap gap-1">
                  <a href="#" className="self-start">
                    <Text size="md" as="p">
                      Don’t have an account?
                    </Text>
                  </a>
                  <a href="#" target="_blank">
                    <Heading size="md" as="h3">
                      Sign Up
                    </Heading>
                  </a>
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-gray-200" />
              
              {/* footer links section */}
              <div className="flex flex-wrap gap-[23px]">
                <a href="#" className="self-start">
                  <Text size="md" as="p" className="!text-blue_gray-200">
                    Terms & Conditions
                  </Text>
                </a>
                <a href="#" className="self-end">
                  <Text size="md" as="p" className="!text-blue_gray-200">
                    Privacy Policy
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <Img
            src="images/img_frame_26911.png"
            alt="image frame"
            className="h-[1024px] w-[50%] object-cover md:w-full"
          />
        </div>
      </div>
    </>
  );
}
