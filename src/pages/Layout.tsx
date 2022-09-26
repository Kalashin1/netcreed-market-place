import Top from "../Components/Top";
import Footer from "../Components/Footer";
import { FC } from 'react';

type Props = {
  children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Top />
      { children }
      <Footer />
    </>
  )
}

export default Layout;