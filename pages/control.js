import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerControl";

export default () => (
  <Layout>
    <Head>
      <title>Control</title>
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
                  <h3>Sed nunc ligula</h3>
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
