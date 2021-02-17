import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    presentation:{
        position: "relative",
        width: "100%",
        height: "25%",
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
        backgroundColor: "rgb(0,0,0,0.4)",
        zIndex: "-1",
        width: "100%",
        height: "100%",
      },
      container:{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
      },
      name:{
          position: "relative",
          display: "flex",
          top: "25%",
      },
      firstName:{
          color: "#00bcd4",
          padding: "4px",
      },
      secondName:{
          color: "white",
          padding: "4px",
      },
      Links:{
        position: "relative",
        display: "flex",
        top: "45%",
      },
      firstLink:{
        color: "#00bcd4",
        padding: "4px",
    },
    secondLink:{
        color: "white",
        padding: "4px",
    },
    seta:{
        position: "relative",
        top: "62%"
    },
    setaColor:{
        color: "#00bcd4",
        fontSize: "100px",
    }
}))