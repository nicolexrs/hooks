"use client";
import Load from "@/components/load";
import { useEffect, useState } from "react";
import Home from "./home/page";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  });
  return <div className="h-screen">{loading ? <Load /> : <Home />}</div>;
}
