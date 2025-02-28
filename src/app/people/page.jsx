"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const { data } = await axios.get("/api/people");
        setPeople(data.data);
      } catch (error) {
        console.log("Error on fetching", error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <>
      <main className="flex justify-center items-center h-[93dvh]">
        <section className="flex flex-row text-black gap-10">
          <div className="flex flex-col">
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input bg-gray-500"
              />
              <button className="btn btn-ghost btn-outline mt-5 w-full">
                Submit
              </button>
            </div>
            <div className="flex gap-10 pt-5">
              {people.map((person) => (
                <h5 key={person.id} className="text-black">
                  {person.name}
                </h5>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
