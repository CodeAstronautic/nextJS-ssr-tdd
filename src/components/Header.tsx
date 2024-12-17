import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">Blog Explorer</h1>
      <p className="text-gray-200 mt-2">Discover insightful posts on various topics!</p>
    </header>
  );
};

export default Header;
