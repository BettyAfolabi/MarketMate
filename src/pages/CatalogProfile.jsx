import Card from "../components/Card";

const CatalogProfile = () => {
  return (
    <div>
      <div className="w-[788px] shadow-lg h-[299px] p-4">
        <h3 className="font-poppins font-[500] text-[18px] mb-2">ABOUT US</h3>
        <p className="font-poppins text-[#6E7485] text-justify text-[14px] mb-[10px]">
          Welcome to Garments by Dee – where threads meet dreams. We are a
          passionate team dedicated to bringing your sartorial visions to life.
          Specializing in custom sewing services, we craft each piece with
          precision and care, ensuring every stitch reflects your personal
          style.
        </p>

        <p className="font-poppins text-[#6E7485] text-justify text-[14px] mb-[10px]">
          We mix old-school sewing with new styles to make clothes that fit just
          right. We care about every little detail and use the best stuff to
          make clothes that last.
        </p>

        <p className="font-poppins text-[#6E7485] text-justify text-[14px]">
          From timeless classics to modern silhouettes, our creations are not
          just clothes; they’re a celebration of individuality. Join us in
          weaving the fabric of your story
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        <Card
          imageSrc="../tv.png"
          productName="Knitted Wears"
          // prevPrice="₦10,000"
          // tag="MarketMate"
          review="⭐ 4.6"
          productPrice="₦10,000"
          showButton={false}
        />
        <Card
          imageSrc="../ipod.png"
          productName="Wireless Bluetooth Ear Pods - White"
          productPrice="₦16,598"
          tag="Ritemall"
          review="⭐⭐⭐⭐☆"
          showButton={false}
        />
        <Card
          imageSrc="../suitcases.png"
          productName="XL Large Suitcase Expandable Lightweight Luggage Trolley"
          productPrice="₦56,000"
          prevPrice="₦60,000"
          tag="MarketMate"
          review="⭐⭐⭐⭐☆"
          showButton={false}
        />
        <Card
          imageSrc="../shirt.png"
          productName="Bajieli Vintage Retro Men’s Fashion Floral Print Slim Fit Shirt"
          productPrice="₦16,598"
          tag="Ritemall"
          review="⭐⭐⭐⭐☆"
          showButton={false}
        />
      </div>
    </div>
  );
};

export default CatalogProfile;
