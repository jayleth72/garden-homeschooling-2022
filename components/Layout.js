import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@styles/Layout.module.scss";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Garden Home School",
  keywords: "homeschooling, nature, natural learning",
  description: "Sustainable learning programs"
};
