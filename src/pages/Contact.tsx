import Layout from "./Layout";
import ContactForm from "../Components/Contact-Form";
import HomeBanner from "../Components/Home-Banner";

const Contact = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <ContactForm />
      </>
    </Layout>
  )
}

export default Contact;