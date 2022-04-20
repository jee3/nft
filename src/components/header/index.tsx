import { history } from 'umi';

import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Ins } from '@/assets/ins.svg';
import { ReactComponent as Dis } from '@/assets/dis.svg';
import { ReactComponent as LogoBlack } from '@/assets/logo_black.svg';

import './index.less';
import React from 'react';

const header = (props) => {
  console.log(111, window.location.pathname);
  // const [current, setCurrent] = React.useState('');

  // React.useEffect(() => {
  //   setCurrent(location.pathname.split('/')[1]);
  // }, []);

  const currentPath = location.pathname.split('/')[1];

  const goRoute = (key) => {
    history.push(`/${key}`);
  };

  const buttons = [
    {
      key: 'homepage',
      name: 'HOMEPAGE',
      path: '/homepage',
    },
    {
      key: 'the-theatre',
      name: 'THE THEATRE',
      path: '/the-theatre',
    },
    {
      key: 'space',
      name: 'SPACE',
      path: '/space',
    },
    {
      key: 'past-release',
      name: 'PAST RELEASE',
      path: '/past-release',
    },
    {
      key: 'box-office',
      name: 'BOX OFFICE',
      path: '/box-office',
    },
    {
      key: 'collect',
      name: 'COLLECT',
      path: '/collect',
    },
    {
      key: 'community',
      name: 'COMMUNITY',
      path: '/community',
    },
  ];

  return (
    <div className="header">
      <div className="header-left">
        <LogoBlack height={42} width={80} />
      </div>
      <div className="header-right">
        {buttons.map((button) => (
          <button
            className={
              button.key === currentPath ? 'current-btn' : 'normal-btn'
            }
            onClick={() => {
              goRoute(button.key);
            }}
          >
            {button.name}
          </button>
        ))}
        <span className="header-link">
          <Twitter
            className="header-link-item twitter"
            height={25}
            width={25}
          />
          <Ins className="header-link-item ins" height={25} width={25} />
          <Dis className="header-link-item dis" height={25} width={25} />
        </span>
      </div>
    </div>
  );
};

export default header;
