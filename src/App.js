import Presentation from "./components/Parts/Presentation/main"
import Portfolio from "./components/Parts/Portfolio/main"
import AboutMe from "./components/Parts/AboutMe/main"
import Knowledge from "./components/Parts/Knowledge/main"

import { Box } from "@material-ui/core";

import { useStyles } from "./styles";

const App = () => {
    const classes = useStyles();
    return (       
        <Box component="div" className={classes.page}>
            <Presentation/>
             <Portfolio/>
             <AboutMe/>
             <Knowledge/>
        </Box>
    );
}

export default App;