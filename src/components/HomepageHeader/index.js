import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { sampleCode } from './sampleCode';
import React from 'react';

function SampleCode() {
  return (
    <div>
      <SyntaxHighlighter language="swift" style={tomorrow}>
        {sampleCode}
      </SyntaxHighlighter>
    </div>
  )
}

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>(
        <div className={clsx(styles.heroRow)}>
          <div className={clsx('col col--4')}>
            <video playsInline loop muted controls className={clsx(styles.iosVideo)}>
              <source src="demo_video_ios.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={clsx('col col--8', 'code')}>
            <SampleCode />
          </div>
        </div>
        )
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://calendly.com/deyan-vitanov/30min">
            Book a meeting with us!
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://forms.gle/i8C7F3zcuizWkien7">
            Get the latest updates!
          </Link>
        </div>
      </div>
    </header>
  );
}