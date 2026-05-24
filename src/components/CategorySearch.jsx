"use client";

import { useEffect, useState } from "react";

export default function CategorySearch({ onChange }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.API_ENDPOINT}/ideas/categories`
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (cat) => {
    let updated;

    if (selected.includes(cat)) {
      updated = selected.filter((c) => c !== cat);
    } else {
      updated = [...selected, cat];
    }

    setSelected(updated);
    onChange?.(updated);
  };

  const resetFilters = () => {
    setSelected([]);
    onChange?.([]);
  };

  if (loading) {
    return <div className="text-sm font-bold">Loading categories...</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => {
          const value = cat._id; // ✅ FIX HERE
          const isActive = selected.includes(value);

          return (
            <button
              key={value}
              onClick={() => toggleCategory(value)}
              className={`border-4 border-black px-4 py-2 font-bold transition-all shadow-[4px_4px_0px_#000]
                ${
                  isActive
                    ? "bg-[#ff66a3] text-black"
                    : "bg-white text-black"
                }
                hover:translate-x-1 hover:translate-y-1 hover:shadow-none
              `}
            >
              {value}
            </button>
          );
        })}
      </div>

      {/* Reset */}
      <button
        onClick={resetFilters}
        className="w-fit bg-black text-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_#ff66a3] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        Reset Filters
      </button>
    </div>
  );
}