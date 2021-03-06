// @flow
import * as React from 'react';
import Icon from '../../Icon';
import successIcon from 'cultureamp-style-guide/icons/success.svg';
import exclamationIcon from 'cultureamp-style-guide/icons/exclamation.svg';
import infoIcon from 'cultureamp-style-guide/icons/information.svg';
import closeIcon from 'cultureamp-style-guide/icons/close.svg';
import styles from './GenericNotification.module.scss';
import classnames from 'classnames';

export type NotificationType =
  | 'affirmative'
  | 'informative'
  | 'cautionary'
  | 'negative';

type Props = {|
  type: NotificationType,
  style: 'global' | 'inline' | 'toast',
  children: React.Node,
  title?: string,
  persistent: boolean,
  autohide: boolean,
  onHide?: () => void,
  automationId?: string,
|};

type State = {
  hidden: boolean,
  removed: boolean,
};

class GenericNotification extends React.Component<Props, State> {
  state = {
    hidden: true,
    removed: false,
  };
  container: ?Element;

  componentDidMount() {
    requestAnimationFrame(() => this.setState({ hidden: false }));

    if (this.props.style === 'toast' && this.props.autohide) {
      setTimeout(() => this.hide(), 5000);
    }
  }

  render() {
    if (this.state.removed) {
      return null;
    }
    return (
      <div
        className={this.className()}
        style={{ marginTop: this.marginTop() }}
        ref={div => (this.container = div)}
        onTransitionEnd={e => this.onTransitionEnd(e)}
        data-automation-id={this.props.automationId}
      >
        <div className={styles.icon}>
          <Icon icon={this.iconType()} role="presentation" inheritSize />
        </div>
        <div className={styles.textContainer}>
          {this.props.title && (
            <h6 className={styles.title}>{this.props.title}</h6>
          )}
          <p className={styles.text}>{this.props.children}</p>
        </div>
        {!this.props.persistent && <CancelButton onClick={() => this.hide()} />}
      </div>
    );
  }

  className(): string {
    return classnames(
      styles.notification,
      styles[this.props.type],
      styles[this.props.style],
      {
        [styles.hidden]: this.state.hidden,
      }
    );
  }

  marginTop(): ?string {
    if (this.state.hidden && this.container) {
      return -this.container.clientHeight + 'px';
    }
  }

  onTransitionEnd(e: TransitionEvent) {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (this.state.hidden && e.propertyName === 'margin-top') {
      this.setState({ removed: true });
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }

  iconType() {
    switch (this.props.type) {
      case 'affirmative':
        return successIcon;
      case 'negative':
        return exclamationIcon;
      case 'cautionary':
        return exclamationIcon;
      case 'informative':
        return infoIcon;
      default:
        return infoIcon;
    }
  }

  hide() {
    this.setState({ hidden: true });
  }

  static defaultProps = {
    persistent: false,
    autohide: false,
  };
}

const CancelButton = ({ onClick }) => (
  <button className={styles.cancel} type="button" onClick={onClick}>
    <span className={styles.cancelInner}>
      <Icon icon={closeIcon} role="img" title="close notification" />
    </span>
  </button>
);

export default GenericNotification;
