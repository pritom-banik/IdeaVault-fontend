const Loadingcard = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 justify-items-center">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
              w-[320px]
              bg-[#fff6e9]
              border-[3px]
              border-black
              shadow-[6px_6px_0px_#000]
              p-5
              animate-pulse
            "
          >
            {/* image */}
            <div className="h-40 w-full bg-gray-300 border-2 border-black"></div>

            {/* category */}
            <div className="mt-4 h-6 w-24 bg-[#ff66a3] border-2 border-black"></div>

            {/* title */}
            <div className="mt-4 h-7 w-3/4 bg-gray-400 border-2 border-black"></div>

            {/* description */}
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full bg-gray-300 border border-black"></div>
              <div className="h-4 w-5/6 bg-gray-300 border border-black"></div>
              <div className="h-4 w-4/6 bg-gray-300 border border-black"></div>
            </div>

            {/* footer */}
            <div className="mt-6 flex justify-between items-center">
              <div className="h-8 w-20 bg-[#66d9ff] border-2 border-black"></div>
              <div className="h-8 w-8 rounded-full bg-[#9bff66] border-2 border-black"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loadingcard;