import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">

            <Image
                src="/notfound.png"
                alt="Not Found"
                width={320}
                height={320}
                className="mb-6 drop-shadow-md"
            />

            <h2 className="text-4xl font-bold text-[#ff66a3]">
                404 - Not Found
            </h2>

            {/* Subtitle */}
            <p className=" mt-3 max-w-md font-black text-black">
                The resource you are looking for doesn’t exist or has been moved.
            </p>


            <Link
                            href="/"
                            className="mt-2 inline-block bg-[#ff66a3] text-black font-black uppercase px-6 py-3 hover:bg-sky-400 border-4 border-black shadow-[4px_4px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-700 ease-out select-none"
                        >
                            Return Home
                        </Link>

        </div>
    );
}