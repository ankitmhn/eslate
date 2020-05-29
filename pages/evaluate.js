import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerEvaluate";

export default () => (
  <Layout>
    <Head>
      <title>EVALUATE</title>
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
            Checkpoint scores as the means of incentivizing teachers to draw
              more engagement from the students.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
