import { AppBar, Container,Toolbar,Typography,Select,MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate} from 'react-router-dom';


const useStyles=makeStyles(()=>({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
      },
}))
const Header = () => {
    const classes = useStyles();

    const navigate=useNavigate()

    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark"
        }
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>

        <Container>
            <Toolbar>
                <Typography 
                onClick={()=>navigate("/")}
              className={classes.title}>Crypto Hunter</Typography>

                <Select variant='outlined' 
                style={{
                    width:100,
                    height:40,
                    marginLeft:15
                }}>
                    
                    <MenuItem value={"EURO"}>EURO</MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                </Select>
            </Toolbar>
        </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header
