import Layout from "./Layout"
import CartComponent from "../Components/Cart"
import HomeBanner from "../Components/Home-Banner"

const Cart = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <CartComponent />
      </>
    </Layout>
  )
}

export default Cart;