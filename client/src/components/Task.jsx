import { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tasks")
      .then((res) => {
        let tasks = res.data.tasks;
        setData(tasks);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  console.log(data[0]);

  return (
    <>
      <div className="bg-teal-900 text-white text-center text-shadow-amber-400 w-full">
        Todos
      </div>

      <div className="w-full flex justify-center items-center flex-col p-4">
        {data.map((obj, idx) => {
          return (
            <div
              key={idx}
              className="text-black flex w-full gap-3 border m-5 p-3"
            >
              <div>{obj.isCompleted}</div>

              <div>
                {obj.title}
                <br />
                {obj.description}
              </div>

              <div>
                <div className="relative max-w-sm mx-auto">
                  <label htmlFor={`status_select_${idx}`} className="sr-only">
                    Select task status
                  </label>

                  <select
                    id={`status_select_${idx}`}
                    className="block w-full py-2.5 px-3 pr-10 text-sm text-white bg-gray-500
               appearance-none rounded-3xl focus:outline-none focus:ring-0 focus:border-gray-200"
                    defaultValue={obj.status || "pending"}
                  >
                    <option value="pending" className="text-white">Pending</option>
                    <option value="in-progress" className="text-yellow-500">In-progress</option>
                    <option value="completed" className="text-green-500">Completed</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>{obj.priority}</div>

              <div>
                {new Date(obj.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Task;
