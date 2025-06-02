
'use client'
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function DragCarousel({
  children,
  options = { dragFree: true, containScroll: "trimSnaps" },
  className = "",
  slideClassName = "",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Centrar en el slide del medio al iniciar
    const childrenCount = React.Children.count(children);
    const middleIndex = Math.floor(childrenCount / 2);
    emblaApi.scrollTo(middleIndex);

    emblaApi.on('scroll', onScroll);
    onScroll();

    return () => {
      emblaApi.off('scroll', onScroll);
    };
    // Incluimos childrenCount y middleIndex en dependencias para que al cambiar los slides también centre
  }, [emblaApi, onScroll, children]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <div
              className={`flex-[0_0_auto] min-w-0 ${slideClassName}`}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Barra de progreso - opcional */}
    </div>
  );
}

export default DragCarousel;