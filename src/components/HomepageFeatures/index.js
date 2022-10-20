import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Introduction",
    Svg: require("@site/static/img/intro_posbytz.svg").default,
    description: (
      <>
        Whether you're building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.
      </>
    ),
  },
  {
    title: "How it works",
    Svg: require("@site/static/img/work_pos.svg").default,
    description: (
      <>
        Every resource is exposed as a URL. The URL of each resource can be obtained by accessing the API Root Endpoint.
      </>
    ),
  },
  {
    title: "Easy to use",
    Svg: require("@site/static/img/easy-pos.svg").default,
    description: (
      <>
        Posbytz API is built using latest features. Its helps clients easy to interact with the API.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
       
      </div>
    </section>
  );
}
