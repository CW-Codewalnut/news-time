import { createTheme } from "@mui/material";

//Start: Adding custom color to mui color palette
declare module "@mui/material/styles" {
    interface Palette {
      surface: string;
    }
    interface PaletteOptions {
      surface: string;
    }
  }
  
  declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      surface: true;
    }
  }
  //END
  
  //Creating theme
  const theme = createTheme({
    palette: {
      surface: "#424242",
      background : {
        default: "#303030"
      },
      primary : {
        main: "#1D95F1"
      }
    },
    typography: {
      fontFamily : "roboto"
    }
  })

  export default theme;