import { Avatar, Typography, AppBar, Box } from "@material-ui/core";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

import { useStyles } from "./style";
import BackgroundImage from "../../img/planodefundo.png"

export default function Presentation() {
    const classes = useStyles();
    return (
        
        <Box component="div" className={classes.presentation} id="Presentation_fix">
            <Box className={classes.BackgroundImage}>
                <Box component="img" src={BackgroundImage} alt="fundo da page" />
            </Box>
                <Box component="div" className={classes.BackgroundImage2}/>
            <Box component="div" className={classes.container}>
                <Box component="div" className={classes.name}>
                    <Typography variant="h2" className={classes.firstName}>João</Typography>
                    <Typography variant="h2" className={classes.secondName}>Victor</Typography>
                </Box>
                <Box component="div" className={classes.Links}>
                <a href="#AboutMe_fix" className={classes.firstLink}><Typography variant="h6">SOBRE-MIM</Typography></a>
                <a href="#Knowledge_fix" className={classes.secondLink}><Typography variant="h6">CONHECIMENTOS</Typography></a>                
                </Box>
                <Box component="div" className={classes.seta}>
                <a href="#Portfolio_fix"><ArrowDownwardSharpIcon className={classes.setaColor}/></a>
                </Box>
            </Box>
         </Box>
         
    )
}