import React from "react";

const CategorySearch = ({
  allCategories,
  setSearchCategories,
  searchcategories,
}) => {

  const handleCategoryClick = (categoryName) => {

    // already selected → remove
    if (searchcategories.includes(categoryName)) {

      const updated = searchcategories.filter(
        (item) => item !== categoryName
      );

      setSearchCategories(updated);

    } else {

      // not selected → add
      setSearchCategories([
        ...searchcategories,
        categoryName,
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">

      <div className="max-w-30 bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] -rotate-2">
        Categories
      </div>

      <div className="flex flex-wrap gap-2 justify-center">

        {allCategories.map((category, i) => {

          const isSelected = searchcategories.includes(category._id);

          return (
            <div
              key={i}
              onClick={() => handleCategoryClick(category._id)}
              className={`
                p-2
                border-[3px]
                border-black
                shadow-[4px_4px_0_#000]
                text-black
                font-extrabold
                transition-all
                duration-300
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-[2px_2px_0_#000]
                active:translate-x-[4px]
                active:translate-y-[4px]
                active:shadow-none
                cursor-pointer
                ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-[#ff66a3]"
                }
              `}
            >
              {category._id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySearch;