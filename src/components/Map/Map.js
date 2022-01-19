import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({
    coordinates,
    setCoordinates,
    setBounds,
    places,
    setChildClicked,
}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery("(min-width:768px");

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                }}
                defaultCenter={{
                    center: {
                        lat: 59.95,
                        lng: 30.33,
                    },
                    zoom: 11,
                }}
                center={coordinates}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
                options={" "}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => {
                    setChildClicked(child);
                }}
            >
                {places?.map((place, index) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                        {!isDesktop ? (
                            <LocationOnOutlinedIcon
                                color="primary"
                                fontSize="large"
                            />
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography
                                    className={classes.typography}
                                    variant="subtitle2"
                                    gutterBottom
                                >
                                    {place.name}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    size="small"
                                    value={Number(place.rating)}
                                    readOnly
                                />
                                <img
                                    className={classes.pointer}
                                    src={
                                        place.photo
                                            ? place.photo.images.large.url
                                            : "https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
                                    }
                                    alt={place.name}
                                />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
