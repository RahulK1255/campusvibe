import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomepageColumnjuly from "../components/HomepageColumnjuly";
import HomepageColumntrendy from "../components/HomepageColumntrendy";
import HomepageImage from "../components/HomepageImage";
import HomepageRowfree from "../components/HomepageRowfree";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
  { womenImage: "images/img_rectangle_145.png", womenTitle: "WOMEN" },
  { womenImage: "images/img_rectangle_145_485x369.png", womenTitle: "MEN" },
  { womenImage: "images/img_rectangle_146_485x369.png", womenTitle: "KIDS" },
];

const data1 = [
  {
    userimage: "images/img_rectangle_142_306x381.png",
    datetext: "July 23, 2023",
    brandtext: "H&M",
    titletext: "Trendy fashion",
    descriptiontext:
      "Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences.",
  },
  {
    userimage: "images/img_rectangle_142_1.png",
    datetext: "July 23, 2023",
    brandtext: "H&M",
    titletext: "New trend fo clothing",
    descriptiontext:
      "Discover the newest fashion sensations with our latest clothing collection, showcasing cutting-edge designs and captivating styles to elevate your wardrobe.",
  },
  {
    userimage: "images/img_rectangle_142_2.png",
    datetext: "July 23, 2023",
    brandtext: "Roster",
    titletext: "High selling product",
    descriptiontext:
      "Discover our top-selling product, delivering unmatched quality and style. Renowned for its innovation and durability, it&#39;s a must-have for every discerning shopper.",
  },
];

const data2 = [
  { title: "Free Shipping", description: "Free Shipping for order above $180" },
  { title: "Flexible Payment", description: "Multiple secure payment options" },
  { title: "24*7 Support", description: "We Support Online all days" },
];

const data3 = [
  { cardImage: "images/img_rectangle_139.png" },
  { cardImage: "images/img_rectangle_141.png" },
  { cardImage: "images/img_rectangle_137.png" },
  { cardImage: "images/img_rectangle_138.png" },
];

const data4 = [
  {
    image: "images/img_rectangle_136_5.png",
    buttontext: "25% OFF",
    title: "Trendy Graphic Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 1200",
    price2: "Rs 1500",
  },
  {
    image: "images/img_rectangle_136_6.png",
    buttontext: "25% OFF",
    title: "Sleek Modern Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 2000",
    price2: "Rs 3000",
  },
  {
    image: "images/img_rectangle_136_7.png",
    buttontext: "25% OFF",
    title: "Comfortable Casual Tee",
    brand: "H&M",
    rating: "4.8",
    price1: "Rs. 750",
    price2: "Rs 1000",
  },
];

