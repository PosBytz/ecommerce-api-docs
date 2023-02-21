import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function Ecommerce() {
    return (
        <section className={styles.section_main}>
            <div className={clsx('container padding-vert--lg',)}>
                <div className='row'>
                    <div className={clsx('col col--6', styles.ecommerce_main)}>
                        <h2 className={clsx('', styles.ecommerce_title)}>Why Choose Our Headless Commerce Software?</h2>
                        <p className={clsx('hero__subtitle', styles.ecommerce_description)}>Our ecommerce software is built to give you the flexibility you need to create a unique ecommerce experience. With our customizable API-driven architecture, you can integrate any front-end platform and keep your ecommerce data separate from your presentation layer.</p>
                    </div>
                    <div className='col col--6'>
                        <h1 className={clsx('', styles.ecommerce_title)}>How Our Headless Ecommerce Solution Can Benefit You</h1>
                        <p className={clsx('', styles.ecommerce_description)}>By adopting our headless ecommerce solution, you can:</p>
                        <ul className=''>
                            <li>Create a faster, more scalable online store that can handle higher traffic volumes.</li>
                            <li>Provide a more personalized shopping experience for your customers.</li>
                            <li>Integrate new technologies and third-party services easily.</li>
                            <li>Increase conversions and boost sales.</li>
                        </ul>
                        <Link href="https://posbytz.com/" className={clsx('button button--primary button--md', styles.ecommmerce_buttons, styles.header_button_media)}>Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
