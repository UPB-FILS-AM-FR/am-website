import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/lab">
            Get Started
          </Link>
          <br></br><span> &nbsp;&nbsp;&nbsp;  </span>
          <Link
            className="button button--secondary button--lg"
            to="https://curs.upb.ro/2024/course/view.php?id=10156">
            Moodle Page
          </Link>
          <br></br><span> &nbsp;&nbsp;&nbsp;  </span>
          <Link
            className="button button--secondary button--lg"
            to="https://teams.microsoft.com/l/channel/19%3Ae4hGjDKs-EhSr2a__dGX3WWqS0UPuyWZWOQZMaOs38U1%40thread.tacv2/General?groupId=81361826-0003-4f22-9b86-6a341a893f92&tenantId=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac">
            Teams Group
          </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <Layout

      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
