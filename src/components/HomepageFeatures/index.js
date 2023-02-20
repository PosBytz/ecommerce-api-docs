import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React JS',
    Svg: require('@site/static/img/react.svg').default,
  },
  {
    title: 'Vue JS',
    Svg: require('@site/static/img/vue.svg').default,
  },
  {
    title: 'Nuxt JS',
    Svg: require('@site/static/img/nuxt.svg').default,
  },
  {
    title: 'Next JS',
    Svg: require('@site/static/img/next.svg').default,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3 padding-bottom--md')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx('padding-top--lg', styles.features, styles.section_background)}>
      <div className="container">
        <div className="row">
          <h2 className={clsx('', styles.feature_title)}>PosBytz headless commerce is well suited for any Frontend Frameworks</h2>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
