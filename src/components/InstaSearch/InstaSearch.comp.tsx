import React, { FC, useCallback, useId, useTransition } from 'react';
import FIND_ICON from '../../assets/icons/find-icon.png';
import './InstaSearch.scss';

export type IInstaSearchProps = {};

export const InstaSearchDefaultProps = {};

export const InstaSearchNamespace = 'InstaSearch';

const InstaSearch: FC<IInstaSearchProps> = () => {
  // Component InstaSearch
  const [isPendingSearch, concurenShearch] = useTransition();
  const gId = useId();
  const handleOnChange = useCallback(() => {
    concurenShearch(() => {
      // TODO: Doing something when search
    });
  }, []);
  return (
    <div className="insta-search-comp">
      <div className="search-icon">
        <img src={FIND_ICON} alt="Find Icon" />
      </div>
      <div className="search-input-box">
        <input
          id={`input-${gId}`}
          name="search"
          onChange={handleOnChange}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

InstaSearch.displayName = InstaSearchNamespace;
InstaSearch.defaultProps = InstaSearchDefaultProps;
export default React.memo(InstaSearch);
