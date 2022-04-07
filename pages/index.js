import Media from "../components/Media";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { Wrapper } from "./ui";
import InspirationsSection from "../components/InspirationsSection";
import ShopInfo from "../components/ShopInfo";
import OfferInfo from "../components/OfferInfo";
import HeroSection from "../components/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Landing page</title>
        <meta name='description' content='landing page' />
      </Head>
      <HeroSection />
      <InfoSection />
      <ShopInfo />
      <InspirationsSection />
      <OfferInfo />
      <Media />
      <Footer />
    </Wrapper>
  );
}
