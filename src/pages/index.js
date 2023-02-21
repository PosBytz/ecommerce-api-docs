import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Ecommerce from '@site/src/components/Ecommerce'
import HomepageIntroduction from '@site/src/components/HomepageIntroduction'
import styles from './index.module.css';
import Storefront from '@site/src/components/Storefront';
import posbytzImage from '../../static/img/posbytz.png'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className={clsx('col col--6 padding-vert--lg', styles.header_main)}>
            <div>
              <h1 className={clsx('hero__title', styles.header_title)}>Unlock the Power of Headless Commerce</h1>
              <p className={clsx('hero__subtitle', styles.header_subtitle)}>Streamline your ecommerce operations with our customizable headless solution.</p>
              <Link
                className={clsx('button button--primary button--lg button--outline', styles.header_button)}
                to="/ecommerce-api-docs/docs">
                View Documentation
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6 header_main', styles.header_main)}>
            <img src={posbytzImage}></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Revolutionize your e-commerce strategy with our headless commerce solutions. Enjoy the flexibility and scalability of a decoupled system, without sacrificing speed or security. Discover how our headless commerce platform can transform your online store today.">
      <HomepageHeader />
      <main>
        <HomepageIntroduction />
        <Ecommerce />
        <HomepageFeatures />
        <Storefront />
      </main>
    </Layout>
  );
}
