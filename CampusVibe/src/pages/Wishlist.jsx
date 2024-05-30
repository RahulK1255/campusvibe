import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WishlistProductcard from "../components/WishlistProductcard";

const data = [
  {
    image: "images/img_rectangle_136.png",
    trendytshirt: "Athleisure Performance Tee",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
  {
    image: "images/img_rectangle_136_461x369.png",
    trendytshirt: "Versatile Cotton Tee",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
  {
    image: "images/img_rectangle_136_1.png",
    trendytshirt: "Athletic Performance Tee",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
  {
    image: "images/img_rectangle_136_2.png",
    trendytshirt: "Contemporary V-Neck Top",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
  {
    image: "images/img_rectangle_136_3.png",
    trendytshirt: "Trendy Graphic Tee",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
  {
    image: "images/img_rectangle_136_4.png",
    trendytshirt: "Relaxed Fit T-Shirt",
    rscounter1: "Rs. 750",
    rscounter2: "Rs. 1000",
  },
];

export default function WishlistPage() {
  return (
    <>
      <Helmet>
        <title>User Wishlist - Save Your Favorite Fashion Items</title>
        <meta
          name="description"
          content="Keep track of your desired fashion pieces with our User Wishlist. Sign up to enjoy exclusive discounts and stay updated on the latest trends in athleisure and casual wear."
        />
      </Helmet>
      {/* wishlist section */}
      <div className="flex w-full flex-col gap-[89px] bg-white-A700 md:gap-[66px] sm:gap-11">
        {/* header section */}
        <div className="flex flex-col gap-6">
          {/* promotion banner section */}
          <Header />
          {/* breadcrumb navigation section */}
          <div className="flex flex-col items-center gap-12">
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
                  className="h-[24px] w-[24px]"
                />
                <Heading as="hl" className="capitalize tracking-[-0.20px]">
                  Wishlist
                </Heading>
              </div>
            </div>
            {/* product grid section */}
            <div className="container-xs grid grid-cols-3 justify-center gap-12 md:grid-cols-2 md:p-5 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <WishlistProductcard
                    {...d}
                    key={"productGrid" + index}
                    className="gap-[15px]"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>

        {/* newsletter signup section */}
        <Footer />
      </div>
    </>
  );
}
