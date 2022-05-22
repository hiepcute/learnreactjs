import { useEffect ,useState} from "react"

// 1 callback luoon duoc goi sau khi component mounted
const tabs=['posts','comments','albums']

function Content(){
    // useeffect (callback, [deps])
    const [title,setTitle] =useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
   
  
     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
           // setPosts(posts)
        })
       
     },[type])
 


    return(
    <div>
        {tabs.map(tab=>(
            <button
            key={tab}
            style={type===tab?{
                color: '#fff',
                backgroundColor: '#333',
            }:{}}
            onClick={()=>setType(tab)}
            >
                {tab}
            </button>
        ))}
        <input
        value={title}
        onChange={e=>setTitle(e.target.value)}
        />
        <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>

        
    </div>
    )
}
export default Content