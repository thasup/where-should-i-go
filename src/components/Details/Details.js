import React from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";

const Details = ({ place }) => {
    const classes = useStyles();
    console.log(place);

    return (
        <Card elevation={6}>
            {place.name && (
                <>
                    <CardMedia
                        style={{ height: 350 }}
                        image={
                            place.photo
                                ? place.photo.images.large.url
                                : "https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"
                        }
                        title={place.name}
                    />
                    <CardContent>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            {/* <Typography variant="body2" style={{ marginRight: "5px" }}>
                        {place.rating}
                    </Typography> */}
                            <Rating
                                size="small"
                                name="read-only"
                                value={place.rating}
                                readOnly
                            />
                            <Typography variant="subtitle1">
                                {place.distance_string}
                            </Typography>
                        </Box>
                        <Typography variant="h5">{place.name}</Typography>
                        <Typography variant="overline">
                            {place.open_now_text}
                        </Typography>
                        <Box display="flex">
                            {place.price_level && (
                                <Typography
                                    variant="subtitle1"
                                    style={{
                                        marginRight: "15px",
                                        color: "#f50057",
                                    }}
                                >
                                    {place.price_level}
                                </Typography>
                            )}

                            <Typography variant="subtitle1">
                                {place.num_reviews} reviews
                            </Typography>
                        </Box>
                        <div className={classes.line}></div>
                        {place.ranking && (
                            <>
                                <Box>
                                    <Typography variant="button" paragraph>
                                        {place.ranking}
                                    </Typography>
                                    <Typography variant="body2">
                                        {place.description}
                                    </Typography>
                                </Box>
                                <div className={classes.line}></div>
                            </>
                        )}

                        <Box>
                            {place?.cuisine?.map(({ name }) => (
                                <Chip
                                    variant="outlined"
                                    key={name}
                                    size="small"
                                    label={name}
                                    className={classes.chip}
                                />
                            ))}
                            {place.address && (
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    color="textSecondary"
                                    className={classes.subtitle}
                                >
                                    <LocationOnIcon />
                                    {place.address_obj.street1}
                                    {", "}
                                    {place.address_obj.city}{" "}
                                    {place.address_obj.state}{" "}
                                    {place.address_obj.postalcode}
                                </Typography>
                            )}
                            {place.phone && (
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    className={classes.spacing}
                                >
                                    <PhoneIcon /> {place.phone}
                                </Typography>
                            )}
                        </Box>
                        <div className={classes.line}></div>
                        <CardActions
                            style={{
                                padding: "0rem",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#f50057",
                                }}
                                onClick={() =>
                                    window.open(place.web_url, "_blank")
                                }
                            >
                                Trip Advisor
                            </Button>
                            <Button
                                variant="contained"
                                size="small"
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#f50057",
                                }}
                                startIcon={<LanguageIcon />}
                                onClick={() =>
                                    window.open(place.website, "_blank")
                                }
                            >
                                Website
                            </Button>
                        </CardActions>
                    </CardContent>
                </>
            )}
        </Card>
    );
};

export default Details;
