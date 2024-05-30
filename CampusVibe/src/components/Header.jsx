import React from "react";
import { Img, Heading, Text } from "../components";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex justify-center self-stretch bg-blue_gray-900_01 py-[15px]">
        <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
          <Text size="md" as="p" className="self-end !text-white-A700">
            <span className="text-white-A700">
              Sign up now and enjoy a 25% discount on your first order.
              Don&#39;t miss out!&nbsp;
            </span>
            <span className="font-semibold text-blue-700">Sign up now</span>
          </Text>
          <a href="#">
            <Img
              src="images/img_icon.svg"
              alt="icon link"
              className="h-[24px] w-[24px] md:w-full"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center self-stretch border-b border-solid border-gray-600 bg-white-A700 py-6 sm:py-5">
        <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
          <Img
            src="images/img_header_logo.svg"
            alt="header logo"
            className="h-[32px] w-[126px] object-contain"
          />
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#">
                <Heading size="s" as="p">
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Shop
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Women
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Men
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Accessories
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  About Us
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Contact Us
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="s"
                  as="p"
                  className="!text-gray-600 hover:!text-blue_gray-900_01"
                >
                  Blog
                </Heading>
              </a>
            </li>
          </ul>
          <div className="flex gap-5">
            <a href="#">
              <Img
                src="images/img_search.svg"
                alt="search icon"
                className="h-[24px] w-[24px]"
              />
            </a>
            <a href="#">
              <Img
                src="images/img_favorite.svg"
                alt="favorite icon"
                className="h-[24px] w-[24px]"
              />
            </a>
            <a href="#">
              <Img
                src="images/img_bag.svg"
                alt="bag icon"
                className="h-[24px] w-[24px]"
              />
            </a>
            <a href="#">
              <Img
                src="images/img_lock.svg"
                alt="lock icon"
                className="h-[24px] w-[24px]"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
