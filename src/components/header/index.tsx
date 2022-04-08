import { history } from 'umi';

import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Ins } from '@/assets/ins.svg';
import { ReactComponent as Dis } from '@/assets/dis.svg';
import { ReactComponent as LogoBlack } from '@/assets/logo_black.svg';

import './index.less';

const homepage = () => {
  const goRoute = (key) => {
    history.push(`/${key}`);
  };

  return (
    <div className="header">
      <div className="header-left">
        <LogoBlack height={42} width={80} />
      </div>
      <div className="header-right">
        <button
          onClick={() => {
            goRoute('homepage');
          }}
        >
          HOMEPAGE
        </button>
        <button
          onClick={() => {
            goRoute('the-theatre');
          }}
        >
          THE THEATRE
        </button>
        <button
          onClick={() => {
            goRoute('past-release');
          }}
        >
          PAST RELEASE
        </button>
        <button
          onClick={() => {
            goRoute('box-office');
          }}
        >
          BOX OFFICE
        </button>
        <button
          onClick={() => {
            goRoute('collect');
          }}
        >
          COLLECT
        </button>
        <button
          onClick={() => {
            goRoute('community');
          }}
        >
          COMMUNITY
        </button>
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

export default homepage;
