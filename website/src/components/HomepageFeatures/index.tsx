import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tinkercad',
    Svg: require('@site/static/img/tinkercad.svg').default,
    description: (
      <>
        Design and simulate circuits with common microcontrollers.
      </>
    ),
  },
  {
    title: 'ATmega324P/328P',
    Svg: require('@site/static/img/path11622.svg').default,
    description: (
      <>
        Commonly used microcontrollers (such as the Arduino Uno). 
        Allows to run custom code and control various electronic components in projects.
      </>
    ),
  },
  {
    title: 'KiCad',
    Svg: require('@site/static/img/KiCad.svg').default,
    description: (
      <>
        Design boards ready for production and prototyping.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
