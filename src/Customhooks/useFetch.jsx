import { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(()=>{

    async function fetchData(){

      try{

        const res = await fetch(url)

        if(!res.ok){
          throw new Error("Failed to fetch data")
        }

        const json = await res.json()
        setData(json)

      }catch(err){
        setError(err.message)
      }finally{
        setInterval(() => {
          setLoading(false)
        }, 2000);
        
      }

    }

    fetchData()

  },[url])

  return {data,loading,error}

}