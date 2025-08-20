import { useEffect, useState } from 'react';
import axios from "axios";

const Task = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    axios.get("/api/tasks").then((res) => {
      let message = res.data.message;
      setData(message);
    })
  }, [])

  return (
    <div className='bg-teal-900 text-white text-center text-shadow-amber-400'>Todos</div>
  )
}

export default Task
