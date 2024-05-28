import React from "react";
export const SearchSVG = ({
  fillColor = "var(--rococo)",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      className={className}
      {...props}
    >
      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 18.511003 23 23 18.511003 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5688774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5688774 21 5 17.430123 5 13 C 5 8.5688774 8.5688774 5 13 5 z" />
    </svg>
  );
};
