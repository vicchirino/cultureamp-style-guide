// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'affirmative' | 'informative' | 'warning' | 'negative',
  title: string,
  children: React.Node,
  autohide?: false | true | 'hideCloseIcon',
  onHide?: () => void,
|};

const ToastNotification = (props: Props) => {
  const persistent = props.autohide === 'hideCloseIcon';
  return (
    <GenericNotification
      style="toast"
      persistent={persistent}
      type={props.type}
      title={props.title}
      autohide={Boolean(props.autohide)}
      onHide={props.onHide}
    >
      {props.children}
    </GenericNotification>
  );
};

export default ToastNotification;
