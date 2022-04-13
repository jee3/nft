import * as React from 'react';
import { Layout } from 'antd';
import { connect, Redirect, Route, Switch } from 'umi';

import Headbar from '@/components/Headbar';

import './index.less';

const { Header, Content } = Layout;

const setRoute = (item) => {
  if (item.children) {
    return item.children.map((child) => {
      return setRoute(child);
    });
  }
  return <Route {...item} />;
};

const MainPageLayout: React.FC = (props) => {
  //   const menuData = getCurrentMenuData(
  //     props.location,
  //     props.route,
  //     props.currentUser.role.is_admin,
  //   ).filter((data) => !data.hideInMenu);

  //   let contentDom = null;

  //   console.log(111, props.location, props.route, menuData);

  //   const menuChildren = menuData[0].children[0];

  //   if (menuData.length !== 0) {
  //     contentDom = (
  //       <Switch>
  //         {menuData.map((group) => setRoute(group))}
  //         <Redirect to={menuChildren.children ? menuChildren.children[0].path : menuChildren.path} />
  //       </Switch>
  //     );
  //   }

  return (
    <Layout>
      <Header>
        <Headbar {...props} />
      </Header>
      <Layout hasSider>
        <Content
          style={{
            padding: '0 20px',
            background: '#ffffff',
          }}
        >
          {/* {contentDom} */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;
