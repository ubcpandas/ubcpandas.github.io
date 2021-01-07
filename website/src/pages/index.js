import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import successStories from '../data/successStories';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
            src={useBaseUrl('img/nn2.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('ubcpandas/introduction')}>
              Get Started&nbsp;&nbsp;→
            </Link>
          </div>
          <div className="margin-top--lg">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=yangshun&amp;repo=tech-interview-handbook&amp;type=star&amp;count=true&amp;size=large"
              frameBorder={0}
              scrolling={0}
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </div>
        </div>
      </header>
      <div>
        
        <div className={classnames('margin-vert--lg', 'padding-vert--lg')}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <h2
                  className={classnames(
                    'text--center',
                    'margin-bottom--xl',
                    styles.sectionTitle,
                  )}>
                  TL; DR
                </h2>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>Who?</h3>
                    <p>
                    Achinth, Adel, Ahnaf, Aishwarya and Vanessa: a bunch of UBC students who wanted to fill this niche with 💖 and 🧠.
                    </p>
                  </div>
                  <div className="col">
                    <h3>What?</h3>
                    <p>
                    We're a design org, club and an advocacy group and a bunch of chums who really love to have fun with DS and ML.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Where?</h3>
                    <p>
                    Come Sept. 2020, we're gonna meet in person on campus. Until then, check out our socials for more Zoom events 🎥 !
                    </p>
                  </div>
                </div>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>When?</h3>
                    <p>
                    Your computers. Kaggle. Google Colab. Medium. Python venvs. R-Studio. Your 🧠. Probably some room on the UBC Campus.
                    </p>
                  </div>
                  <div className="col">
                    <h3>How?</h3>
                    <p>
                    Stay tuned over the next few months to find out more as we substantiate ourselves as a real club and design organization.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Why?</h3>
                    <p>
                    There wasn't a student org which fostered the growth of data scientists and ML engineers. We wanna change that.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(
            'margin-vert--lg',
            'padding-vert--lg',
            styles.sectionAlt,
          )}>
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h2
                  className={classnames(
                    'margin-vert--lg',
                    'text--center',
                    styles.sectionTitle,
                  )}>
                  Stories
                </h2>
                {successStories.map((user) => (
                  <div className="card margin-vert--lg" key={user.name}>
                    <div className="card__body">
                      <p className={styles.quote}>"{user.quote}"</p>
                    </div>
                    <div className="card__header">
                      <div className="avatar">
                        <img className="avatar__photo" src={user.thumbnail} />
                        <div className="avatar__intro">
                          <h4 className="avatar__name">{user.name}</h4>
                          <small className="avatar__subtitle">
                            {user.title}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(
            'margin-vert--lg',
            'padding-vert--lg',
            'text--center',
          )}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2
                  className={classnames(
                    'margin-vert--lg',
                    styles.sectionTitle,
                  )}>
                  Enjoying what you see so far?
                </h2>
                <p className={classnames(styles.sectionTagline)}>
                  Support this design team by becoming a sponsor! Your logo/profile
                  picture will show up here with a link to your website, and you will be forever commemorated on our
                  yearly merchandise!
                </p>
                <div>
                  <a
                    href="https://opencollective.com/tech-interview-handbook/sponsor/0/website"
                    target="_blank">
                    
                  </a>
                  <a
                    href="https://opencollective.com/tech-interview-handbook/sponsor/1/website"
                    target="_blank">
                  </a>
                </div>
                <div className="margin-vert--lg">
                  <a
                    className="button button--primary button--lg"
                    href="https://opencollective.com/"
                    rel="noreferrer noopener"
                    target="_blank">
                    Become a sponsor!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
