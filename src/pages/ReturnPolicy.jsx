//import React from "react";
import { Link } from "react-router-dom";

function ReturnPolicy() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-5/6 mx-auto font-poppins mb-6">
        <div className="flex flex-row space-x-1 text-base my-3 ml-2">
          <Link to="/" className="text-deepgray hover:bg-lightgray">
            Home
          </Link>
          <i className="bx bx-sm bx-chevron-right"></i>
          <Link className="text-primaryred">Return Policy</Link>
        </div>
        <div className="text-sm font-normal">
          <h3 className="text-xl py-2">Last updated 04/13/2024</h3>
          <p>
            Thank you for your purchase. We hope you are happy with your
            purchase. However, if you are not completely satisfied with your
            purchase for any reason, you may return it to us for a full refund,
            store credit, or and exchange. Please see below for more information
            on our return policy.
          </p>
          <h3 className="text-xl  py-1 mt-2">RETURNS</h3>
          <p>
            All returns must be postmarked within 7 days of the purchase date.
            All returned items must be in new and unused condition, with all
            original tags and labels attached.
          </p>
          <h3 className="text-xl py-1 mt-2">RETURN PROCESS</h3>
          <p>
            To return an item, please email customer service at
            info@marketmate.com to obtain a Return Merchandise Authorization
            (RMA) number. After receiving a RMA number, place the item securely
            in its original packaging and include your proof of purchase / the
            return form provided, and mail your return to the following address:
          </p>
          <p>MarketMate Inc Attn: Returns RMA 0321 Tech4dev Lagos Nigeria</p>
          <p>
            Return shipping charges will be paid or reimbursed by us. We
            strongly recommend that you use a trackable method to mail your
            return.
          </p>
          <h3 className="text-xl py-1 mt-2">REFUNDS</h3>
          <p>
            After receiving your return and inspecting the condition of your
            item, we will process your return or exchange. Please allow at least
            21 days from the receipt of your item to process your return or
            exchange. Refunds may take 1-2 billing cycles to appear on your
            credit card statement, depending on your credit card company. We
            will notify you by email when your return has been processed.
          </p>
          <h3 className="text-xl py-1 mt-2">EXCEPTIONS</h3>
          <p>The following items cannot be returned [or exchanged]:</p>
          <ul className="list-square flex flex-col space-y-1 my-1">
            <li>Perishable food items</li>
            <li>Custom made clothings</li>
            <li>Edible items</li>
          </ul>
          <p>
            For defective or damaged products, please contact us at the contact
            details below to arrange a refund or exchange.
          </p>
          <h3 className="py-1 mt-2">Please Note</h3>
          <ul className="list-square flex flex-col space-y-1 my-1">
            <li>
              A #5,000 restocking fee will be charged for all returns in excess
              of #20,000 .
            </li>
            <li>Sale items are FINAL SALE and cannot be returned.</li>
          </ul>
          <p className="py-1">QUESTIONS</p>
          <p>
            If you have any questions concerning our return policy, please
            contact us at:
          </p>
          <p>+2348199000010</p>
          <p>info@marketmate.com</p>
        </div>
      </div>
    </div>
  );
}

export default ReturnPolicy;
