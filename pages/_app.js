import App from "next/app";
import 'normalize.css'
import '../bemit/bemit.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const resGlobalData = await fetch(`${process.env.REST_API}/wp-json/acf/v3/options/options/`);
  let globalData = await resGlobalData.json()
  globalData = globalData.acf

  appProps.pageProps = {
    globalData
  }

  return {...appProps}
}

export default MyApp