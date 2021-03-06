// @flow
import * as React from 'react';
import GenericNotification from './components/GenericNotification';
import type { NotificationType } from './components/GenericNotification';

type Props = {|
  type: NotificationType,
  title: string,
  children: React.Node,
  autohide: boolean,
  hideCloseIcon: boolean,
  onHide?: () => void,
  automationId?: string,
|};

const ToastNotification = ({ hideCloseIcon, ...otherProps }: Props) => {
  const persistent = otherProps.autohide && hideCloseIcon;
  return (
    <GenericNotification
      style="toast"
      persistent={persistent}
      {...otherProps}
    />
  );
};

ToastNotification.defaultProps = {
  autohide: false,
  hideCloseIcon: false,
};

export default ToastNotification;
