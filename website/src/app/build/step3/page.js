"use client"

import { useState } from "react"
import Link from "next/link"

const Step2 = () => {
    const [selected, setSelected] = useState(null)

    const options = [
        "Alone", "With SO", "Friends", "Family"
    ]

    console.log(selected);

    return (
        <div className="mt-20">
            <h2 className="text-4xl text-black text-center w-screen text-white font-bold">Anything Else?</h2>
            <div className="flex gap-4 w-1/2 mx-auto mt-10 justify-around">
                <textarea />
            </div>
            <div className="flex flex-row-reverse w-1/2 mx-auto mt-10">
                <Link href="/build/step2">
                    <button
                        className="border border-white w-40 h-8 rounded-lg text-white cursor-pointer hover:bg-[#f4f4f420] transition-all opacity-100"
                        style={{ transition: "opacity 0.5s ease-in", opacity: selected ? 1 : 0 }}
                    >
                        Next -&gt;
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Step2