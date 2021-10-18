import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
// pour la navigation
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/kokottoshop.png';
import useStyles from './styles';

// les articles sont persistants dans le panier même si on ferme l'application grâce à l'API
const Navbar = ({ totalItems }) => {
    const classes= useStyles();
    const location= useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        KokottoShop
                    </Typography>
                    <div className={classes.grow} />
                    {/* pour ajouter de la logique au code, ici si... pour faire apparître ou non le logo panier */}
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
