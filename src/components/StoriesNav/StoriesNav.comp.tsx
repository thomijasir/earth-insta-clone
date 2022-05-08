import React, { FC, useState, useMemo } from 'react';
import Stories from 'react-insta-stories';
import './StoriesNav.scss';

export type IStoriesNavProps = {};

export const StoriesNavDefaultProps = {};

export const StoriesNavNamespace = 'StoriesNav';

const StoriesNav: FC<IStoriesNavProps> = () => {
  const randomMize = () => Math.floor(Math.random() * 100);
  const [openStory, setOpenStory] = useState<boolean>(false);
  const listStory = useMemo(
    () => [
      {
        id: 1,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'Your story',
        active: false,
      },
      {
        id: 5,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'galuutama',
        active: true,
      },
      {
        id: 2,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'susantowijayanto',
        active: true,
      },
      {
        id: 3,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'larasatibudiono',
        active: true,
      },
      {
        id: 4,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'anharsiharamtea',
        active: true,
      },
      {
        id: 6,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'anharsiharamtea',
        active: true,
      },
      {
        id: 7,
        url: `https://picsum.photos/id/${randomMize()}/100/100`,
        username: 'anharsiharamtea',
        active: true,
      },
    ],
    [],
  );

  const handleOpenStory = (storyId: number) => () => {
    document.head
      .querySelector('[name="theme-color"]')
      ?.setAttribute('content', 'rgb(17, 17, 17)');
    setOpenStory((prevState) => !prevState);
  };

  const handleEndStory = () => {
    document.head
      .querySelector('[name="theme-color"]')
      ?.setAttribute('content', '#FFF');
    setOpenStory((prevState) => !prevState);
  };

  return (
    <div className="stories-nav-comp">
      {openStory && (
        <div key={`${openStory}`} className="main-story">
          <Stories
            onAllStoriesEnd={handleEndStory}
            stories={[
              { url: `https://picsum.photos/id/${randomMize()}/450/800` },
              { url: `https://picsum.photos/id/${randomMize()}/450/800` },
              { url: '/resources/reels/thomi-dancing.mp4', type: 'video' },
            ]}
            defaultInterval={4000}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
      )}
      {listStory.map((data: any) => (
        <div
          className="story-item"
          key={data.id}
          onClick={handleOpenStory(data.id)}
        >
          <div className="story-col">
            <div
              className={`wrapper-image-story ${data.active ? 'active' : ''}`}
            >
              <img
                src={data.url}
                alt={`story of ${data.username}`}
                onError={(e: any) => {
                  // Image Fallback
                  e.target.src = 'https://picsum.photos/id/10/100/100';
                }}
              />
            </div>
          </div>
          <div className="story-col">{data.username}</div>
        </div>
      ))}
    </div>
  );
};

StoriesNav.displayName = StoriesNavNamespace;
StoriesNav.defaultProps = StoriesNavDefaultProps;
export default React.memo(StoriesNav);
