import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    portfolio:{
        position: "relative",
        width: "100%",
        height: "25%",
    },
    container:{
        position: "relative",
        width: "100%",
        height: "100%",
    },
    BackgroundImage: {
        position: "absolute",
        zIndex: "-2",
        width: "100%",
        height: "100%",
    
        "& img": {
          width: "100%",
          height: "100%",
        },
    },
    BackgroundImage2: {
        position: "absolute",
        backgroundColor: "rgb(0,0,0,0.3)",
        zIndex: "-1",
        width: "100%",
        height: "100%",
      },
    position:{
        position: "relative",
        width: "90%",
        top: "10%",
        display: "flex",
        flexDirection: "column"
    },
    title:{
        position: "relative",
        color: "white",
        left: "8%",
    },
    list:{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderLeft: "3px solid #F0A830",
        padding: "5px 20px",
        left: "8%",
    },
    itemList:{
        color: "white",
        "&:hover": {
            backgroundColor: "#F0A830",
        }
    },
    link:{
        color: "white",
    },
    seta:{
        width: "90%",   
        position: "relative",
        top: "38%",
    },
    setaColor:{
        position: "relative",
        color: "white",
        fontSize: "100px",
        left: "51.8%",
    },
    BackgroundImage3: {
        position: "absolute",
        backgroundColor: "#045ba9",
        zIndex: "-1",
        width: "100%",
        height: "20%",
        top: "93%",
        transform: "skewY(3deg)",
      },
}))