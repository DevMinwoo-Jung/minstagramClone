import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 7
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5
  }
};
import React from 'react'

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel containerClass='w-full flex gap-1' responsive={responsive}>
      {children}
    </Carousel>
  );
}
