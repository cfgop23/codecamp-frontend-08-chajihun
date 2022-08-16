import React from "react";
import LazyLoad from "react-lazy-load";

const IMG = [
  { src: "/images/coffee-banner1.jpeg" },
  { src: "/images/coffee-banner2.jpeg" },
  { src: "/images/coffee-banner3.jpeg" },
  { src: "/images/coffee-banner4.jpeg" },
  { src: "/images/banner3.jpeg" },
  { src: "/images/banner2.jpeg" },
  { src: "/images/banner1.jpeg" },
  { src: "/images/image1.jpg" },
  { src: "/images/coffee1.jpeg" },
  { src: "/images/coffee2.jpeg" },
];

export default function LazyLoadPage() {
  return (
    <div>
      {IMG.map((el) => (
        <>
          <LazyLoad height={500} offsetVertical={300}>
            <img src={el.src} width={500} height={500} />
          </LazyLoad>
        </>
      ))}
    </div>
  );
}
