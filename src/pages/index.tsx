import * as React from 'react';
import { history } from 'umi';

import './index.less';

export default function IndexPage() {
  React.useEffect(() => {
    setTimeout(() => {
      history.push('/main');
    }, 4500);
  }, []);

  const height = window.innerHeight;
  return (
    <div className="firstpage" style={{ height: height }}>
      <video
        autoPlay
        muted
        loop
        controls
        // playsInline
        // x-webkit-airplay="true"
        // x5-playsinline="true"
        // webkit-playsinline="true"
        // x5-video-player-type="h5"
        width="100%"
        // controlsList="nofullscreen nodownload noremoteplayback"
      >
        <source src="/firstPage.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
