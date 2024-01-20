import React from "react";
import ChapterCard from "./ChapterCard";

// Rendering all chapters.
const ChapterList = ({ chapterList }) => {
  return (
    <div className="flex-1 my-[5rem]">
      <div className="flex justify-center mx-auto max-w-[70vw] flex-wrap gap-8">
        {chapterList &&
          chapterList.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} />
          ))}
      </div>
    </div>
  );
};

export default ChapterList;
