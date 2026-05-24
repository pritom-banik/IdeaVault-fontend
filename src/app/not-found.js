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

            <h2 className="text-4xl font-bold text-[#2B788B]">
                404 - Not Found
            </h2>

            {/* Subtitle */}
            <p className=" mt-3 max-w-md">
                The resource you are looking for doesn’t exist or has been moved.
            </p>


            <Link
                href="/"
                className="mt-6 inline-block bg-[#2B788B] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#24697a] transition"
            >
                Return Home
            </Link>

        </div>
    );
}