//import React from "react";
import { Link } from "react-router-dom";

function CookiePolicy() {
  return (
    <div className="w-full overflow-x-hidden">

      <div className="w-5/6 mx-auto font-poppins mb-6">
        <div className="flex flex-row space-x-1 text-sm my-4">
          <Link to="/" className="text-deepgray hover:bg-lightgray">
            Home
          </Link>
          <i className="bx bx-sm bx-chevron-right"></i>
          <Link className="text-primaryred">Cookie Policy</Link>
        </div>
        <div className="text-sm font-normal">
          <h3 className="text-xl py-2">Last updated 04/15/2024</h3>
          <p>{`
            This Cookie Policy explains how MarketMate Inc (“Company,” “we,”
            “us,” or “our”) uses cookies and similar technologies to recognize
            you when you visit our websites at https://market-mate.netlify.app
            ("Websites"). It explains what these technologies are and why we use
            them, as well as your rights to control our use of them.`}
          </p>
          <p>
            In some cases we may use cookies to collect personal information, or
            that becomes personal information if we combine it with other
            information.
          </p>

          <h3 className="py-1 mt-2">What are cookies?</h3>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>
          <p>{`
            Cookies set by the website owner (in this case, MarketMate) are
            called "first-party cookies." Cookies set by parties other than the
            website owner are called "third-party cookies." Third-party cookies
            enable third-party features or functionality to be provided on or
            through the website (e.g., advertising, interactive content, and
            analytics). The parties that set these third-party cookies can
            recognize your computer both when it visits the website in question
            and also when it visits certain other websites.`}
          </p>
          <h3 className="py-1 mt-2">What do we use cookies?</h3>
          <p>{`
            We use first- and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Websites
            to operate, and we refer to these as "essential" or "strictly
            necessary" cookies. Other cookies also enable us to track and target
            the interests of our users to enhance the experience on our Online
            Properties. Third parties serve cookies through our Websites for
            advertising, analytics, and other purposes. This is described in
            more detail below.`}
          </p>
          <h3 className="py-1 mt-2">How can I control cookies?</h3>
          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services
          </p>
          <p>
            The Cookie Consent Manager can be found in the notification banner
            and on our website. If you choose to reject cookies, you may still
            use our website though your access to some functionality and areas
            of our website may be restricted. You may also set or amend your web
            browser controls to accept or refuse cookies. The specific types of
            first- and third-party cookies served through our Websites and the
            purposes they perform are described in the table below (please note
            that the specific cookies served may vary depending on the specific
            Online Properties you visit):
          </p>
          <h3 className="py-1 mt-2">
            How can I control cookies on my browser?
          </h3>
          <p>{`
            As the means by which you can refuse cookies through your web
            browser controls vary from browser to browser, you should visit your
            browser's help menu for more information. The following is
            information about how to manage cookies on the most popular
            browsers:`}
          </p>
          <ul className="list-square flex flex-col space-y-1 my-1 ml-2">
            <li>Chrome</li>
            <li>Internet Explorer</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
            <li>Opera</li>
          </ul>
          <p className="py-1 mt-2">
            In addition, most advertising networks offer you a way to opt out of
            targeted advertising. If you would like to find out more
            information, please visit:{" "}
          </p>
          <ul className="list-square flex flex-col space-y-1 my-1 ml-2">
            <li>Digital Advertising Alliance </li>
            <li>Digital Advertising Alliance of Canada</li>
            <li>European Interactive Digital Advertising Alliance</li>
          </ul>
          <h3 className="py-1 mt-2">
            What about other tracking technologies, like web beacons?
          </h3>
          <p>{`
            Cookies are not the only way to recognize or track visitors to a
            website. We may use other, similar technologies from time to time,
            like web beacons (sometimes called "tracking pixels" or "clear
            gifs"). These are tiny graphics files that contain a unique
            identifier that enables us to recognize when someone has visited our
            Websites or opened an email including them. This allows us, for
            example, to monitor the traffic patterns of users from one page
            within a website to another, to deliver or communicate with cookies,
            to understand whether you have come to the website from an online
            advertisement displayed on a third-party website, to improve site
            performance, and to measure the success of email marketing
            campaigns. In many instances, these technologies are reliant on
            cookies to function properly, and so declining cookies will impair
            their functioning.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
