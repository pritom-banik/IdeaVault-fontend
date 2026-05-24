
import AllIdeas from '@/components/AllIdeas';
// import { NormalButton } from '@/components/Button';
// import CategorySearch from '@/components/CategorySearch';
import Loadingcard from '@/components/Loadingcard';
import React, { Suspense,  } from 'react';

 const Ideas = () => {
//     const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch?.(query);
//   };

    return (
        <div className='max-w-6xl mx-auto flex flex-col justify-around items-center'>

            <div className="text-center max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white">
            The Next Big Startup Might Be Here
          </h1>
        </div>

            <div className="w-full h-px bg-black dark:bg-gray-300 my-4"></div>


{/* <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 w-full max-w-xl"
    >
      <input
        type="text"
        placeholder="Search ideas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border-4 border-black px-4 py-3 text-black font-medium shadow-[6px_6px_0px_#000] focus:outline-none"
      />

      <NormalButton  type="submit">Search</NormalButton>
    </form>

<CategorySearch></CategorySearch> */}

            
      <Suspense fallback={<Loadingcard/>}>
            <AllIdeas></AllIdeas>
            </Suspense>
        </div>
    );
};

export default Ideas;