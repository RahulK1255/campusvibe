import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListProductcard from "../components/ProductListProductcard";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const data = [
  {
    image: "images/img_rectangle_136_341x273.png",
    buttontext: "25% OFF",
    title: "Urban Vibe T-Shirt",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 550",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_8.png",
    buttontext: "25% OFF",
    title: "Cotton Classic Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 450",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_9.png",
    buttontext: "25% OFF",
    title: "Vintage-Inspired Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 564",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_10.png",
    buttontext: "25% OFF",
    title: "Essential Basic T-Shirt",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 976",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_11.png",
    buttontext: "25% OFF",
    title: "Modern Crewneck Top",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 835",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_12.png",
    buttontext: "25% OFF",
    title: "Graphic Print Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 699",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_13.png",
    buttontext: "25% OFF",
    title: "Relaxed Fit T-Shirt",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 744",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_14.png",
    buttontext: "25% OFF",
    title: "Casual Comfort Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 799",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_15.png",
    buttontext: "25% OFF",
    title: "Athletic Performance Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 999",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_16.png",
    buttontext: "25% OFF",
    title: "Stylish V-Neck Shirt",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 543",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_17.png",
    buttontext: "25% OFF",
    title: "Timeless Crew Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 500",
    price2: "Rs 1000",
  },
  {
    image: "images/img_rectangle_136_18.png",
    buttontext: "25% OFF",
    title: "Bold Statement Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 499",
    price2: "Rs 1000",
  },
];

