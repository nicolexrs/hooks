"use client";
import Product from "@/components/product";
import productData from "@/data-sources/products";
import { useState } from "react";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  let filteredItems = productData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // function filterByPrice(highestPrice , lowestPrice){
  //   filteredItems = productData.filter((item) => {
  //     return item.price <= highestPrice && item.price >= lowestPrice;
  //   });
  // }
  // filterByPrice(1500000, 800000)

  function getSearchText(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="space-y-8 px-20 py-10 flex flex-col ">
      <input
        placeholder="Search..."
        className="p-4 border-4 border-blue-400 rounded-4xl"
        value={search}
        onChange={getSearchText}
      />
      <div className="flex justify-evenly w-full">
        <button
          onClick={() => setCategory("phones")}
          className="text-4xl text-blue-500 font-bold underline"
        >
          Phones
        </button>
        <button
          onClick={() => setCategory("laptops")}
          className="text-4xl text-blue-500 font-bold underline"
        >
          Laptop
        </button>
        <button
          onClick={() => setCategory("televisions")}
          className="text-4xl text-blue-500 font-bold underline"
        >
          TV's
        </button>
        <button
          onClick={() => setCategory("audio")}
          className="text-4xl text-blue-500 font-bold underline"
        >
          Audio
        </button>
        <button
          onClick={() => setCategory("accessories")}
          className="text-4xl text-blue-500 font-bold underline"
        >
          Accessories
        </button>
      </div>
      <div className="m-8 grid grid-cols-3 gap-8 overflow-y-scroll h-screen">
      
        {filteredItems.map((item) =>
          category === "all" ? (
            <Product
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ) : (
            item.category === category && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
          )
        )}
      </div>
      {/* <h1 className="text-4xl font-bold text-blue-500 underline">Phones</h1>
      <div className="overflow-x-auto flex p-8 space-x-4">
        {productData.map(
          (item) =>
            item.category === "phones" && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
        )}
      </div>
      <h1 className="text-4xl font-bold text-blue-500 underline">Laptops</h1>
      <div className="overflow-x-auto flex p-8 space-x-4">
        {productData.map(
          (item) =>
            item.category === "laptops" && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
        )}
      </div>
      <h1 className="text-4xl font-bold text-blue-500 underline">TV's</h1>
      <div className="overflow-x-auto flex p-8 space-x-4">
        {productData.map(
          (item) =>
            item.category === "televisions" && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
        )}
      </div>
      <h1 className="text-4xl font-bold text-blue-500 underline">audio</h1>
      <div className="overflow-x-auto flex p-8 space-x-4">
        {productData.map(
          (item) =>
            item.category === "audio" && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
        )}
      </div>
      <h1 className="text-4xl font-bold text-blue-500 underline">
        Accessories
      </h1>
      <div className="overflow-x-auto flex p-8 space-x-4">
        {productData.map(
          (item) =>
            item.category === "accessories" && (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            )
        )}
      </div> */}
    </div>
  );
}
