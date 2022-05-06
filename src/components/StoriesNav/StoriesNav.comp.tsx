import React, { FC } from 'react';
import './StoriesNav.scss';

export type IStoriesNavProps = {};

export const StoriesNavDefaultProps = {};

export const StoriesNavNamespace = 'StoriesNav';

const StoriesNav: FC<IStoriesNavProps> = () => {
  const listStory = [
    {
      id: 1,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'thomijasir',
    },
    {
      id: 5,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'galuutama',
    },
    {
      id: 2,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'susantowijayanto',
    },
    {
      id: 3,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'larasatibudiono',
    },
    {
      id: 4,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'anharsiharamtea',
    },
    {
      id: 6,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'anharsiharamtea',
    },
    {
      id: 7,
      url: 'https://picsum.photos/seed/picsum/100/100',
      username: 'anharsiharamtea',
    },
  ];
  return (
    <div className="stories-nav-comp">
      {listStory.map((data: any) => (
        <div className="story-item" key={data.id}>
          <div className="story-col">
            <img src={data.url} alt={`story of ${data.username}`} />
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
