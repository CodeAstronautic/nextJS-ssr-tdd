"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  query: string;
}

const SearchBar = ({ query }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchQuery(value);

    router.push(`/?page=1&query=${value}`);
  };

  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search blog posts..."
        className="p-4 border border-gray-300 rounded-lg w-full max-w-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
