"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ name: "" });
  const [formError, setFormError] = useState("");
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

  function handleChange(event) {
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        [event.target.name]: event.target.value,
      };
    });
  }

  const postPerson = async () => {
    try {
      setFormError("");
      const { data } = await axios.post("/api/people", {
        name: person.name,
      });
      setPeople((prevPeople) => [
        ...prevPeople,
        { id: prevPeople.length + 1, name: data.person },
      ]);
      setPerson({ name: "" });
    } catch (error) {
      console.log(error.response.data.msg);
      setFormError(error.response.data.msg);
    }
  };

  console.log(person);

  return (
    <>
      <main className="flex justify-center items-center h-[93dvh]">
        <section className="flex flex-row text-black gap-10">
          <div className="flex flex-col">
            <div>
              {formError && (
                <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={() => setFormError("")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{formError}</span>
                </div>
              )}
              <input
                type="text"
                placeholder="Type here"
                name="name"
                value={person.name}
                onChange={handleChange}
                className="input bg-gray-500 w-full mt-5"
              />
              <button
                onClick={postPerson}
                className="btn btn-ghost btn-outline mt-5 w-full"
              >
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
