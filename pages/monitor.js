import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerMonitor";

export default () => (
  <Layout>
    <Head>
      <title>Monitor</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>FREEING TEACHERS OF LOAD OF ATTENDANCE</h2>
            </header>
            <p>
              Doing away with the tedious practice of teachers manually taking
              the attendance, as our in built system provides the school with
              attendance calculated on the basis of highly reliable student
              login data. The ‘Checkpoint’ response data too at the disposal of
              the institution, thereby keeping them informed of the level of
              engagement in each of the lectures. Helping the teachers
              channelize their time & energy towards their core responsibility,
              i.e. imparting education
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
