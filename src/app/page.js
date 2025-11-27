"use client";
import { useState, useEffect } from "react";
import Home from "./home/page";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  },[]);
  return (
    <>
      {loading ? (
        <div className="h-screen fixed w-full bg-white top-0 left-0 flex justify-center items-center">
          <DotLottieReact
            className="w-100"
            src="loading.lottie"
            loop
            autoplay
          />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}
