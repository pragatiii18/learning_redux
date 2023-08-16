import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { ProductComponent } from "./ProductComponent";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products", products);

  return (
    <div className="ui grid container">
      <br />
      <ProductComponent />
    </div>
  );
};
