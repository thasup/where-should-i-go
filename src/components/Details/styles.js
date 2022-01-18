import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    chip: {
        margin: "5px 5px 5px 0",
        color: "#f50057",
        border: "1px solid #f50057",
    },
    subtitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
    },
    spacing: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    line: {
        borderBottom: "1px solid #e0e0e0",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
}));
