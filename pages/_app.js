import { AnimateSharedLayout } from "framer-motion";
import { GlobalStyle } from "../styles/GlobalStyle";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AnimateSharedLayout type='crossfade'>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
