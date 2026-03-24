import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const tabData = [
  { label: "HTML", value: "html", desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it." },
  { label: "React", value: "react", desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too." },
  { label: "Vue", value: "vue", desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes." },
  { label: "Angular", value: "angular", desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too." },
  { label: "Svelte", value: "svelte", desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes." },
];

export function TabsDefault() {
  return (
    <Tabs value="html">
      <TabsHeader>
        {tabData.map(({ label, value }) => <Tab key={value} value={value}>{label}</Tab>)}
      </TabsHeader>
      <TabsBody>
        {tabData.map(({ value, desc }) => <TabPanel key={value} value={value}>{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}

const iconData = [
  { label: "Dashboard", value: "dashboard", icon: Square3Stack3DIcon, desc: "It really matters and then like it really doesn't matter." },
  { label: "Profile", value: "profile", icon: UserCircleIcon, desc: "Because it's about motivating the doers." },
  { label: "Settings", value: "settings", icon: Cog6ToothIcon, desc: "We're not always in the position that we want to be at." },
];

export function TabsWithIcon() {
  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {iconData.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {iconData.map(({ value, desc }) => <TabPanel key={value} value={value}>{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}

export function TabsCustomAnimation() {
  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {tabData.map(({ label, value }) => <Tab key={value} value={value}>{label}</Tab>)}
      </TabsHeader>
      <TabsBody animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }}>
        {tabData.map(({ value, desc }) => <TabPanel key={value} value={value}>{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}

export function TransparentTabs() {
  return (
    <Tabs value="html" className="max-w-[40rem]">
      <TabsHeader className="bg-transparent" indicatorProps={{ className: "bg-gray-900/10 shadow-none !text-gray-900" }}>
        {tabData.map(({ label, value }) => <Tab key={value} value={value}>{label}</Tab>)}
      </TabsHeader>
      <TabsBody>
        {tabData.map(({ value, desc }) => <TabPanel key={value} value={value}>{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}

export function VerticalTabs() {
  return (
    <Tabs value="html" orientation="vertical">
      <TabsHeader className="w-32">
        {tabData.map(({ label, value }) => <Tab key={value} value={value}>{label}</Tab>)}
      </TabsHeader>
      <TabsBody>
        {tabData.map(({ value, desc }) => <TabPanel key={value} value={value} className="py-0">{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{ className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none" }}
      >
        {tabData.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab === value ? "text-gray-900" : ""}>{label}</Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabData.map(({ value, desc }) => <TabPanel key={value} value={value}>{desc}</TabPanel>)}
      </TabsBody>
    </Tabs>
  );
}
