import { FC } from "react";
import Layout from "./Layout";
import HomeBanner from '../Components/Home-Banner';
import SinglePageProduct from "../Components/Single-Product";
import ProductDescription from "../Components/Product-Description";

const ProductPage: FC = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <SinglePageProduct />
        <ProductDescription />
      </>
    </Layout>
  )
}

export default ProductPage;