import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const resGlobalData = await fetch(`http://localhost:10018/wp-json/acf/v3/options/options/`);
  let globalData = await resGlobalData.json()
  globalData = globalData.acf

  appProps.pageProps = {
    globalData
  }

  return {...appProps}
}

export default MyApp