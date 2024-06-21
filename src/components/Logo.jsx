import React from "react";

function Logo({ width = "70px" }) {
  return (
    <div width={width}>
      <img width="50px" src="logo.jpeg" alt="logo" />
      {/* <div>
        <span className="text-xl font-medium text-gray-100 transition-all hover:text-white hover:font-serif">
          Blogify
        </span>
      </div> */}
    </div>
  );
}

export default Logo;
