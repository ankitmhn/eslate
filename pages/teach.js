import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerTeach";

export default () => (
  <Layout>
    <Head>
      <title>TEACH</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>How do we augment learning delivery?</h2>
            </header>
            <p>
              A special demo session to ensure that the teachers are armed with
              the required technological understanding to smoothly conduct
              classes digitally. Video tutorials to further aid in getting the
              teachers acquainted with the features offered by us. Addressing
              the issue posed by dearth of two way communication, one of the key
              challenges of online teaching, through our additional ‘semi-live’
              feature. Pre-recorded sessions controlled by teachers during the
              course of a live class, to enable them to effectively engage with
              the students.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
