import * as React from 'react';
import { IRouteComponentProps } from 'umi';
import { Menu } from 'antd';
import { Link } from 'umi';

import './RightContent.less';

const { Item } = Menu;

interface RightContentProps extends IRouteComponentProps {
  currentApp: string;
  onChange: (identifier: string) => void;
}

const RightContent: React.FC<RightContentProps> = (props) => {
  const { currentApp, onChange } = props;

  // key: '/console';
  // locale: 'menu.console';
  // name: '控制台';
  // path: '/console';

  const menuData = [
    {
      key: '/homepage',
      name: 'HOMEPAGE',
      path: '/homepage',
    },
    {
      key: '/the-theatre',
      name: 'THE THEATRE',
      path: '/the-theatre',
    },
    {
      key: '/past-release',
      name: 'PAST RELEASE',
      path: '/past-release',
    },
    {
      key: '/box-office',
      name: 'BOX OFFICE',
      path: '/box-office',
    },
    {
      key: '/collect',
      name: 'COLLECT',
      path: '/collect',
    },
    {
      key: '/community',
      name: 'COMMUNITY',
      path: '/community',
    },
  ];

  const appMenuContent = (
    <Menu
      mode="horizontal"
      theme="dark"
      selectedKeys={[`/${currentApp}`]}
      onClick={({ key }) => {
        if (typeof key === 'string') {
          onChange(key.split('/')[1]);
        }
      }}
    >
      {menuData.map(
        (menu: Record<string, any>) =>
          !menu.hideMenu && (
            <Item key={menu.key}>
              <Link to={menu.path}>{menu.name}</Link>
            </Item>
          ),
      )}
    </Menu>
  );

  return (
    <>
      <div className="com-header-right">{appMenuContent}</div>
    </>
  );
};

export default RightContent;
