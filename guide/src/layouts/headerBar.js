import React from 'react';
import Icon from 'cultureamp-style-guide/components/Icon';
import { ExternalLink, ActionLink } from 'components/Link';
import hamburgerIcon from 'cultureamp-style-guide/icons/hamburger.svg';
import diamond from './diamond.svg';
import styles from './headerBar.module.scss';

const HeaderBar = ({ toggleNav }) => (
  <div className={styles.headerBar}>
    <ActionLink action={() => toggleNav()}>
      <span className={styles.hamburgerIcon}>
        <Icon icon={hamburgerIcon} type="img" title="Expand Menu" />
      </span>
    </ActionLink>
    <ExternalLink to="https://github.com/cultureamp/component-library">
      Download Style Guide
      <span className={styles.downloadIcon}>
        <Icon icon={diamond} type="presentation" />
      </span>
    </ExternalLink>
  </div>
);

export default HeaderBar;
