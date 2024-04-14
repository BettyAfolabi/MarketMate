import React from "react";

function Card() {
  return (
    <div className="mx-auto">
      <img />
      <icon></icon>
      <h2>Product Name</h2>
      <h3>Product Description</h3>
      <p>tag</p>
      <div className="flex gap-2">
        <p>review</p>
        <p>review count</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
