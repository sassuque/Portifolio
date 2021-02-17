import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    knowledge: {
        position: "relative",
        width: "100%",
        height: "25%",
        display: "flex",
    },
    container: {
        width: "50%",
        height: "100%",
        position: "relative",
        paddingRight: "3%",
        paddingLeft: "3%",
        display: "flex",
        flexDirection: "column",
    },
    BackgroundImage: {
        position: "absolute",
        backgroundColor: "#fe6201",
        zIndex: "-1",
        width: "100%",
        height: "100%",
    },
    text: {
        color: "white",
        fontFamily: '"Open Sans", helvetica, arial, sans- serif',
    },
    p: {
        fontSize: "18px",
        lineHeight: "1.6em",
        fontWeight: "400",
        textRendering: "optimizeLegibility!important",
        webkitFontSmoothing: "antialiased!important",
        wordWrap: "break-word",
        wordBreak: "break-word",
    },
    list: {
        display: "block",
        listStyleType: "disc",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingInlineStart: "40px",
        textAlign: "justify"
    },
    itemList: {
        borderColor: "#fff",
        color: "#fff",
        backgroundColor: "rgba(255,255,255,.2)",
        float: "left",
        display: "block",
        listStyle: "none",
        fontWeight: "400",
        padding: "5px 15px",
        margin: "0 15px 15px 0",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#fff",
        color: "#fff",
        boxSizing: "border-box",
    },
    containerList:{
        textAlign: "left"
    }
}))