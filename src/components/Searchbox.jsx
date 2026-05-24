"use client";
import React, { useState } from "react";
import { NormalButton } from "./Button";
import { useRouter, useSearchParams } from "next/navigation";

const Searchbox = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("title", query);
    } else {
      params.delete("title");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Search ideas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-gray-100 border-2 border-black p-2 text-black font-medium shadow-[4px_4px_0px_#000] focus:outline-none"
        />

        <NormalButton type="submit">Search</NormalButton>
      </form>
    </div>
  );
};

export default Searchbox;
