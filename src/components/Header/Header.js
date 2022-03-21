import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";

import useStyles from "./styles";

const Header = ({ onLoad, onPlaceChanged }) => {
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
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
