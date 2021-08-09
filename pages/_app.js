
import { ThemeProvider } from 'styled-components';
import { Meta } from '../components/Global/Meta';
import { GlobalStyle, LightTheme } from '../theme';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {


  return (
    <>
      <Meta />
      
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />

      </ThemeProvider>
    </>
  )
}