import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WishlistPage from "./pages/Wishlist";
import CheckoutPage from "./pages/Checkout";
import MyAccountPersonalInformationPage from "./pages/MyAccountPersonalInformation";
import MyAccountMyordersPage from "./pages/MyAccountMyorders";
import MyAccountFAQsPage from "./pages/MyAccountFAQs";
import SIGNUPPage from "./pages/SIGNUP";
import HomePage from "./pages/Homepage";
import ProductlistPage from "./pages/Productlist";
import ProductDetailsPage from "./pages/ProductDetails";
import ShoppingCartPage from "./pages/ShoppingCart";
import AddressOnePage from "./pages/AddressOne";
import AddressThreePage from "./pages/AddressThree";
import AddressTwoPage from "./pages/AddressTwo";
import SIGNINPage from "./pages/SIGNIN";



const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "sss", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <SIGNINPage />,
    },
    {
      path: "wishlist",
      element: <WishlistPage />,
    },
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
    {
      path: "myaccountpersonalinformation",
      element: <MyAccountPersonalInformationPage />,
    },
    {
      path: "myaccountmyorders",
      element: <MyAccountMyordersPage />,
    },
    {
      path: "myaccountfaqs",
      element: <MyAccountFAQsPage />,
    },
    {
      path: "signup",
      element: <SIGNUPPage />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "productlist",
      element: <ProductlistPage />,
    },
    {
      path: "productdetails",
      element: <ProductDetailsPage />,
    },
    {
      path: "shoppingcart",
      element: <ShoppingCartPage />,
    },
    {
      path: "addressone",
      element: <AddressOnePage />,
    },
    {
      path: "addresstwo",
      element: <AddressTwoPage />,
    },
    {
      path: "addressthree",
      element: <AddressThreePage />,
    },
  ]);
  return element;
};

export default ProjectRoutes;
