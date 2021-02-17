import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    aboutMe: {
        position: "relative",
        width: "100%",
        height: "25%",
        display: "flex",
    },
    space: {
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
        backgroundColor: "#045ba9",
        zIndex: "-3",
        width: "100%",
        height: "100%",
    },
    text: {
        textAlign: "right",
        position: "relative",
        top: "5%",
        color: "white",
        fontFamily: '"Open Sans",helvetica,arial,sans-serif',
    },
    p: {
        position: "relative",
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        margin: "1em 0",
        fontSize: "18px",
        lineHeight: "1.6em",
        fontWeight: "400",
        textRendering: "optimizeLegibility!important",
        wordBreak: "break-word",  
    },
    BackgroundImage2: {
        position: "absolute",
        backgroundColor: "#fe6201",
        zIndex: "-1",
        width: "100%",
        height: "20%",
        top: "93%",
        transform: "skewY(3deg)",
      },
      seta:{
        position: "relative",
        top: "10%",
        right: "15%",
    },
    setaColor:{
        color: "white",
        fontSize: "100px",
    }
}))