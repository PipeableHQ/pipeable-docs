import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'WebView Mastery',
    Svg: require('@site/static/img/home_knobs.svg').default,
    description: (
      <>
        Gain unprecedented programmatic control over in-app embedded browsers, also known as webviews.
      </>
    ),
  },
  {
    title: 'Cross-Platform SDK',
    Svg: require('@site/static/img/home_phone.svg').default,
    description: (
      <>
        Pipeable is a powerful SDK designed with developers in mind, offering seamless integration for both iOS and Android.
      </>
    ),
  },
  //Leverage the power of client-side web automations in your mobile apps. 
  {
    title: 'In-App Automation',
    Svg: require('@site/static/img/home_robot.svg').default,
    description: (
      <>
        Compatible with Playwright and Puppeteer, Pipeable offers advanced web automation capabilities right from your mobile app.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
