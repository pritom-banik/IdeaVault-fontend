'use client' // Error boundaries must be Client Components

import { NormalButton } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, unstable_retry }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <Image
                src="/error.png"
                alt="Error"
                width={500}
                height={500}
                className="mb-6 drop-shadow-md"
            />
            <h2 className="text-4xl font-bold text-black">Something went wrong!</h2>
            <NormalButton>
                Try again
            </NormalButton>


            <Link
                href="/"
                className="mt-2 inline-block bg-[#ff66a3] text-black font-bold px-6 py-3 shadow-md hover:bg-sky-400 border-2 border-black transition"
            >
                Return Home
            </Link>

        </div>
    )
}