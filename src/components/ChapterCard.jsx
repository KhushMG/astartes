import React from "react";
import Image from "next/image";

// Card to render individual chapters.
const ChapterCard = ({ chapter }) => {
  return (
    <div className="border-[2px] border-white p-8 w-[15rem] max-w-[20rem] rounded-md bg-white/30">
      <div className="border-2 border-white p-16 rounded-md relative justify-center">
        {chapter.image && (
          <Image
            src={chapter.image}
            alt="image"
            className="object-fill w-full h-full rounded-sm"
            fill={true}
          />
        )}
      </div>

      <div className="flex justify-center mt-4 w-full">
        <div className="font-semibold text-center text-xl">
          {chapter.chapter_name}
        </div>
      </div>
      <div className="flex font-medium text-center justify-center mt-2 w-full">
        {"Primarch: "} <br /> {chapter.chapter_primarch}
      </div>
      <div className="flex justify-center text-center mt-2 w-full">
        {"Homeworld: "}
        <br />
        {chapter.homeworld}
      </div>
      <div
        className={`font-semibold flex items-center justify-center mt-2 w-full ${
          chapter.allegiance === "Traitor" ? "text-red-500" : "text-blue-500"
        }`}
      >
        {chapter.allegiance}
      </div>
    </div>
  );
};

export default ChapterCard;
