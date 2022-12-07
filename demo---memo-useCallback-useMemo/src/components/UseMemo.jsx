import React, { useState, useMemo, useEffect, useRef } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, { name: name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((total, curr) => {
      console.log("Tinh toan lai");
      return total + curr.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <input
        type="text"
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <h4>Total: {total}</h4>
      <ul style={{ listStyleType: "none" }}>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseMemo;
