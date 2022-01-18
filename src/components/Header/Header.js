import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{ backgroundColor: "#f50057" }}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Where Should I Go?
                </Typography>
                <Box className={classes.box}>
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
