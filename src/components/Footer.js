import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';

import grid from '../styles/grid.module.css';
import css from './Footer.module.css';

const Footer = ({ siteTitle, withSidebar }) => {
  const intl = useIntl();
  return (
    <footer
      className={classnames(css.root, grid.grid, {
        [css.withSidebar]: withSidebar,
      })}>
      <div className={classnames(grid.col, css.contactWrapper)}>
        <h3>{intl.formatMessage({ id: 'contactUs' })}</h3>
        <p>{intl.formatMessage({ id: 'contactUsDescription' })}</p>
        <a href="mailto:foundation@processing.org">foundation@processing.org</a>
      </div>
      <div className={classnames(grid.col, css.socialmediaWrapper)}>
        <ul>
          <li>
            <a href={'https://twitter.com/ProcessingOrg'}>Twitter</a>
          </li>
          <li>
            <a href={'https://medium.com/@ProcessingOrg'}>Medium</a>
          </li>
          <li>
            <a href={'https://www.instagram.com/processingorg/'}>Instagram</a>
          </li>
          <li>
            <a href={'http://github.com/processing/'}>GitHub</a>
          </li>
        </ul>
        <span
          className={classnames(css.span)}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'footer' }),
          }}></span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
