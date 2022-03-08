import React, { useState, useEffect } from "react";
import Posts from "./Posts.js"
import Pagination from "./Pagination.js";


function AppPagination() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postPerPage] = useState(11)
  
  console.log(posts);
  useEffect(()=> {
    getUrl() 
    setLoading(true)
    
  },[])
  async function getUrl() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false)
  } 
// 
  //get current posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
   
const paginate = (pageNumber) => setCurrentPage(pageNumber)
console.log(currentPage);

  
  return (
    <div>
      <h1>My blog</h1>
     <Posts posts={currentPosts} loading={loading} />
     <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default AppPagination;
