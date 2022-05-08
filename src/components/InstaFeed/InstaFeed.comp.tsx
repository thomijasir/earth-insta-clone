import React, { FC, useCallback, useMemo } from 'react';
import DOT_ICON from '../../assets/icons/dot-icon.svg';
import HEART_ICON from '../../assets/icons/heart-icon.jpg';
import COMMENT_ICON from '../../assets/icons/comment-icon.svg';
import SEND_ICON from '../../assets/icons/send-icon.jpg';
import BOOKMARK_ICON from '../../assets/icons/bookmark-icon.svg';
import './InstaFeed.scss';

export type IInstaFeedProps = {};

export const InstaFeedDefaultProps = {};

export const InstaFeedNamespace = 'InstaFeed';

const InstaFeed: FC<IInstaFeedProps> = () => {
  const randomMize = () => Math.floor(Math.random() * 100);

  const memoizeFeedHead = useMemo(
    () => (
      <div className="feed-head">
        <div className="col-feed-head">
          <img src="https://picsum.photos/50/50.webp" alt="Feed head" />
        </div>
        <div className="col-feed-head username">thomijasir</div>
        <div className="col-feed-head">
          <img src={DOT_ICON} alt="ICON DOT" />
        </div>
      </div>
    ),
    [],
  );

  const memoizeFeedContent = useCallback(
    (randomImageId: number) => (
      <div className="feed-content">
        <img
          src={`https://picsum.photos/id/${randomImageId}/375/380.webp`}
          alt="Feed head"
          onError={(e: any) => {
            // Image Fallback
            e.target.src = 'https://picsum.photos/id/10/375/380.webp';
          }}
        />
      </div>
    ),
    [randomMize()],
  );

  const memoizeFeedActions = useMemo(
    () => (
      <div className="feed-actions">
        <div className="feed-actions-icons">
          <div className="col-action">
            <img src={HEART_ICON} alt="heart icon" />
          </div>
          <div className="col-action">
            <img src={COMMENT_ICON} alt="comment icon" />
          </div>
          <div className="col-action">
            <img src={SEND_ICON} alt="send icon" />
          </div>
          <div className="col-action">
            <img src={BOOKMARK_ICON} alt="bookmark icon" />
          </div>
        </div>
        <div className="feed-attractions">
          <b>10.000</b> likes
        </div>
      </div>
    ),
    [],
  );

  const memoizeFeedComment = useMemo(
    () => (
      <div className="feed-comments">
        <div className="summary-comment">
          <b>thomijasir</b> Webkit browsers, such as Chrome, Safari and Opera,
          supports the non-standard ::-webkit-scrollbar pseudo element, which
          allows us to modify the look of the browser scrollbar.
        </div>
        <div className="view-comment">View all 125 comments</div>
      </div>
    ),
    [],
  );

  const listFeedCollection = () => {
    const collection = [];
    for (let t = 0; t < 25; t += 1) {
      collection.push(
        <div key={`key-${t}`} className="feed-item">
          {memoizeFeedHead}
          {memoizeFeedContent(randomMize())}
          {memoizeFeedActions}
          {memoizeFeedComment}
        </div>,
      );
    }

    return collection;
  };

  return <div className="insta-feed-comp">{listFeedCollection()}</div>;
};

InstaFeed.displayName = InstaFeedNamespace;
InstaFeed.defaultProps = InstaFeedDefaultProps;
export default React.memo(InstaFeed);
