import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import '../App.css'

function PostCard({$id, title, featuredImage}) {
  return (
   <Link to={`/post/${$id}`}>
      <div className='rounded-xl p-4 card'>
         <div className='justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl '/>
         </div>
         <h2
         className='text-xl font-bold text-center'
         >{title}</h2>
      </div>
   </Link>
  )
}

export default PostCard