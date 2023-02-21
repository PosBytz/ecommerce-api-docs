import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
import Link from '@docusaurus/Link';

export default function Storefront() {
    return (
        <section className={clsx('padding-top--lg padding-bottom--xl', styles.storefront_main)}>
            <div className={clsx('container')}>
                <div className='row'>
                    <div className='col col--6 padding-bottom--lg'>
                        <h2 className={clsx('', styles.storefront_heading)}>Ecommerce Storefront Demo</h2>
                        <p className={clsx('padding-bottom--md', styles.storefront_description)}>An open-source storefront in Vue.js with Nuxt.js. Built for Headless ecommerce, using a modern stack with Posbytz and Tailwind CSS.</p>
                        <div>
                            <Link href='https://github.com/posbytz/ecommerce-nuxt-demo' className={clsx('button button--secondary', styles.storefront_button)}>Nuxt 3 Storefront Repo</Link>
                            <Link href='https://ecommerce-demo.posbytz.com/' className={clsx('button button--primary', styles.storefront_button)}>View Storefront Demo</Link>
                        </div>
                    </div>
                    <div className='col col--6'>
                        <h2 className={clsx('', styles.storefront_heading)}>Join our waiting list</h2>
                        <p className={clsx('padding-bottom--md', styles.storefront_description)}>Our team will get in touch with you to setup headless ecommerce using PosBytz admin</p>
                        <Link href='https://getwaitlist.com/waitlist/5224' className={clsx('button button--primary', styles.button_signup)}>Join Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}