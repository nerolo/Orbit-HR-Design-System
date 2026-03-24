import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">&copy; 2023 Material Tailwind</Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {["About Us", "License", "Contribute", "Contact Us"].map((item) => (
          <li key={item}>
            <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">{item}</Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {["About Us", "License", "Contribute", "Contact Us"].map((item) => (
            <li key={item}>
              <Typography as="a" href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">{item}</Typography>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">&copy; 2023 Material Tailwind</Typography>
    </footer>
  );
}

const LINKS = [
  { title: "Product", items: ["Overview", "Features", "Solutions", "Tutorials"] },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">Material Tailwind</Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">{title}</Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">{link}</Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} Material Tailwind. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

const SITEMAP = [
  { title: "Company", links: ["About Us", "Careers", "Our Team", "Projects"] },
  { title: "Help Center", links: ["Discord", "Twitter", "GitHub", "Contact Us"] },
  { title: "Resources", links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"] },
  { title: "Products", links: ["Templates", "UI Kits", "Icons", "Mockups"] },
];

export function FooterWithSitemap() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography variant="small" color="blue-gray" className="mb-4 font-bold uppercase opacity-50">{title}</Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a href="#" className="inline-block py-1 pr-2 transition-transform hover:scale-105">{link}</a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} Material Tailwind. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
