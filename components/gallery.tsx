"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/gallery/kk.jpeg" },
  { src: "/gallery/cc.jpg" },
  { src: "/gallery/pp.jpeg" },
  { src: "/gallery/t.jpg" },
  { src: "/gallery/oo.jpeg" },
  { src: "/gallery/ll.jpeg" },
  { src: "/gallery/i.jpeg" },
  { src: "/gallery/j.jpeg" },
  { src: "/gallery/qq.jpeg" },
  { src: "/gallery/ff.jpg" },
  { src: "/gallery/aa.jpg" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="border-b border-border bg-background py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Buttons Removed from here */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold uppercase text-foreground sm:text-4xl">
            Project <span className="text-accent">Gallery</span>
          </h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Swipe to see our latest installations.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative group">
          {/* LEFT ARROW - Absolute Positioned */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border bg-background/80 shadow-lg backdrop-blur-sm hover:bg-background"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* RIGHT ARROW - Absolute Positioned */}
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-border bg-background/80 shadow-lg backdrop-blur-sm hover:bg-background"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[400px] min-w-[300px] md:min-w-[400px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-muted snap-center group/card"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 flex flex-col justify-end p-6">
                  <p className="text-white font-semibold text-lg">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm mt-1">
                    <Maximize2 className="h-3 w-3" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX (Fullscreen View) */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lightbox Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 hidden md:block"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative h-full w-full max-h-[85vh] max-w-5xl">
              <Image
                src={galleryImages[selectedImage].src}
                alt="lightbox"
                fill
                className="object-contain"
              />
              <p className="absolute bottom-[-40px] left-0 right-0 text-center text-white/90">
                {galleryImages[selectedImage].alt} ({selectedImage + 1} /{" "}
                {galleryImages.length})
              </p>
            </div>

            {/* Lightbox Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 hidden md:block"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
