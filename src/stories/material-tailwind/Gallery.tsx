import React from "react";
import { Carousel, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
  "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
  "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  "https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
];

export function DefaultGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {GALLERY_IMAGES.map((src, index) => (
        <div key={index}>
          <img className="h-40 w-full max-w-full rounded-lg object-cover object-center" src={src} alt="gallery-photo" />
        </div>
      ))}
    </div>
  );
}

export function MasonryGridGallery() {
  const cols = [
    [
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://docs.material-tailwind.com/img/team-3.jpg",
    ],
    [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      "https://docs.material-tailwind.com/img/team-3.jpg",
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80",
    ],
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cols.map((col, ci) => (
        <div key={ci} className="grid gap-4">
          {col.map((src, ii) => (
            <div key={ii}>
              <img className="h-auto max-w-full rounded-lg object-cover object-center" src={src} alt="gallery-photo" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const FEATURED_IMAGES = [
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
];

export function FeaturedImageGallery() {
  const [active, setActive] = React.useState(FEATURED_IMAGES[0]);

  return (
    <div className="grid gap-4">
      <div>
        <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]" src={active} alt="" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {FEATURED_IMAGES.map((src, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(src)}
              src={src}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const QUAD_IMAGES = [
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
];

export function QuadGallery() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {QUAD_IMAGES.map((src, index) => (
        <div key={index}>
          <img className="h-40 max-w-full rounded-lg object-cover object-center md:h-60" src={src} alt="" />
        </div>
      ))}
    </div>
  );
}

export function GalleryWithCarousel() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="image 1" className="h-full w-full object-cover object-center" />
      <img src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="image 2" className="h-full w-full object-cover object-center" />
      <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" alt="image 3" className="h-full w-full object-cover object-center" />
    </Carousel>
  );
}

const TAB_GALLERY_DATA = [
  { label: "HTML", value: "html" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
];

export function GalleryWithTab() {
  return (
    <Tabs value="html">
      <TabsHeader>
        {TAB_GALLERY_DATA.map(({ label, value }) => (
          <Tab key={value} value={value}>{label}</Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4">
        {TAB_GALLERY_DATA.map(({ value }) => (
          <TabPanel className="grid grid-cols-2 gap-4 md:grid-cols-3" key={value} value={value}>
            {GALLERY_IMAGES.slice(0, 6).map((src, index) => (
              <div key={index}>
                <img className="h-40 w-full max-w-full rounded-lg object-cover object-center" src={src} alt="gallery-photo" />
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
