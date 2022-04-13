import * as React from 'react';
import { IRouteComponentProps } from 'umi';

import Logo from './Logo';
import RightContent from './RightContent';

import './style/index.less';

const Headbar: React.FC<IRouteComponentProps> = (props) => {
  const currentDefafultApp =
    props.location?.pathname.split('/')[1] || 'console';

  const [currentApp, setCurrentApp] =
    React.useState<string>(currentDefafultApp);

  return (
    <div className="headbar-container">
      <Logo />
      <RightContent
        {...props}
        currentApp={currentApp}
        onChange={setCurrentApp}
      />
    </div>
  );
};

export default Headbar;
