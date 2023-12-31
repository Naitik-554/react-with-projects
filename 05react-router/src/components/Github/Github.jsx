import { useEffect, useState } from "react"

function Github() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/naitik-554")
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }, [])
  return (
    <div className="text-center m-4 p-4 text-3xl bg-gray-600 text-white">Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Github Profile Image" width={300}/>
    </div>
  )
}

export default Github