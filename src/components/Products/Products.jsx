import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// const products= [
//     { id: 1, name: "Shoes", description: "Running shoes", price: "50€", image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u7khoqev6hy2xgsllrnb/revolution-5-running-shoes-szF7CS.png" },
//     { id: 2, name: "Bag", description: "Tote Bag", price: "35€", image: "https://desenio.fr/bilder/artiklar/zoom/TOTE50143_3.jpg?imgwidth=435&qt=Limited%20Edition" }
// ];

const Products= ({ products })=> {
    const classes= useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map(product=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;