import React from 'react';
import { ActionLink } from 'components/Link';
import styles from './index.module.scss';
import ColorCard from './_ColorCard.js';

class ColorShowcase extends React.Component {
  state = {
    showAccessibility: {},
  };

  render() {
    return (
      <div className={styles.cardContainer}>
        {this.renderColorSection('Primary Colors', ['Coral', 'Paper', 'Ink'])}
        {this.renderColorSection('Secondary Colors', [
          'Seedling',
          'Ocean',
          'Lapis',
          'Wisteria',
          'Peach',
          'Yuzu',
        ])}
        {this.renderColorSection('Tertiary Colors', [
          'Positive-Delta',
          'Negative-Delta',
          'Stone',
        ])}
      </div>
    );
  }

  renderColorSection(title, colors) {
    const showAccessibility = this.state.showAccessibility[title];
    return [
      <div className={styles.gridHeader} key={title}>
        <h2 className={styles.sectionHeader}>{title}</h2>
        <div className={styles.toggleAccessibilityButton}>
          <ActionLink action={() => this.toggleAccessibility(title)}>
            {showAccessibility
              ? 'Hide Contrast Checker'
              : 'Show Contrast Checker'}
          </ActionLink>
        </div>
      </div>,
      colors.map(color => (
        <ColorCard
          name={color}
          key={color}
          showAccessibility={showAccessibility}
        />
      )),
    ];
  }

  toggleAccessibility(section) {
    let currentValue = this.state.showAccessibility[section];
    this.setState({
      showAccessibility: {
        ...this.state.showAccessibility,
        [section]: !currentValue,
      },
    });
  }
}

export default ColorShowcase;
