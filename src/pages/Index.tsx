import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Features from "../Components/Feature";
import FeaturedProduct from "../Components/Featured-Product";
import OfferArea from "../Components/Offer-Area";
import NewProduct from "../Components/New-Product";
import InspiredProduct from "../Components/Inspired-Product";
import BlogSection from "../Components/Blog-Section";
import { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <Top />
      <Header />
      <Features />
      <FeaturedProduct />
      <OfferArea />
      <NewProduct />
      <InspiredProduct />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Index;