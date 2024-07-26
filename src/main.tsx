import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './app/app-theme.ts'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'


ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* Applying default visual styling to default elements */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
)
