import React, { useState, useEffect } from "react";
import Posts from "./Posts.js"
import Pagination from "./Pagination.js";


function AppPagination() {
  const [posts,setPosts] = useState([])
  const [tempposts,setTempPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postPerPage,setpostPerPage] = useState(11)
  const [count,setcount] = useState(11)
  const [searchText, setsearchText] = useState("")
  
  useEffect(()=> {
    getUrl() 
    setLoading(true)
    
  },[])
  async function getUrl() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setTempPosts(data)
    setLoading(false)
  } 
// 
  //get current posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
   
const paginate = (pageNumber) => setCurrentPage(pageNumber)
//console.log(currentPage);

  // input type number accepts e or - or + etc . so to restrict user to input only numbers
  // use keyup event
  // keyup event ->  key = 0 to 9 return true else return false
  const retreiveSearchResults = (inputText) => {
    if(inputText){
      // g means global
      // i means incase sensitive
      let regex = new RegExp(inputText,"gi")
      setPosts(tempposts.filter(x=>regex.test(x['title'])))
      setsearchText(inputText)
    }else{
      setPosts(tempposts)
      setsearchText("")
    }
    setCurrentPage(1)
  }

  const dropDown = (dropdownValue) => {
      switch(dropdownValue){
      case '2':
        setpostPerPage(Number(2))
        break;
      case '5':
        setpostPerPage(Number(5))
        break;
      default:
        setpostPerPage(Number(11))
        break;
    }
  }

  return (
    <div>
      <h1>My blog</h1>
      <input type="number" value={count} onChange={(e)=>setcount(Number(e.target.value))} />
      <button type="button" onClick={(e)=>setpostPerPage(count)}>Submit</button>
    <br/>
    <br/>
      <input type="text" placeholder="Search..." value={searchText} onChange={(e)=>retreiveSearchResults(e.target.value)} />
      <br/>
    <br/>
    <select name="dropdown" onChange={(e)=>dropDown(e.target.value)}>
    <option  value={""}>Selected</option>
      <option value={"2"}>2</option>
      <option value={"5"}>5</option>
    </select>
     <Posts posts={currentPosts} loading={loading} />
     <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default AppPagination;