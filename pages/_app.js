import Layout from "../components/layout/Layout";
import "../styles/globals.css";

/* ROOT COMPONENT 

  if we wrap Component with a specific layout, all apges will recieve it.

  Something that will affect all pages, use this 
*/

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
