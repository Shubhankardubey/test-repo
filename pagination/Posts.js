import React from 'react'

 const Posts = (props) => {
    if(props.loading){
        return <h2>Loading...</h2>
    }
  return (
  <ul className='navli'>
      {props.posts.map(post=> (
          <li  key={post.id}>
              {post.title}
          </li>
      ))}
  </ul>
  )
}

export default Posts