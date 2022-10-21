import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About SnapShopz',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Rent high traffic retail space, on your terms.</h1>
          <img className={css.coverImage} src={image} alt="Checkout." />

            <div className={css.contentMain}>
              <h2>
                Malls, Shopping Centers & Food Courts are facing the issue of empty space more than ever, but small local vendors, ecommerce stores and local eateries would love access to those locations without longterm comittments and shoppers would love the variety it could offer. Seems like a benefit to each group? So SnapShopz was born.
              </h2>

              <h3 className={css.subtitle}>Are you a retail location with empty space?</h3>

              <p>
                SnapShopz offers a way to generate cash from that empty space! And why not offer it to small local businesses so they can benefit from high traffic locations
                and rent by the day, week or month!
              </p>
            </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
