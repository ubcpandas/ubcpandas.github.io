import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Who?',
    imageUrl: '',
    description: (
      <>
        Achinth, Adel, Ahnaf, Aishwarya and Vanessa: a bunch of UBC students who wanted to fill this niche with 💖 and 🧠.
      </>
    ),
  },
  {
    title: 'What?',
    imageUrl: '',
    description: (
      <>
        We're a design org, club and an advocacy group and a bunch of chums who really love to have fun with DS and ML.
      </>
    ),
  },
  {
    title: 'When?',
    imageUrl: '',
    description: (
      <>
        Come Sept. 2020, we're gonna meet in person on campus. Until then, check out our socials for more Zoom events 🎥 !
      </>
    ),
  },
  {
    title: 'Where?',
    imageUrl: '',
    description: (
      <>
       Your computers. Kaggle. Google Colab. Medium. Python venvs. R-Studio. Your 🧠. Probably somewhere on the UBC Campus.
      </>
    ),
  },
  {
    title: 'How?',
    imageUrl: '',
    description: (
      <>
        Stay tuned over the next few months to find out more as we substantiate ourselves as a real club and design organization.
      </>
    ),
  },
  {
    title: 'Why?',
    imageUrl: '',
    description: (
      <>
       There wasn't a student org which fostered the growth of data scientists and ML engineers. We wanna change that.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
          </div> 

          <div className={styles.buttons}>
            <Link   
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="https://opencollective.com/ubc-pandas/">
              Like what you see? Become a sponsor! →
            </Link>
            </div>

          </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
