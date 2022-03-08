import React from 'react'

export default function Pagination(props) {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav className='nav'>
        {pageNumbers.map(number=>(
            <li key={number}>
                <a href="!#" onClick={()=>props.paginate(number)}>
                    {number}
                </a>
            </li>
        ))}
    </nav>
  )
}
