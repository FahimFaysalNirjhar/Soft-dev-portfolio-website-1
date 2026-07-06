"use client";

import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
    </>
  );
}
