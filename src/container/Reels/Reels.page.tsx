import React, { FC, useState, useTransition } from 'react';
import ReactPlayer from 'react-player';
import './Reels.scss';

export interface IProps {}

const Reels: FC<IProps> = () => {
  const reelVideoHeight = window.innerHeight - 67;
  const [reelsPending, reelsTransition] = useTransition();
  const [reels, setReels] = useState([
    {
      id: 1,
      src: '/resources/reels/tallest-man.mp4',
      play: true,
    },
    {
      id: 2,
      src: '/resources/reels/clean-meat.mp4',
      play: false,
    },
    {
      id: 3,
      src: '/resources/reels/biggest-tides.mp4',
      play: false,
    },
    {
      id: 4,
      src: '/resources/reels/thomi-dancing.mp4',
      play: false,
    },
  ]);

  let timerScroll: any;

  const handleSnapScroll = (e: any) => {
    const elem = e.target;
    const getIndex = Math.round(elem.scrollTop / reelVideoHeight);
    clearTimeout(timerScroll);
    timerScroll = setTimeout(() => {
      onSnap(getIndex);
    }, 400);
  };

  const onSnap = (index: number) => {
    reelsTransition(() => {
      setReels((prevState: any) => {
        return prevState.map((item: any, rIndex: number) => ({
          ...item,
          play: index === rIndex,
        }));
      });
    });
  };

  return (
    <div className="col-home home-group reels-page" onScroll={handleSnapScroll}>
      {reels.map((item: any) => (
        <div
          key={item.id}
          className="reels-item"
          style={{ height: reelVideoHeight }}
        >
          <div>
            <ReactPlayer
              width="100%"
              height="100%"
              url={item.src}
              playing={item.play}
              loop
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
