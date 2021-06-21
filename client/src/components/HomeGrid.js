import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: "5vw",
        marginRight: "5vw",
        width: "90vw",
    },
}));

const HomeGrid = ({ isCustomer }) => {
    const classes = useStyles();
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let url = isCustomer ? "/api/products/all" : undefined;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setProducts(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Grid className={classes.root} container spacing={5}>
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
