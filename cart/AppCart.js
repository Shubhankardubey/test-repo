import React, { useState, useEffect } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import Cart from "./Cart";
import { nanoid } from 'nanoid'


const AppCart = () => {
  const [products, setProducts] = useState([]);
  const [tempposts, setTempPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);
  const [searchText, setsearchText] = useState("");
  const [count, setCount] = useState(0);
  const [cartState, setCartState] = useState([]);

  console.log(cartState);

  useEffect(() => {
    getUrl();
    setLoading(true);
  }, []);

  async function getUrl() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setTempPosts(data);
    setLoading(false);
  }

  const setNewPhase = (newPhase) => {
    setPhase(newPhase);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  function addItems(id) {
    let prro = products.filter((x) => x.id === id);
    setCartState((prevState) => [...prevState, ...prro]);
    setCount((prevState) => prevState + 1);
  }

  // function getItemstoCard() {
  //   let cartArr = []
  //   for(let i = 0; i < products.length; i++) {
  //     cartArr.push(products[i])
  //   }

  // setCartState(cartArr)
  // }

  const displayElements = currentPosts.map((product) => {
    // console.log(product.category);
    return (
      <Products
        addItems={addItems}
        key={product.id}
        addItems={addItems}
        items={currentPosts}
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
        rating={product.rating["rate"]}
        loading={loading}
        addItems={() => addItems(product.id)}
      />
    );
  });

  const retreiveSearchResults = (inputText) => {
    if (inputText) {
      // g means global
      // i means incase sensitive

      let regex = new RegExp(inputText, "gi");
      setProducts(tempposts.filter((x) => regex.test(x["title"])));
      setsearchText(inputText);
    } else {
      setProducts(tempposts);
      setsearchText("");
    }
    setCurrentPage(1)
  };

  const dropDown = (dropdownValue) => {
    // let categories = tempposts
    switch (dropdownValue) {
      case "menclothing":
        setProducts(tempposts.filter((x) => x.category === "men's clothing"));
        break;
      case "womenclothing":
        setProducts(tempposts.filter((x) => x.category === "women's clothing"));
        break;
      case "jewelery":
        setProducts(tempposts.filter((x) => x.category === "jewelery"));
        break;
      case "electronics":
        setProducts(tempposts.filter((x) => x.category === "electronics"));
        break;
      default:
        setProducts(tempposts);
        break;
    }
  };

  // function deletebtn(index){
  //   let deleteite = products.filter(id => id.index !== index)
  //   console.log(deleteite)
  //   setCartState(deleteite)
  // }

 

  return (
    <div>
      <h1>AppCart</h1>
      {/* <button onClick={getItemstoCard}>BUTTON CLICK</button> */}
      {phase === 1 && (
        <>
          {count > 0 && (
            <button onClick={() => setNewPhase(2)} type="button">
              <h2>Cart items: {count}</h2>
            </button>
          )}
          <br />
          <br />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => retreiveSearchResults(e.target.value)}
          />
          <select name="category" onChange={(e) => dropDown(e.target.value)}>
            <option value={""}>Selected</option>
            <option value={"menclothing"}>men's clothing</option>
            <option value={"womenclothing"}>women's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
          </select>
          {displayElements}
          <Pagination
            postPerPage={postPerPage}
            totalPosts={products.length}
            paginate={paginate}
          />
        </>
      )}

      {phase === 2 && (
        <>
          {" "}
          <button
            className="goBackToItems"
            onClick={() => setNewPhase(1)}
            type="button"
          >
            Go back to products
          </button>{" "}
          <Cart cartState={cartState} count={count} addItems={addItems} setCount={setCount} /> <hr />{" "}
        </>
      )}
    </div>
  );
};

export default AppCart;
