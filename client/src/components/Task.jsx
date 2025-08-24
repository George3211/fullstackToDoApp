import { useEffect, useState } from 'react';
import axios from "axios";

const Task = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      let tasks = res.data.tasks;
      setData(tasks)

    }).catch(er => {
      console.log(er)
    })

  }, [])

    console.log(data[0])
  
  return (
    <>
      <div className='bg-teal-900 text-white text-center text-shadow-amber-400 w-full'>Todos</div>

        <div className='w-full flex justify-center items-center flex-col p-4'>
          {data.map((obj, idx) => {
          return <div key={idx} className='text-black flex w-full gap-3 border m-5 p-3'>
            <div>
              {obj.isCompleted}
            </div>

            <div>
              {obj.title}
              <br />
              {obj.description}
            </div>

            <div>
              <form className="max-w-sm mx-auto">
                <label htmlFor="underline_select" className="sr-only">Underline select</label>

                <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500
                bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400
                dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option value="pending" selected>Pending</option>
                  <option value="in-progress">In-progress</option>
                  <option value="completed">Completed</option>
                </select>
              </form>
            </div>

            <div>
              {obj.priority}
            </div>

            <div>
              {new Date(obj.createdAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}
            </div>

          </div>
        })}
        </div>
    </>
  )
}

export default Task
