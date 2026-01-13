import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { ReviewItem } from "@/app/dashboard/types";
import ReviewCard from "../ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropType = {
  reviews: ReviewItem[];
};

const Carousel = ({ reviews }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps", // ogranicza przesuwanie do pełnych slajdów
    slidesToScroll: 1, // przesuwa po jednym slajdzie
    loop: true,
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <div>
      <div className="embla" ref={emblaRef} style={{ overflow: "hidden" }}>
        <div
          className="embla__container"
          style={{ display: "flex", gap: "10px" }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="embla__slide  shrink-0 basis-full lg:basis-1/2 xl:basis-1/3"
            >
              <ReviewCard
                id={r?.id?? "null"}
                author={r?.author ?? " "}
                text={r?.text ?? ""}
                rating={r?.rating ?? ""} 
                inserted_at={r?.inserted_at ?? ""}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-gray-600 flex justify-start items-center ">
        <button onClick={() => emblaApi?.scrollPrev()}>
          <ChevronLeft className={"text-gray-400 h-24"} size={36}/>
        </button>
        <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              isSelected = {index === selectedIndex }
              className={`
                embla__dot
                ${ index === selectedIndex ? " embla__dot--selected" : ""}
                `
}
            />
          ))}
        </div>
        <button onClick={() => emblaApi?.scrollNext()}>
          <ChevronRight className={"text-gray-400"} size={36}/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
