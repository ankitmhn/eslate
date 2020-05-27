import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerStreamline";

export default () => (
  <Layout>
    <Head>
      <title>Streamline</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2></h2>
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
        <section id="two" className="spotlights">
          <section>
            <Link href="/generic">
              <a className="image">
                <img src="/static/images/pic08.jpg" alt="" />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a className="image">
                <img src="/static/images/pic09.jpg" alt="" />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a className="image">
                <img src="/static/images/pic10.jpg" alt="" />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3></h3>
                </header>
                <p>
                  
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
);
