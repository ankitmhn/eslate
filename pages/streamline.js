import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerStreamline";

export default () => (
  <Layout>
    <Head>
      <title>STREAMLINE</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
            </header>
            <p>
              A platform that houses your school, digitally. An organized
              response to all your online education related problems. Easier for
              the institution to monitor & control, as one web address leads the
              school administration to all the activities taking place under its
              banner.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
