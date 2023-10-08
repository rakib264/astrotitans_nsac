import React from "react";

const BackgroundImage = ({ imageUrl, children }) => {
  return (
    <div
      className="bg-cover bg-center relative w-full h-[1100px]"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
