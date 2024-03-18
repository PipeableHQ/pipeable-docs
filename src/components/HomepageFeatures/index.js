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
        Harness the power of the Pipeable SDK with seamless integration across both iOS and (soon) Android platforms.
      </>
    ),
  },

  {
    title: 'Universal Automation',
    Svg: require('@site/static/img/home_robot.svg').default,
    description: (
      <>
        Build automations that leverage the document object model (DOM) and can do anything that a user can do, unrestricted by the absence or limitations of APIs.
      </>
    ),
  },
  {
    title: 'Broad Compatibility',
    Svg: require('@site/static/img/home_masks.svg').default,
    description: (
      <>
        Leverage Pipeable's compatibility with Puppeteer and Playwright to utilize the same automation code on both cloud and client platforms.
      </>
    ),
  },
  {
    title: 'Seamless Authentication',
    Svg: require('@site/static/img/home_unlocked.svg').default,
    description: (
      <>
        Empower users to effortlessly sign into websites using their preferred auth methods, such as FaceID or TouchID. The tight integration between webviews and mobile OSes eliminates the need for manual credential entry or explicit sharing.
      </>
    ),
  },
  {
    title: 'Client and Cloud',
    Svg: require('@site/static/img/home_cloud.svg').default,
    description: (
      <>
        Execute automations entirely on the client for better privacy and security. Or offer users an option to continue the session in the cloud for better convenience and more flexibility.
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
