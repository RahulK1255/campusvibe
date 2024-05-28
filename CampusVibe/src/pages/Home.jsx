import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>...</p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/wishlist"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Wishlist
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/checkout"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Checkout
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/myaccountpersonalinformation"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            MyAccountPersonalInformation
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/myaccountmyorders"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            MyAccountMyorders
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/myaccountfaqs"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            MyAccount FAQs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signin"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SIGNIN
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SIGNUP
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homepage"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Homepage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/productlist"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Productlist
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/productdetails"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            ProductDetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/shoppingcart"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Shopping Cart
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/addressone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Addressone
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/addresstwo"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Address Two
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/addressthree"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Address Three
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
