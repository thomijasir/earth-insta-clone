import React, { FC } from 'react';
import './StoriesNav.scss';

export type IStoriesNavProps = {};

export const StoriesNavDefaultProps = {};

export const StoriesNavNamespace = 'StoriesNav';

const StoriesNav: FC<IStoriesNavProps> = () => {
  const randomMize = () => Math.floor(Math.random() * 100);

  const listStory = [
    {
      id: 1,
      url: `https://picsum.photos/id/${randomMize()}/100/100`,
      username: 'thomijasir',
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
  ];

  return (
    <div className="stories-nav-comp">
      {listStory.map((data: any) => (
        <div className="story-item" key={data.id}>
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
