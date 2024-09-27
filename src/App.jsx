import { useState } from "react";
import Drawer from "./components/Drawer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Mosaic from "./components/Mosaic";

const navData = [
  "AI Innotations",
  "Features",
  "Safety",
  "By Google",
  "Extensions",
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar navData={navData} onOpenDrawer={() => setIsOpen(true)} />
      <Drawer
        isOpen={isOpen}
        navData={navData}
        onCloseDrawer={() => setIsOpen(false)}
      />
      <Hero />
      <Mosaic />
    </>
  );
}

export default App;
