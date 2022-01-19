import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    paper: {
        padding: "7px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "120px",
    },
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        "&:hover": { zIndex: 2 },
    },
    pointer: {
        cursor: "pointer",
    },
}));