export default function ProductlistPage() {
  return (
    <>
      <Helmet>
        <title>Shop the Latest Fashion Product List</title>
        <meta
          name="description"
          content="Discover our wide range of fashion products with a 25% discount on your first purchase. Explore top brands like Zara, H&M, and more. Find your perfect fit with our extensive collection of jackets, tees, and jeans."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-A700 md:gap-[67px] sm:gap-[45px]">
        {/* header section */}
        <div className="flex flex-col gap-6 self-stretch">
          <Header />
          {/* breadcrumb navigation section */}
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
                  src="images/img_arrow_right_gray_600.svg"
                  alt="arrow image"
                  className="h-[24px] w-[24px] self-start"
                />
                <Heading
                  as="hl"
                  className="self-end capitalize tracking-[-0.20px]"
                >
                  Shop
                </Heading>
              </div>
            </div>
            {/* filter and product section */}
            <div className="container-xs flex items-start gap-12 md:flex-col md:p-5">
              <div className="flex w-[21%] flex-col items-start gap-[13px] pt-2 md:w-full">
                <Heading as="h2" className="!font-bold">
                  Filters
                </Heading>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-1.5 self-stretch"
                >
                  {[...Array(6)].map((_, i) => (
                    <AccordionItem uuid={i} key={`Expandable List${i}`}>
                      <div className="flex flex-1 flex-col gap-1.5">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {(props) => (
                                <>
                                  <div className="flex flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300_01 py-3">
                                    <Heading
                                      size="md"
                                      as="h3"
                                      className="self-start !font-semibold !text-gray-600"
                                    >
                                      Category
                                    </Heading>
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_arrow_up_blue_gray_300.svg"
                                        alt="expand icon"
                                        className="h-[24px] w-[24px]"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_arrow_up_blue_gray_300.svg"
                                        alt="price icon"
                                        className="h-[24px] w-[24px]"
                                      />
                                    )}
                                  </div>
                                </>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="flex flex-col items-start pb-[5px]">
                            <div className="flex py-[7px]">
                              <Text size="md" as="p" className="!text-gray-800">
                                Jacket
                              </Text>
                            </div>
                            <div className="mt-1.5 flex py-[7px]">
                              <Text size="md" as="p" className="!text-gray-800">
                                T-Shirt
                              </Text>
                            </div>
                            <div className="mt-1.5 flex py-[7px]">
                              <Text size="md" as="p" className="!text-gray-800">
                                Jeans
                              </Text>
                            </div>
                            <div className="mt-1.5 flex pb-1.5 pt-2">
                              <Text size="md" as="p" className="!text-gray-800">
                                Panty
                              </Text>
                            </div>
                            <a href="#" className="mt-[15px]">
                              <Text size="md" as="p" className="underline">
                                See all
                              </Text>
                            </a>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex flex-1 flex-col items-end gap-12 md:self-stretch">
                <div className="grid grid-cols-3 gap-12 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {data.map((d, index) => (
                    <ProductListProductcard
                      {...d}
                      key={"productList" + index}
                    />
                  ))}
                </div>
                <div className="flex w-[36%] items-center gap-5 md:w-full">
                  <div className="flex items-center gap-1">
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="previous icon"
                      className="h-[24px] w-[24px]"
                    />
                    <Text size="s" as="p" className="self-start">
                      Previous
                    </Text>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5">
                    <Button
                      color="blue_gray_900_01"
                      className="min-w-[40px] rounded-[10px] font-medium"
                    >
                      1
                    </Button>
                    <Text size="s" as="p">
                      2
                    </Text>
                    <Text size="s" as="p">
                      3
                    </Text>
                    <Text size="s" as="p">
                      4
                    </Text>
                  </div>
                  <div className="flex items-center gap-1">
                    <Text size="s" as="p" className="self-start">
                      Next
                    </Text>
                    <Img
                      src="images/img_arrow_right.svg"
                      alt="next icon"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* news and blog section */}
        <div className="container-xs flex flex-col items-center gap-12 md:p-5">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h2" className="!text-gray-600">
              News & Blog
            </Heading>
            <Heading size="4x1" as="h3">
              Our Latest News & Blogs
            </Heading>
          </div>
          <div className="flex w-full gap-[30px] md:flex-col">
            <div className="flex w-full flex-col gap-[29px]">
              <Img
                src="images/img_rectangle_142_306x381.png"
                alt="first image"
                className="h-[306px] rounded-md object-cover"
              />
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-4">
                  <Text size="md" as="p" className="self-end text-gray-800_01">
                    July 23, 2023
                  </Text>
                  <div className="flex items-center gap-[15px] self-start">
                    <div className="h-[16px] w-px bg-blue_gray-700" />
                    <Text size="md" as="p" className="!text-gray-800_01">
                      H&M
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3.5">
                  <Heading as="h2">Trendy fashion</Heading>
                  <Text as="p" className="w-full leading-7 !text-gray-800_01">
                    Trendy fashion represents the latest, most popular styles
                    and trends, constantly evolving to reflect current tastes
                    and preferences.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[29px]">
              <Img
                src="images/img_rectangle_142_1.png"
                alt="second image"
                className="h-[306px] rounded-md object-cover"
              />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-4">
                  <Text size="md" as="p" className="!text-gray-800_01">
                    July 23, 2023
                  </Text>
                  <div className="h-[16px] w-px bg-blue_gray-700" />
                  <Text size="md" as="p" className="!text-gray-800_01">
                    H&M
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[13px]">
                  <Heading as="h3">New trend fo clothing</Heading>
                  <Text as="p" className="w-full leading-7 !text-gray-800_01">
                    Discover the newest fashion sensations with our latest
                    clothing collection, showcasing cutting-edge designs and
                    captivating styles to elevate your wardrobe.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[29px]">
              <Img
                src="images/img_rectangle_142_2.png"
                alt="image"
                className="h-[306px] rounded-md object-cover"
              />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-4">
                  <Text size="md" as="p" className="!text-gray-800_01">
                    July 23, 2023
                  </Text>
                  <div className="h-[16px] w-px bg-blue_gray-700" />
                  <Text size="md" as="p" className="!text-gray-800_01">
                    Roster
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[13px]">
                  <Heading as="h4">High selling product</Heading>
                  <Text as="p" className="w-full leading-7 !text-gray-800_01">
                    Discover our top-selling product, delivering unmatched
                    quality and style. Renowned for its innovation and
                    durability, it&#39;s a must-have for every discerning
                    shopper.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        <Footer className="self-stretch" />
      </div>
    </>
  );
}
