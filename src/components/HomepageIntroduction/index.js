import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export default function HomepageIntroduction() {
    return (
        <section className={styles.section_main}>
            <div className={clsx('container padding-vert--lg', styles.intro_main)}>
                <h2 className={clsx('', styles.intro_heading)}>What is Headless Ecommerce?</h2>
                <p className={styles.intro_description}>Headless ecommerce is a new approach to ecommerce that separates the front-end (user interface) from the back-end (database and logic). By using a headless approach, you have the freedom to design and develop the front-end of your online store however you want, without being limited by the constraints of traditional ecommerce platforms.</p>
            </div>
        </section>
    )
}