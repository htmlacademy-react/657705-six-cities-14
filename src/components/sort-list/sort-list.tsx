import cn from 'classnames';

import { useEffect, useState } from 'react';
import { SortType } from '../../const';
import { TSortType, TSortTypeLabel } from '../../types/sort';
import { TOffer } from '../../types/offer';

type TSortListProps = {
  offers: TOffer[];
  onChange: (sortType: TSortType) => void;
}

//TODO: Доделать закрытие при клике вне окна
function SortList({offers, onChange}: TSortListProps) {
  const [activeSortType, setActiveSortType] = useState<TSortTypeLabel>(SortType.Popular);
  const [isOpened, setIsOpened] = useState(false);

  const handleTypeClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleTypeItemClick = (sortType: TSortType) => {
    setActiveSortType(SortType[sortType]);
    onChange(sortType);
    setIsOpened(false);
  };

  useEffect(() => {
    setActiveSortType(SortType.Popular);
  }, [offers]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={handleTypeClick}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': isOpened
        })}
      >
        {
          (Object.entries(SortType) as [TSortType, TSortTypeLabel][])
            .map(([type, label]) => (
              <li
                key={type}
                onClick={() => handleTypeItemClick(type)}
                className={cn('places__option', {
                  'places__option--active': activeSortType === label
                })}
                tabIndex={0}
              >
                {label}
              </li>
            ))
        }
      </ul>
    </form>
  );
}

export default SortList;
