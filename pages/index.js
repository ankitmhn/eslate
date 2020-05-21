import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/pic01.jpg')` }}
          >
            <header className="major">
              <h3>Teach</h3>
              <p>
                Empower teachers to deliver their lessons over the internet.
              </p>
            </header>
            <Link href="/teach">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic02.jpg')` }}
          >
            <header className="major">
              <h3>Control</h3>
              <p>
                Control student logins and configure access to lessons based on
                student progress.
              </p>
            </header>
            <Link href="/control">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}
          >
            <header className="major">
              <h3>Assess</h3>
              <p>
                Ensure learning outcomes by assessing students during in-lesson
                checkpoints
              </p>
            </header>
            <Link href="/assess">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}
          >
            <header className="major">
              <h3>Monitor</h3>
              <p>
                Student performance and attendance, all is taken care of,
                automagically.
              </p>
            </header>
            <Link href="/monitor">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic05.jpg')` }}
          >
            <header className="major">
              <h3>Evaluate</h3>
              <p>
                Evaluate teacher performance using in built dashboard and
                engagement scores.
              </p>
            </header>
            <Link href="/evaluate">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic06.jpg')` }}
          >
            <header className="major">
              <h3>Streamline</h3>
              <p>All your learning management processes at one place.</p>
            </header>
            <Link href="/streamline">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Why Eslate?</h2>
            </header>
            <p>
              Our efforts are directed at reproducing an online version of your
              offline school. Every student is given a distinct account based on
              registration number, thereby assuring the teachers of traceability
              & cutting down the scope of nuisance that most online classes have
              to negotiate with. Our platform further endeavours to bring in
              accountability into online teaching, as through checkpoints in
              form of questions which pop up on the student's screens after
              intervals determined by the teacher, do no determine the level of
              engagement but also help in ensuring that the students remain
              present through the whole period of the class. Apart from live &
              recorded classes, the platform also provides a unique 'semi-live'
              feature, where in the teacher can pre record the session & play it
              during the class while herself using the time at hand to draw more
              involvement from the students. We understand & acknowledge, that a
              teacher's role is not just restricted to injecting into the
              students, the content provided in the text books, but also to
              assess & contribute in enhancing communication skills,
              vocabularly, critical thinking, scientific aptitude, areas which
              s/he can devote adequate attention to, via our semi live classes.
            </p>
            <ul className="actions">
              <li>
                <Link href="/landing">
                  <a className="button next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
