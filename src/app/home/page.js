"use client";
import { useEffect, useState } from "react";
import Newsletter from "./newsletter";

export default function Home() {
  const [newsletter, setNewsletter] = useState(false);
  function closeNewsletter() {
    setNewsletter(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsletter(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen">
      {newsletter && <Newsletter close={closeNewsletter} />}
    </div>
  );
}
