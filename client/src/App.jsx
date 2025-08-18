import React, { useEffect, useState } from 'react';
import Task from './components/Task';
import axios from "axios";

const App = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    axios.get("/api").then(res => {
      let message = res.data.message

      setData(message);
    })
  }, [])

  return (
    <>
    <p className='text-2xl underline text-center bg-teal-900 text-white'>{data}</p>
      <Task />
    </>
  )
}

export default App
