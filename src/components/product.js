export default function Product({name , image, description  , price}) {
  return (
    <div className="h-120 w-100 border-8 border-blue-600 rounded-4xl flex flex-col  ">
      <img className="h-[50%] w-100 bg-black" src="sd"/>
      <div className="p-4 space-y-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <button className="bg-blue-700 text-white font-bold px-8 py-4 mx-4 rounded-xl">Buy</button>
    </div>
  );
}
