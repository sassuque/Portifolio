import { Box, Typography } from "@material-ui/core";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

import { useStyles } from "./style";

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.aboutMe} id="AboutMe_fix">
            <Box component="div" className={classes.BackgroundImage} />
            <Box component="div" className={classes.space}/>
            <Box component="div" className={classes.space}>
                <Box component="div" className={classes.text}>
                    <Typography variant="h2" className={classes.title}>SOBRE MIM</Typography>
                    <Typography variant="p" className={classes.p}>Sou Edir Pedro um Programador Front-End situado na capital de São Paulo. Trabalho desde 2004 no desenvolvimento para internet me focando na construção de interfaces. Tenho formação como programador de sistemas e atualmente realizo trabalhos de construção de sites e plugins, geralmente em plataforma WordPress, para agências de internet.
</Typography>
                    <Typography variant="p" className={classes.p}>Nestes anos de profissão trabalhei em projetos de clientes como: Habro Music, Centauro, Echo, CM Comandos, Instituto Metrus, Oxiteno, Conceição Bem Casados, Touratech, Musical Express, Royal Music, Equipo, AHPAS, WDC Networks entre outras.</Typography>
                </Box>
                <Box component="div" className={classes.seta}>
                    <a href="#Knowledge_fix"><ArrowDownwardSharpIcon className={classes.setaColor} /></a>
                </Box>
            </Box>
            <Box component="div" className={classes.BackgroundImage2} />
        </Box>
    )
}