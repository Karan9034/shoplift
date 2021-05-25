import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import React from "react";

const CustomCard = ({ name, price, sellerName }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="/src/assets/default.png"
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        {sellerName}
                        <span
                            style={{
                                float: "right",
                                fontWeight: "400",
                            }}
                        >{`₹ ${price}`}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CustomCard;
