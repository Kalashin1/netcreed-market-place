import Layout from "./Layout";
import CheckoutComponent from "../Components/Checkout";
import HomeBanner from "../Components/Home-Banner";
import { FC } from 'react'

const Checkout: FC = () => {
  return (
    <Layout>
      <>
      
        <HomeBanner />
        <CheckoutComponent />
      </>
    </Layout>
  )
}

export default Checkout;