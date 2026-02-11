import React, { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([])
  return (
    <section className='feed-section'>
        {(posts.length > 0)? (
            posts.map((post)=>{
                return <div key={post._id}>
                    <img src={post.post} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            })
        ):(
            <h1>No Posts Posted!!!</h1>
        )}
    </section>
  )
}

export default Feed
