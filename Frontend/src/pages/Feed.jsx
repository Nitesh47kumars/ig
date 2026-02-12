import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

  return (
    <section className='feed-section'>
        {(posts.length > 0)? (
            posts.map((post)=>{
                return <div key={post._id} className='post-card' >
                    <img src={post.post} alt={post.caption} />
                    <div className='post-content'>
                        <p>{post.caption}</p>
                    </div>
                </div>
            })
        ):(
            <h1>No Posts Posted!!!</h1>
        )}
    </section>
  )
}

export default Feed
