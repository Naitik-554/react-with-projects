import { useParams } from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className="text-center my-5">UserID : {userid}</div>
  )
}

export default User