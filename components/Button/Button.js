// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon.js';

type Props = {|
  label: String,
  icon?: {
    id: String,
    viewBox: String,
  },
  iconPosition: IconPosition,
  primary: Boolean,
  destructive: Boolean,
  disabled: Boolean,
  form: Boolean,
  reversed: Boolean,
  reverseColor?: 'lapis' | 'ocean' | 'peach' | 'seedling' | 'wisteria' | 'yuzu',
  onClick?: MouseEvent => void,
  href?: String,
  automationId?: String,
|};

type IconPosition = 'start' | 'end';

Button.defaultProps = {
  iconPosition: 'start',
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
};

export default function Button(props: Props) {
  return (
    <span className={styles.container}>
      {props.href ? renderLink(props) : renderButton(props)}
    </span>
  );
}

function renderButton(props: Props) {
  const { disabled, onClick } = props;

  return (
    <button
      disabled={disabled}
      className={buttonClass(props)}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
      data-automation-id={props.automationId}
    >
      {renderContent(props)}
    </button>
  );
}

function renderLink(props: Props) {
  const { href, onClick } = props;

  return (
    <a
      href={href}
      className={buttonClass(props)}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
      data-automation-id={props.automationId}
    >
      {renderContent(props)}
    </a>
  );
}

function buttonClass(props: Props) {
  return classNames(styles.button, {
    [styles.primary]: props.primary,
    [styles.destructive]: props.destructive,
    [styles.form]: props.form,
    [styles.reversed]: props.reversed,
    [styles.reverseColorLapis]: props.reverseColor === 'lapis',
    [styles.reverseColorOcean]: props.reverseColor === 'ocean',
    [styles.reverseColorPeach]: props.reverseColor === 'peach',
    [styles.reverseColorSeedling]: props.reverseColor === 'seedling',
    [styles.reverseColorWisteria]: props.reverseColor === 'wisteria',
    [styles.reverseColorYuzu]: props.reverseColor === 'yuzu',
  });
}

function renderContent(props: Props) {
  return (
    <span className={styles.content}>
      {iconForPosition(props, 'start')}
      <span className={styles.label}>{props.label}</span>
      {iconForPosition(props, 'end')}
    </span>
  );
}

function iconForPosition(
  { icon, iconPosition }: Props,
  position: IconPosition
) {
  if (icon && position === iconPosition) {
    return <Icon icon={icon} role="presentation" />;
  }
}
