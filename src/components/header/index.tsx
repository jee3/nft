import './index.less';

import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Ins } from '@/assets/ins.svg';
import { ReactComponent as Dis } from '@/assets/dis.svg';

const homepage = () => {
  return (
    <div className="header">
      <button>HOMEPAGE</button>
      <button>THE THEATRE</button>
      <button>PAST RELEASE</button>
      <button>BOX OFFICE</button>
      <button>COLLECT</button>
      <button>COMMUNITY</button>
      <div className="header-link">
        <Twitter className="header-link-item twitter" height={25} width={25} />
        <Ins className="header-link-item ins" height={25} width={25} />
        <Dis className="header-link-item dis" height={25} width={25} />
      </div>
    </div>
  );
};

export default homepage;
