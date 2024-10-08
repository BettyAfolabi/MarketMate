//import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div>
      <div className="w-5/6 mx-auto font-poppins">
        <div className="flex flex-row space-x-1 text-base my-3 ml-3">
          <Link to="/" className="text-deepgray hover:bg-lightgray">
            Home
          </Link>
          <i className="bx bx-chevron-right"></i>
          <Link className="text-primaryred">Privacy Policy</Link>
        </div>
        <h1 className="font-bold text-2xl py-2">TERMS AND CONDITIONS</h1>
        <h1 className="font-bold text-xl">Last updated 04/13/2024</h1>
        <h2 className="font-bold text-2xl py-2">
          AGREEMENT TO OUR LEGAL TERMS
        </h2>
        <p className="text-lg font-medium py-2">{`
          We are MarketMate Inc, ("Company," “we,” “us,” or “our”), a company
          registered operating in Nigeria. We operate the website
          https://market-mate.netlify.app (the “Site”) the mobile application
          MarketMate (the “App”)], as well as any other related products and
          services that refer or link to these legal terms (the “Legal Terms”)
          (collectively, the “Services”).`}
        </p>
        <p className="text-lg font-medium py-2">
          At MarketMate, we provide platform that connects buyers, sellers,
          service providers, customers, logistics companies & industries. The
          application aims to tailor transactions, facilitate easy deliveries,
          provide industry news updates, and allow users to share user-generated
          content
        </p>

        <p className="text-lg font-bold py-2">
          You can contact us by phone at +2348000900100, email at
          info@marketmate.com, or by mail to Tech4dev, Lagos state, Nigeria.
        </p>
        <p className="text-lg font-medium py-2">
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (“you”), and
          MarketMate, and concerning your access to and use of the Services. You
          agree that by accessing the Services, you have read, understood, and
          agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE
          WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM
          USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
