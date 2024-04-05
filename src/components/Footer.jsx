function Footer() {
  return (
    <>
      <div className="w-screen bg-terblue bottom-0 ">
        <div className="hidden md:block  w-4/5 items-center mx-auto font-poppins text-white pt-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl">Your all in one shopping site</h3>
              <p className="text-sm">The quick fox jumps over the lazy dog</p>
            </div>
            <button className="bg-primaryred text-sm font-bold py-2 px-6">
              Contact Us
            </button>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 py-6">
            <ul>
              <li className="text-base pb-1.2">Company Info</li>
              <li className="pb-1 text-xs">
                <a href="#">About Us</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">Carrier</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">We are hiring</a>
              </li>
              <li className=" text-xs">
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul>
              <li className="text-base pb-1.2">Legal</li>
              <li className="pb-1 text-xs">
                <a href="#">About Us</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">Carrier</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">We are hiring</a>
              </li>
              <li className=" text-xs">
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul>
              <li className="text-base pb-1.2">Features</li>
              <li className="pb-1 text-xs">
                <a href="#">Business Marketing</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">User Analytic</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">Live Chat</a>
              </li>
              <li className=" text-xs">
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
            <ul>
              <li className="text-base pb-1.2">Resources</li>
              <li className="pb-1 text-xs">
                <a href="#">IOS & Android</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">Watch a Demo</a>
              </li>
              <li className="pb-1 text-xs">
                <a href="#">Customers</a>
              </li>
              <li className=" text-xs">
                <a href="#">API</a>
              </li>
            </ul>
            <ul>
              <li className="text-base pb-1.2">Get In Touch</li>
              <li className="flex pb-1 text-xs">
                <span className="material-symbols-outlined">call</span>
                <p>(234)800 555-0103</p>
              </li>
              <li className="pb-1 text-xs">
                <a href="" className="flex">
                  <span className="material-symbols-outlined">location_on</span>
                  <p>314 Lekki Phase 1. Lagos, Nigeria</p>
                </a>
              </li>
              <li>
                <a href="#" className="flex text-xs">
                  <span className="material-symbols-outlined">mail</span>
                  <p>debra.holt@example.com</p>
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex justify-between flex-col md:flex-row">
            <p className="text-sm">
              Made With Love By Tech Amazons All Right Reserved
            </p>
            <div className="flex space-x-2 pt-3 md:pt-0">
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-twitter"></i>
            </div>
          </div>
        </div>
        <div className="md:hidden bg-white w-screen items-center py-3 flex flex-col justify-center mt-5">
          <p className="font-poppins text-secblue text-base py-2 text-center w-4/5">
            For further support, you may visit the Help Center or contact our
            customer service team
          </p>
          <div className="flex mb-2">
            <img src="Logo.png" alt="Market mate Logo" />
            <h1 className="font-lobstertwo text-primaryred text-3xl md:text-4xl">
              MarketMate
            </h1>
          </div>
          <p className="font-bold text-base text-secblue">
            All Right Reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
