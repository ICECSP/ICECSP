"use client";
import { useState } from "react";
import { tracks } from "./data";
export default function AllTracks() {
    return (
        <div className="my-12">
            <h3 className="text-3xl text-primary90 font-bold text-center mb-8 tracking-wide">
                Tracks
            </h3>
            {tracks.map((elem, idx) => {
                return <Track key={idx} track={elem} />;
            })}
        </div>
    );
};

const Track = ({ track }) => {
    const [open, setopen] = useState(false);
    return (
        <div>
            <h2>
                <button
                    onClick={() => setopen(!open)}
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-b-0 border-gray-500 rounded-t-xl focus:ring-4 focus:ring-primary05 hover:bg-primary05 transition-[colors, box-shadow]">
                    <span
                        className="flex items-center text-primary90 text-lg font-bold">
                        {track.heading}
                    </span>
                    <svg
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div className={`${open ? "" : "hidden"}`}>
                <ul className="p-5 border border-b-0 border-gray-200">
                    {track.subtracks.map((elem, idx) => {
                        return (
                            <li
                                key={idx}
                                className="mb-2 text-gray-500 font-semibold">
                                {elem}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
