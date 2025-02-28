"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("/api/items");
        setItems(data.data);
        console.log(data.data);
      } catch (error) {
        console.log("Error on fetching", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <main className="flex justify-center items-center h-[93dvh]">
        <section className="flex flex-row text-black gap-10">
          {items.map((item, index) => (
            <>
              <h5 key={item.id} className="text-black">
                {item.name}
              </h5>
              <img key={index} src={item.image} alt="Image" />
            </>
          ))}
        </section>
      </main>
    </>
  );
}
