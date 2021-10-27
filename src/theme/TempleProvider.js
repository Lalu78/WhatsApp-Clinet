import React,{createContext} from 'react';
import { ThemeProvider, createTheme  } from '@material-ui/core/styles';

 export const TemplateContext=createContext(null)

function TempleProvider({children}) {
    const theme = createTheme ({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    top: 19,
                    left: 40,
                    height: '95%',
                    width: "25%",
                    boxShadow:'none'
              }
            },
            MuiBackdrop: {
                root: {
                    backgroundColor:'unset'
                }
            }
      }

    })
  return (
      <TemplateContext.Provider>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
     </TemplateContext.Provider>
  )
}

export default TempleProvider
