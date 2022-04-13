import * as React from 'react';

import { ReactComponent as LogoBlack } from '@/assets/logo_black.svg';

import './style/index.less';

const Logo: React.FC = () => {
  return (
    <div className="headbar-logo-container">
      <LogoBlack height={42} width={80} />
    </div>
  );
};

export default Logo;
