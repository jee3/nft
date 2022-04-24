import Header from '@/components/header';
import * as React from 'react';

import content from './content';

import './index.less';

export default () => {
  const [targetOffset, setTargetOffset] = React.useState<number | undefined>(
    undefined,
  );

  React.useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  const [currentTab, setCurrentTab] = React.useState(0);

  const renderTabs = (tabs, current, changeTab) => {
    return tabs.map((item, index) => {
      return (
        <button
          key={item.index}
          className={current === index ? 'active' : 'normal'}
          onClick={() => {
            changeTab(index);
          }}
        >
          {item.name}
        </button>
      );
    });
  };

  const changeTab = (item) => {
    console.log(777, item);
    setCurrentTab(item);
  };

  const tabs = [
    { index: 0, name: 'INTRODUCE' },
    { index: 1, name: 'CONCEPT' },
    { index: 2, name: 'TEAM' },
  ];

  const showContent = (index) => {
    console.log(777, index);
    switch (index) {
      case 0:
        return <div>{content[index]}</div>;
      case 1:
        return <div>{content[index]}</div>;
      case 2:
        return <div>{content[index]}</div>;
      default:
        break;
    }
  };

  return (
    <div className="theatre">
      <Header />
      <div className="main">
        <div className="left">
          <div className="left-text">{showContent(currentTab)}</div>
          <div className="left-btns">
            {renderTabs(tabs, currentTab, changeTab)}
          </div>
        </div>
        <div className="right">
          <img src="" />
        </div>
      </div>
    </div>
  );
};
