import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = ({AddtoCart, RemoveFromCart}) => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchData()
  })

  const fetchData = async()=>{
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const result = await res.json();
      setData(result);
      
    } catch (error) {
      console.log(error);     
    }
  }

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg my-16 mx-3 lg:mx-0 text-center">
          {data.map((item, index) => {
            return (
              <>
                <Card key={item.id} item={item} AddtoCart={AddtoCart} RemoveFromCart={RemoveFromCart} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
