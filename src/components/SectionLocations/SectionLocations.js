import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import AtlantaImage from './images/location_mall.jpg';
import MiamiImage from './images/location_stripmall.jpg';
import LasVegasImage from './images/location_foodcourt.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Atlanta',
          AtlantaImage,
          '?address=Atlanta%2C%20Georgia%2C%20United%20States&bounds=33.918863%2C-84.243656%2C33.586921%2C-84.632649'
        )}
        {locationLink(
          'Miami',
          MiamiImage,
          '?address=Miami%2C%20Florida%2C%20United%20States&bounds=25.979434%2C-80.144468%2C25.515125%2C-80.8736'
        )}
        {locationLink(
          'Las Vegas',
          LasVegasImage,
          '?address=Las%20Vegas%2C%20Nevada%2C%20United%20States&bounds=36.853605%2C-114.66724%2C35.836893%2C-115.895753'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
