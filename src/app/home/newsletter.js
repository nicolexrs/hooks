export default function Newsletter({ close }) {
  return (
    <div className="w-full h-screen fixed bg-black/80 top-0 left-0 flex items-center justify-center z-50">
      <button
        onClick={close}
        className="text-red-500 text-3xl absolute top-4 right-4 "
      >
        X
      </button>
      <div className="bg-white w-[50vw] h-[50vh] rounded-4xl shadow-2xl flex flex-col md:flex-row">
        <div className="w-[50%] bg-blue-700 h-full rounded-l-4xl flex items-center justify-center">
          <p className="text-white font-bold text-6xl ">40% OFF</p>
        </div>
        <div className="w-[50%] items-center flex flex-col p-8 gap-8 justify-center text-blue-700">
          <p className="text-4xl font-bold text-center  ">
            Subscribe to our newsletter
          </p>
          <input
            placeholder="Enter your email ...."
            className="border-2 p-4 w-full rounded-xl border-blue-700 placeholder:text-blue-700 outline-blue-700"
          />
          <button className="bg-blue-700 text-white font-bold px-8 py-4 text-xl rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
