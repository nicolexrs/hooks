"use client";
import { useRef , useEffect , useState} from "react";

export default function Home() {
  const [newsletter , setNewsletter] = useState(false);
  function closeModal(){
    setNewsletter(false)
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setNewsletter(true)
    }, 4000);
    ()=> clearTimeout(timer);
  },[])

  const inputRef = useRef(null);
  function focusInput(){
    inputRef.current.focus();
    inputRef.current.className ="outline-red-500 p-4 rounded-2xl w-100 border"
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-8 items-center">
        <input ref={inputRef} placeholder="input something here ..." className="border p-4 rounded-2xl w-100"/>
        <button onClick={focusInput} className="bg-blue-600 w-max px-4 py-2 rounded-xl text-white font-bold">Focus</button>
      </div>
      {newsletter && (
        <div className="fixed top-0 left-0 h-screen flex justify-center items-center w-full bg-black/30">
          <div className="bg-slate-700 text-white p-8 flex flex-col items-center gap-4 w-100 rounded-2xl shadow-2xl">
            <button className=" self-end text-red-400 underline" onClick={closeModal}>close</button>
            <p className="font-bold text-2xl">Subscribe  to our Newsletter</p>
            <input className="p-4 border border-white w-full outline-white rounded-2xl placeholder:text-white text-white" placeholder="Email" />
            <button className="bg-blue-700 py-2 px-4 rounded-2xl text-sm font-bold">Subscribe</button>
          </div>
        </div>
      )}
    </main>
  );
}
