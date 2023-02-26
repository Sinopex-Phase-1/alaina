import React, { useState, useEffect } from "react";

export default function Title({ children }) {
  const text = children;
  const [content, setcontent] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setcontent(text.slice(0, content.length + 1));
    }, 80);
    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div
      className={
        "mx-auto max-w-5xl text-4xl lg:text-[68px] leading-normal font-normal uppercase text-white relative transition-all duration-400 ease-out mt-8 drop-shadow shadow-gray-900 title-shadow "
      }
    >
      {children}
    </div>
  );
}
