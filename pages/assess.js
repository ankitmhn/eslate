import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerAssess";

export default () => (
  <Layout>
    <Head>
      <title>Assess</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>
                ASSURANCE OF GREATER ENGAGEMENT, COURTESY THE CHECKPOINT FEATURE
              </h2>
            </header>
            <p>
              Checkpoints, at the command of teachers, in form of questions
              which pop up on the students’ screens to assess the latter’s level
              of involvement. With absence of response to the ‘checkpoints’
              assisting teachers in discerning those who sneaked out during the
              period of the lecture, snoozing ceases to remain an option.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
