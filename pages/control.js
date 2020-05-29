import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerControl";

export default () => (
  <Layout>
    <Head>
      <title>CONTROL</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Advanced features so you control the platform</h2>
            </header>
            <p>
              
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
