import { Box, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';


import BackgroundImage from "../../img/trabalhos.png"
import { useStyles } from "./style";

export default function Portfolio() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.portfolio}>
            <Box className={classes.BackgroundImage}>
                <Box component="img" src={BackgroundImage} alt="fundo da page" />
            </Box>
            <Box component="div" className={classes.BackgroundImage2} />
            <Box component="div" className={classes.container} id="Portfolio_fix">
                <Box component="div" className={classes.position}>
                    <Typography variant="h2" className={classes.title}>PORTFÓLIO</Typography>
                    <Box component="div" className={classes.list}>
                        <a className={classes.link} href="https://www.edirpedro.com.br/cases/musilink.php"><Button className={classes.itemList} size="medium"><Typography variant="h6">testegfjtgfhjk</Typography></Button></a>
                        <a className={classes.link} href="https://www.edirpedro.com.br/cases/musilink.php"><Button className={classes.itemList}><Typography variant="h6">teste</Typography></Button></a>
                        <a className={classes.link} href="https://www.edirpedro.com.br/cases/musilink.php"><Button className={classes.itemList}><Typography variant="h6">teste</Typography></Button></a>
                    </Box>
                </Box>
                <Box component="div" className={classes.seta}>
                    <a href="#AboutMe_fix"><ArrowDownwardSharpIcon className={classes.setaColor} /></a>
                </Box>
                <Box component="div" className={classes.BackgroundImage3} />
            </Box>
        </Box>
    )
}