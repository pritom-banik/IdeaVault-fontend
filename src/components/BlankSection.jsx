import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NormalButton } from "./Button";
import { FaArrowRight } from "react-icons/fa";

const BlankSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-10">
      <Image
        src="/blank.png"
        alt="Error"
        width={200}
        height={200}
        className="mb-6 drop-shadow-md"
      />
      <div className="text-xl md:text-4xl font-black text-black dark:text-white my-2">
        0 Items. 100% Potential
      </div>
      <Link href={`/ideas`}>
        <NormalButton>Explore to unclock potentials</NormalButton>
      </Link>
      <Link
        href="/shareideas"
        className="inline-flex items-center justify-center mt-10 hover:underline text-xl md:text-2xl font-black text-black"
      >
        <span>Share your ideas with the community</span>
        <FaArrowRight className="shrink-0" />
      </Link>
    </div>
  );
};

export default BlankSection;