const data5 = [
  {  discountimage : "images/img_portrait_young.png",},
  {  discountimage : "images/img_portrait_man_we.png",}
]

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - Your Ultimate Style Destination</title>
        <meta
          name="description"
          content="Welcome to your fashion haven! Enjoy a 25% discount on your first order, explore our summer sale with 50% OFF, and shop the latest in men's and women's fashion. Free shipping available for orders over $180."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[89px] bg-white-A700 md:gap-[66px] sm:gap-11">
        {/* promo announcement section */}
        <div className="flex flex-col items-end self-stretch bg-gray-50">
          {/* main header section */}
          <Header className="self-stretch" />

          {/* hero section */}
          <div className="flex w-[92%] items-center gap-12 md:w-full md:flex-col md:p-5">
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
              <Button
                color="white_A700"
                size="4xl"
                leftIcon={
                  <Img
                    src="images/img_icon_blue_gray_900_01.svg"
                    alt="icon"
                    className="h-[27px] w-[27px]"
                  />
                }
                className="min-w-[531px] gap-2.5 rounded-[23px] font-bold !text-blue_gray-900_01"
              >
                Enjoy 50% OFF in Our Summer Super Sale!
              </Button>
              <Heading size="6xl" as="h1" className="w-full leading-[73px]">
                <>
                  Step into Fashion at Your <br />
                  Ultimate Style Destination!
                </>
              </Heading>
              <Text
                as="p"
                className="w-full !font-medium leading-7 !text-gray-600"
              >
                Explore a World of Fashion Possibilities with Exclusive
                Discounts - Dive into Your Ultimate Style Destination and
                Elevate Your Wardrobe Today!
              </Text>
              <Button
                size="3xl"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
                className="min-w-[176px] gap-2.5 font-bold sm:px-5"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_close_up_portra.png"
              alt="feature image"
              className="h-[637px] w-[41%] object-cover md:w-full"
            />
          </div>
        </div>

        {/* services section */}
        <div className="flex flex-col items-center gap-[90px] self-stretch md:gap-[67px] sm:gap-[45px]">
          <div className="flex justify-center self-stretch">
            <div className="container-xs flex gap-[134px] md:flex-col md:p-5">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data2.map((d, index) => (
                  <HomepageRowfree
                    {...d}
                    key={"partnerList" + index}
                    className="flex-1"
                  />
                ))}
              </Suspense>
            </div>
          </div>

          {/* categories highlights section */}
          <div className="container-xs flex gap-12 md:flex-col md:p-5">
            <Suspense>
              {data.map((d, index) => (
                <div
                  key={"productList" + index}
                  className="relative h-[485px] w-full md:h-auto"
                >
                  <a href="" target="_blank">
                    <Img
                      src={d.womenImage}
                      alt="women image"
                      className="h-[485px] w-full rounded-md object-cover"
                    />
                  </a>
                  <Heading
                    size="4xl"
                    as="h2"
                    className="absolute bottom-[9%] left-0 right-0 m-auto w-max !font-extrabold tracking-[15.00px] ! text-white-A700"
                  >
                    {d.womenTitle}
                  </Heading>
                </div>
              ))}
            </Suspense>
          </div>
        </div>

        {/* featured products section */}
        <div className="flex justify-center self-stretch bg-white-A700">
          <div className="container-xs flex justify-center bg-white-A700 md:p-5">
            <Tabs
              className="flex w-full flex-col items-start"
              selectedTabClassName="!text-white-A700 bg-blue_gray-900_01 rounded-md"
              selectedTabPanelClassName="mt-12 relative tab-panel--selected"
            >
              <Heading as="h2" className="!text-gray-600">
                Our Products
              </Heading>
              <Heading size="4xl" as="h3" className="mt-[17px]">
                Our Bestselling Products
              </Heading>
              <TabList className="mt-3 flex w-[49%] flex-wrap justify-between gap-[104px] py-[15px] pl-[57px] pr-[50px] md:w-full md:gap-5 md:px-5">
                <Tab className="h-[20px] w-[20px] text-base font-medium text-white-A700">
                  All
                </Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">
                  Women
                </Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">
                  Men
                </Tab>
                <Tab className="text-base font-medium text-blue_gray-900_01">
                  Kids
                </Tab>
              </TabList>
              {[...Array(4)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="absolute">
                  <div className="w-full self-stretch">
                    <div className="flex gap-12 md:flex-col">
                      <Suspense>
                        {data4.map((d, index) => (
                          <HomepageColumntrendy
                            {...d}
                            key={"trendyList" + index}
                            className="gap-4 md:w-full"
                          />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>

        {/* limited time offer section */}
        <div className="flex justify-center self-stretch bg-gray-50">
          <div className="container-xs flex items-center justify-center gap-[50px] md:flex-col md:p-5">
            <Img
              src="images/img_young_women_pos.png"
              alt="featured image"
              className="h-[487px] w-[47%] object-cover md:w-full"
            />
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
              <Heading size="xl" as="h2">
                Limited Time Offers
              </Heading>
              <Heading size="5xl" as="h3" className="w-full leading-[66px]">
                Get 50% Off All Fashion - Limited Time Offer!
              </Heading>
              <Text
                as="p"
                className="w-full !font-medium leading-7 !text-gray-600"
              >
                Discover Your Signature Look for Less - Enjoy discount All
                Fashion Items! Limited Time Offer, Act Fast!
              </Text>
              <Button
                size="3xl"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_frame.svg"
                    alt="frame"
                    className="h-[24px] w-[24px]"
                  />
                }
                className="min-w-[176px] gap-2.5 font-bold sm:px-5"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        {/* fashion discount section */}
        <div className="container-xs flex gap-12 md:flex-col md:p-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data5.map((item, index) => (
              <HomepageImage
                offer="Flat 20% Discount"
                explorethe={<>Explore the Latest<br />in Men&#39;s Fashion</>}
                stepintostyle="Step into Style Unveiling the Newest Trends"
                shopNow="Shop Now"
                image={item.discountimage}
                key={"discountList" + index}
                className="pr-5"
              />
            ))}
          </Suspense>
        </div>

        {/* deals of the day section */}
        <div className="container-xs flex flex-col gap-[47px] md:p-5">
          <div className="flex flex-col items-start gap-[15px]">
            <Heading as="h2" className="!text-gray-800_01">
              Today Deals
            </Heading>
            <Heading size="4xl" as="h3">
              Deals of the Day
            </Heading>
          </div>
          <div className="flex gap-12 md:flex-col">
            <div className="flex w-full flex-col rounded-md border border-solid border-gray-200_01">
              <Img
                src="images/img_rectangle_142.png"
                alt="denim image"
                className="h-[350px] rounded-tl-md rounded-tr-md object-cover"
              />
              <div className="flex flex-col items-start gap-[7px] px-4 pb-[15px] pt-4">
                <div className="flex flex-col items-start gap-1.5">
                  <Text as="p" className="!font-medium">
                    Womens Denim Jacket
                  </Text>
                  <div className="flex gap-[9px]">
                    <Text
                      size="md"
                      as="p"
                      className="!font-medium !text-gray-600_01"
                    >
                      ZARA
                    </Text>
                    <div className="flex items-center gap-[3px]">
                      <Text size="md" as="p" className="!text-gray-600_01">
                        4.4
                      </Text>
                      <Img
                        src="images/img_signal.png"
                        alt="rating signal"
                        className="h-[16px] w-[16px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="2xl" as="h2">
                    Rs. 700
                  </Heading>
                  <Text as="p" className="!text-gray-600_01 line-through">
                    Rs. 1000
                  </Text>
                  <Heading
                    as="h3"
                    className="self-end !font-bold !text-green-900_01"
                  >
                    (30% off)
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-md border border-solid border-gray-200_01">
              <Img
                src="images/img_rectangle_145_350x369.png"
                alt="v-neck image"
                className="h-[350px] rounded-tl-md rounded-tr-md object-cover"
              />
              <div className="flex flex-col items-start gap-[5px] px-4 pb-[15px] pt-[18px]">
                <Text as="p" className="!font-medium">
                  Stylish V-Neck Shirt
                </Text>
                <div className="flex flex-col items-start gap-[7px]">
                  <div className="flex gap-[9px]">
                    <Text
                      size="md"
                      as="p"
                      className="!font-medium !text-gray-600_01"
                    >
                      ZARA
                    </Text>
                    <div className="flex items-center gap-[3px]">
                      <Text size="md" as="p" className="!text-gray-600_01">
                        4.4
                      </Text>
                      <Img
                        src="images/img_signal.png"
                        alt="v-neck signal"
                        className="h-[16px] w-[16px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <Heading size="2xl" as="h4">
                      Rs. 700
                    </Heading>
                    <Text as="p" className="!text-gray-600_01 line-through">
                      Rs. 1000
                    </Text>
                    <Heading
                      as="h5"
                      className="self-end !font-bold !text-green-900_01"
                    >
                      (30% off)
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-md border border-solid border-gray-200_01">
              <Img
                src="images/img_rectangle_145_1.png"
                alt="image"
                className="h-[350px] rounded-tl-md rounded-tr-md object-cover"
              />
              <div className="flex flex-col items-start gap-1.5 px-4 pb-[15px] pt-4">
                <Text as="p" className="!font-medium">
                  Bold Statement Tee
                </Text>
                <div className="flex flex-col items-start gap-[7px]">
                  <div className="flex gap-[9px]">
                    <Text
                      size="md"
                      as="p"
                      className="!font-medium !text-gray-600_01"
                    >
                      ZARA
                    </Text>
                    <div className="flex items-center gap-[3px]">
                      <Text size="md" as="p" className="!text-gray-600_01">
                        4.4
                      </Text>
                      <Img
                        src="images/img_signal.png"
                        alt="signal"
                        className="h-[16px] w-[16px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <Heading size="2xl" as="h6">
                      Rs. 700
                    </Heading>
                    <Text as="p" className="!text-gray-600_01 line-through">
                      Rs. 1000
                    </Text>
                    <Heading
                      as="h6"
                      className="self-end !font-bold !text-green-900_01"
                    >
                      (30% off)
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* instagram follow section */}
        <div className="flex justify-center self-stretch bg-blue_gray-900_01 py-[90px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[46px] md:p-5">
            <Heading size="4xl" as="h2" className="!text-white-A700">
              Follow Us On Instagram
            </Heading>
            <div className="flex w-full gap-[30px] md:flex-col">
              <Suspense>
                {data3.map((d, index) => (
                  <div key={"imageList" + index} className="flex w-full flex-col">
                    <Img
                      src={d.cardImage}
                      alt="card image"
                      className="h-[313px] rounded-md object-cover"
                    />
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
        </div>

        {/* news and blog section */}
        <div className="container-xs flex flex-col items-center gap-12 md:p-5">
          <div className="flex flex-col items-center gap-4">
            <Heading as="h2" className="!text-gray-600">
              News & Blog
            </Heading>
            <Heading size="4xl" as="h3">
              Our Latest News & Blogs
            </Heading>
          </div>
          <div className="flex w-full gap-[30px] md:flex-col">
            <Suspense>
              {data1.map((d, index) => (
                <HomepageColumnjuly {...d} key={"blogList" + index} />
              ))}
            </Suspense>
          </div>
        </div>

        {/* faq section */}
        <div className="flex justify-center self-stretch bg-gray-50 py-[90px] md:py-5">
          <div className="container-xs flex flex-col items-center gap-[49px] md:p-5">
            <div className="flex flex-col items-center gap-[15px]">
              <Heading as="h2" className="!text-gray-600">
                FAQ
              </Heading>
              <Heading size="4xl" as="h3">
                Have Queries? Refer Here
              </Heading>
            </div>
            <div className="self-stretch">
              <div className="flex flex-col gap-6">
                <div className="flex flex-1 cursor-pointer flex-col gap-6 rounded-[12px] border border-solid border-gray-100 bg-white-A700 p-6 shadow-xs hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <div className="flex items-center justify-between gap-5 pl-[5px]">
                    <Heading as="h4" className="self-end !text-black-900">
                      How long does shipping take?
                    </Heading>
                    <Button
                      color="black_900"
                      size="md"
                      shape="square"
                      className="w-[24px] rotate-[180deg] self-start"
                    >
                      <Img src="images/ing_arrow_up_black_900.svg" />
                    </Button>
                  </div>
                  <Text as="p" className="leading-[25px] !text-gray-600">
                    Our standard shipping typically takes 3-5 business days
                    within the contiguous United States. International shipping
                    times may vary based on the destination country and customs
                    processing times. We also offer expedited shipping options
                    for customers who need their orders to arrive more quickly.
                  </Text>
                </div>
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[12px] border border-solid border-gray-100 bg-white-A700 pb-[25px] pl-7 pr-6 pt-[27px] hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <Heading as="h5" className="self-end !text-black-900">
                    Can I return or exchange items?
                  </Heading>
                  <Button
                    color="black_900"
                    size="md"
                    shape="square"
                    className="w-[24px] self-start"
                  >
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[12px] border border-solid border-gray-100 bg-white-A700 pb-[26px] pl-[27px] pr-6 pt-[27px] hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <Heading as="h6" className="self-end !text-black-900">
                    What sizes do you offer?
                  </Heading>
                  <Button
                    color="black_900"
                    size="md"
                    shape="square"
                    className="w-[24px] self-start"
                  >
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[12px] border border-solid border-gray-100 bg-white-A700 pb-[26px] pl-[27px] pr-6 pt-[27px] hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <Heading as="h6" className="self-end !text-black-900">
                    Are your products sustainable?
                  </Heading>
                  <Button
                    color="black_900"
                    size="md"
                    shape="square"
                    className="w-[24px] self-start"
                  >
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[12px] border border-solid border-gray-100 bg-white-A700 pb-[25px] pl-7 pr-6 pt-[27px] hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <Heading as="h6" className="self-end !text-black-900">
                    How can I contact customer support?
                  </Heading>
                  <Button
                    color="black_900"
                    size="md"
                    shape="square"
                    className="w-[24px] self-start"
                  >
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-[12px] border border-solid border-gray-100 bg-white-A700 pb-[25px] pl-[27px] pr-6 pt-[27px] hover:border hover:border-solid hover:border-blue_gray-900_01 hover:shadow-xs sm:p-5">
                  <Heading as="h6" className="self-end !text-black-900">
                    Do you offer international shipping?
                  </Heading>
                  <Button
                    color="black_900"
                    size="md"
                    shape="square"
                    className="w-[24px] self-start"
                  >
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* newsletter signup section */}
        <Footer className="self-stretch" />
      </div>
    </>
  );
}
