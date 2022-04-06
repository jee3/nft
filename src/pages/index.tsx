import * as React from 'react';

const firstPage = () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      <video autoPlay controls width="320" height="240" muted>
        <source src="../assets/firstPage.mp4" type="video/mp4" />
      </video>

      <div>23333</div>
    </div>
  );
};

export default firstPage;
