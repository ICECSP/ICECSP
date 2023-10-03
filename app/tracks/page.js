"use client";
import { tracks } from "@/components/tracksPage/data";
import { dates } from "@/components/importantDatesPage/data";
import { useState } from "react";

export default function Tracks() {
  const trackOptions = [
    {
      name: "MICROELECTRONIC CIRCUITS AND SYSTEMS",
      link: "tracks/microelectronic",
    },
    {
      name: "COMMUNICATION SYSTEMS AND NETWORKS",
      link: "tracks/communication",
    },
    { name: "SIGNAL PROCESSING AND APPLICATIONS", link: "tracks/signal" },
    {
      name: "VLSI TECHNOLOGY AND APPLICATIONS",
      link: "tracks/vlsi",
    },
  ];
  return (
    <div className="container mx-auto">
      <AllTracks />
      <TimeLine />
    </div>
  );
}

const AllTracks = () => {
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

const TimeLine = () => {
  return (
    <>
      <h3 className="text-3xl text-primary90 font-bold text-center mb-16 tracking-wide">
        TimeLine
      </h3>
      <ul className="items-baseline sm:flex">
        {dates.map((elem, idx) => {
          return (
            <li key={idx} className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  {elem.text}
                </h3>
                <time className="block mb-2 text-sm font-bold leading-none text-red-400 dark:text-red-500">
                  {elem.date}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
