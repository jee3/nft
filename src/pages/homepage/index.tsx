import Header from '@/components/header';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

import './index.less';

export default () => {
  const targetTime = dayjs('2023-01-01');

  const [now, setNow] = useState<Dayjs>();

  const durationTime = targetTime.diff(now);

  const hours = parseInt(
    String((durationTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    10,
  );

  const minutes = parseInt(
    String((durationTime % (1000 * 60 * 60)) / (1000 * 60)),
    10,
  );

  const seconds = Math.floor(durationTime / 1000) % 60;

  const minutes = durationTime / 1000 / 60;
  console.log(222, hours, minutes, seconds);
  // const days = dayjs.duration().days();
  // const secs = dayjs().hour(diff);

  useEffect(() => {
    setInterval(() => {
      setNow(dayjs());
    }, 100000);
  }, []);

  return (
    <div className="homepage">
      <Header />
      <div className="count-down">
        <div className="number-container"></div>
        <div className="number-container">
          <div className="big-number">{hours}</div>
          <div className="unit">HRS</div>
        </div>
        <div className="number-container"></div>
        <div className="number-container"></div>
      </div>
    </div>
  );
};
