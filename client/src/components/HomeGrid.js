import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import React, { useState, useEffect } from "react";

const HomeGrid = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/products/all")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, [products]);

    return (
        <Grid container spacing={5}>
            {products.map((product) => (
                <Grid item key={product._id} md={3} sm={4} xs={6}>
                    <CustomCard
                        name={product.name}
                        price={product.price}
                        sellerName={product.seller.name}
                    ></CustomCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default HomeGrid;
