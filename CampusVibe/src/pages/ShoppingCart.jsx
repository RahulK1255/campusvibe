import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../components";
import Header from "../components/Header";
import ShoppingCartProduct from "../components/ShoppingCartProduct";
import ShoppingCartProductcard from "../components/ShoppingCartProductcard";
import React, { Suspense } from "react";
const data = [
  {
    image: "images/img_rectangle_136_5.png",
    buttontext: "25% OFF",
    title: "Trendy Graphic Tee",
    brand: "H&M",
    rating: "4.8",
    price: "Rs. 999",
    discountedprice: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_6.png",
    buttontext: "25% OFF",
    title: "Sleek Modern Tee",
    brand: "H&M",
    rating: "4.8",
    price: "Rs. 699",
    discountedprice: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_7.png",
    buttontext: "25% OFF",
    title: "Comfortable Casual Tee",
    brand: "H&M",
    rating: "4.8",
    price: "Rs. 400",
    discountedprice: "Rs 1000",
  },
];
const data1 = [
  {
    image: "images/img_rectangle_145_149x118.png",
    trendyblackt: "Trendy Black T-shirt",
    price: "Sold by: GENUS APPARELS LTD. ",
    price1: "584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    image: "images/img_rectangle_145_2.png",
    trendyblackt: "Everyday Essential T-Shirt",
    price: "Sold by: GENUS APPARELS LTD. ",
    price1: "584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    image: "images/img_rectangle_145_3.png",
    trendyblackt: "Versatile Cotton Tee",
    price: "Sold by: GENUS APPARELS LTD. ",
    price1: "584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
  {
    image: "images/img_rectangle_145_4.png",
    trendyblackt: "Classic Logo Print Tee",
    price: "Sold by: GENUS APPARELS LTD. ",
    price1: "584",
    oldprice: "₹1299.00",
    offer: "(55% OFF)",
  },
];
export default function ShoppingCartPage() {
  return (
    <>
      <Helmet>
        <title>Your Shopping Cart - FashionFlow</title>
        <meta
          name="description"
          content="Ready to checkout? Review your Shopping Cart with 4 selected items including the Trendy Black T-shirt. Enjoy exclusive discounts and free shipping on orders above $180."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[89px] bg-white-A700 md:gap-[66px] sm:gap-11">
        <div className="flex flex-col gap-6">
          {/* promotion section */}
          <Header />
          {/* breadcrumb section */}
          <div className="flex flex-col items-center gap-[46px]">
            <div className="container-xs flex flex-col items-center md:p-5">
              <div className="flex flex-wrap items-center self-start">
                <Text
                  as="p"
                  className="capitalize tracking-[-0.20px] ! text-gray-500"
                >
                  Home
                </Text>
                <Img
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrow icon"
                  className="ml-1.5 h-[24px] w- [24px] self-start"
                />
                <Heading
                  as="h1"
                  className="ml-[9px] self-end capitalize tracking-[-0.20px]"
                >
                  Shopping Cart
                </Heading>
              </div>
            </div>
            {/* cart items section */}
            <div className="container-xs flex items-center gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[23px] md:self-stretch">
                <div className="flex flex-col gap-[23px]">
                  <div className="flex justify-between gap-5 sm: flex-col">
                    <div className="flex items-center gap-4">
                      <Button
                        size="xs"
                        className="w- [20px] self-start rounded"
                      >
                        | <Img src="images/img_checkmark_white_a700.svg" />
                      </Button>
                      <Heading as="h2">4/4 ITEMS SELECTED</Heading>
                    </div>
                    <div className="flex gap-4">
                      <Heading as="h3">REMOVE</Heading>
                      <div className="h-full w-px bg-blue_gray-900_01" />
                      <Heading as="h4">MOVE TO WISHLIST</Heading>
                    </div>
                  </div>
                  <div className="h-px bg-blue_gray-100" />
                </div>
                <div className="flex flex-col gap-4">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <ShoppingCartProduct
                        {...d}
                        key={"productList1" + index}
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 md:h-px md:w-full" />
              {/* pricing summary section */}
              <div className="flex w-[40%] flex-col gap-8 self-start rounded-lg bg-white-A700 md:w-full">
                <div className="flex flex-col items-start gap-[22px]">
                  <Heading as="h5">PRICE DETAILS (2 items)</Heading>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <div className="flex flex-wrap justify-between gap-5">
                      <Text as="p" className="!text-gray-600">
                        Total MRP
                      </Text>
                      <Text as="p">〒2598</Text>
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
                      <Text as="p" className="self-end !text-gray-600">
                        Coupon Discount
                      </Text>
                      <Text as="p" className="self-start ! text-green-600_01">
                        | -179
                      </Text>
                    </div>
                    <div className="flex justify-between gap-5">
                      <Text as="p" className="self-end !text-gray-600">
                        Shipping Fee
                      </Text>
                      <div className="flex flex-wrap gap-1 self-start">
                        <Text as="p" className="line-through">
                          | ₹100
                        </Text>
                        <Text as="p" className="!text-green-600_01">
                          | FREE
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full self-stretch bg-gray-300" />
                  <div className="flex flex-wrap justify-between gap-5 self-stretch">
                    <Heading as="h6">Total Amount</Heading>
                    <Heading as="h6">$992</Heading>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Button shape="round" className="w-full font-medium sm:px-5">
                    PLACE ORDER
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* related products section */}
        <div className="flex justify-center">
          <div className="container-xs flex flex-col gap-12 md:p-5">
            <div className="flex flex-col items-start gap-3.5">
              <Heading as="h2" className="!text-gray-800_01">
                Related Product
              </Heading>
              <Heading size="4x1" as="h3">
                Discover Related Products
              </Heading>
            </div>
            <div className="flex gap-12 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <ShoppingCartProductcard
                    {...d}
                    key={"productList" + index}
                    className="gap-4 md:w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        {/* footer section */}
        <footer>
          <div className="flex justify-center bg-blue_gray-900_01 py-10 sm:py-5">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full flex-col gap-[107px] md:gap-20 sm:gap-[53px]">
                <div className="flex items-start justify-between gap-5 md:flex-col">
                  <div className="flex w-[45%] flex-col gap-[37px] md:w-full">
                    <img
                      src="images/img_footer_logo.svg"
                      alt="footer logo"
                      className="h-[32px] object-contain md:w-[544px]"
                    />
                    <div className="flex flex-col gap-[18px]">
                      <p className="leading-[26px] text-white-A700" size="md">
                        Style Flows Here: Your Ultimate Fashion Destination!
                        Explore Trendsetting Collections, Shop the Latest Looks,
                        and Let Your Fashion Flow with Us!
                      </p>
                      <div className="flex items-center gap-2.5 self-start">
                        <img
                          src="images/img_lock_white_a700.svg"
                          alt="lock icon"
                          className="h-[24px] w-[24px]"
                        />
                        <p className="self-end text-white-A700" size="md">
                          FashionFlow@Gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[45%] items-start justify-between gap-5 pr-[54px] md:w-full md:pr-5 sm:flex-col">
                    <div className="flex flex-col gap-[15px]">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Product
                      </Heading>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Landing pages
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Shop
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Women
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Men
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Accessories
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-[42%] flex-col gap-[15px] sm:w-full">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Company
                      </Heading>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              About
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="leading-[26px]">
                            <Text size="md" as="p" className="!text-gray-200">
                              Terms & Conditions
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Partners
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Contact
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-[15px]">
                      <Heading size="md" as="h6" className="!text-white-A700">
                        Resources
                      </Heading>
                      <ul className="flex flex-col items-start gap-4">
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Blog
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Tools
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text size="md" as="p" className="!text-gray-200">
                              Support
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <Text
                    size="md"
                    as="p"
                    className="self-end text-white-A700_cc"
                  >
                    © 2020 All Right Reserved
                  </Text>
                  <div className="flex w-[11%] justify-between gap-5">
                    <Img
                      src="images/img_bx_bxl_instagram_alt.svg"
                      alt="instagram icon"
                      className="h-[24px] w-[24px]"
                    />
                    <Img
                      src="images/img_akar_icons_twitter_fill.svg"
                      alt="twitter icon"
                      className="h-[24px] w-[24px]"
                    />
                    <Img
                      src="images/img_akar_icons_linkedin_fill.svg"
                      alt="linkedin icon"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
