import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";

const images = [
  { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80", alt: "image 1" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80", alt: "image 2" },
  { src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80", alt: "image 3" },
];

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
}

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">The Beauty of Nature</Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={images[1].src} alt={images[1].alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12">
            <Typography variant="h1" color="white" className="mb-4 text-3xl">The Beauty of Nature</Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">Explore</Button>
              <Button size="lg" color="white" variant="text">Gallery</Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
}

export function CarouselCustomArrows() {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton variant="text" color="white" size="lg" onClick={handlePrev} className="!absolute top-2/4 left-4 -translate-y-2/4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton variant="text" color="white" size="lg" onClick={handleNext} className="!absolute top-2/4 !right-4 -translate-y-2/4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </IconButton>
      )}
    >
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
}

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
}
