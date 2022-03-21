import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import Details from "../Details/Details";
import useStyles from "./styles.js";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elementRef, setElementRef] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, index) => elementRef[index] || createRef());

    setElementRef(refs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Find interesting place around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress color="inherit" size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="3">Above 3 Stars</MenuItem>
              <MenuItem value="4">Above 4 Stars</MenuItem>
              <MenuItem value="4.5">Above 4.5 Stars</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item key={index} xs={12}>
                <Details
                  place={place}
                  selected={Number(childClicked) === index}
                  refProp={elementRef[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
