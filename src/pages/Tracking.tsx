import { FC } from "react";
import Layout from "./Layout";
import HomeBanner from "../Components/Home-Banner";
import TrackingComponents from "../Components/Tracking";

const Tracking: FC = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <TrackingComponents />
      </>
    </Layout>
  )
}

export default Tracking;