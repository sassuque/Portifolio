import { Box, Typography } from "@material-ui/core"

import { useStyles } from "./style";

export default function Knowledge(){
    const classes = useStyles();
    return(
        <Box component="div" className={classes.knowledge} id="Knowledge_fix">
            <Box component="div" className={classes.BackgroundImage} />
            <Box component="div" className={classes.container}>
            <Box component="div" className={classes.text}>
                <Typography variant="h2" className={classes.title}>CONHECIMENTO</Typography>
                <Typography variant="p" className={classes.p}>Estou sempre atento ao mercado e lendo sobre as áreas envolvidas com meu dia a dia, incorporando novas tecnologias e métodos conforme as necessidades minhas e dos projetos.</Typography>
                </Box>
                <Box component="div" className={classes.containerList}>
                <ul className={classes.list}>
                <Typography variant="button" className={classes.itemList}>HTML 5</Typography>
                <Typography variant="button" className={classes.itemList}>javascript</Typography>
                <Typography variant="button" className={classes.itemList}>css 3</Typography>
                <Typography variant="button" className={classes.itemList}>React</Typography>
                <Typography variant="button" className={classes.itemList}>Front-end</Typography>
                <Typography variant="button" className={classes.itemList}>Python</Typography>
                <Typography variant="button" className={classes.itemList}>Gitlab</Typography>
                <Typography variant="button" className={classes.itemList}>Design Responsivo</Typography>
                <Typography variant="button" className={classes.itemList}>Experiência do Usuário</Typography>
                <Typography variant="button" className={classes.itemList}>Arquitetura da Informação</Typography>
                <Typography variant="button" className={classes.itemList}>Design Gráfico</Typography>
                <Typography variant="button" className={classes.itemList}>java</Typography>
                <Typography variant="button" className={classes.itemList}>Desenvolvimento de Games</Typography>
                </ul>
                </Box>
            </Box>
            <Box component="div" className={classes.container}/>
        </Box>
    )
}