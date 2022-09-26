import Top from "../Components/Top"
import HomeBanner from "../Components/Home-Banner"
import CategoryProducts from "../Components/Category-Products"
import Footer from "../Components/Footer"
import { FC } from "react"

const Category: FC = () => {
  return (
    <>
      <Top />
      <HomeBanner />
      <CategoryProducts />
      <Footer />
    </>
  )
}

export default Category;