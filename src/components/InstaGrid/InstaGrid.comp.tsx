import React, { FC } from 'react';
import './InstaGrid.scss';

export type IInstaGridProps = {};

export const InstaGridDefaultProps = {};

export const InstaGridNamespace = 'InstaGrid';

const InstaGrid: FC<IInstaGridProps> = () => {
  const randomMize = () => Math.floor(Math.random() * 100);

  const listGridCollection = () => {
    const collection = [];
    for (let t = 0; t < 50; t += 1) {
      collection.push(
        <div key={`key-${t}`} className="col-grid">
          <img
            src={`https://picsum.photos/id/${randomMize()}/300/300.webp`}
            alt="Feed head"
            onError={(e: any) => {
              // Image Fallback
              e.target.src = 'https://picsum.photos/id/10/300/300.webp';
            }}
          />
        </div>,
      );
    }

    return collection;
  };
  // Component InstaGrid
  return <div className="insta-grid-comp">{listGridCollection()}</div>;
};

InstaGrid.displayName = InstaGridNamespace;
InstaGrid.defaultProps = InstaGridDefaultProps;
export default React.memo(InstaGrid);
