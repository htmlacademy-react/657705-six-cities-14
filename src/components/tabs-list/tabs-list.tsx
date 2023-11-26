import cn from 'classnames';
import { MouseEvent } from 'react';

import { cities } from '../../const';
import { TCityName } from '../../types/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/offers/offers-slice';
import { selectCity } from '../../store/offers/offers-selector';

function TabsList(): JSX.Element {
  const dispatch = useAppDispatch();

  const activeCity = useAppSelector(selectCity);

  function clickHandler(e: MouseEvent<HTMLAnchorElement>, city: TCityName) {
    e.preventDefault();
    dispatch(changeCity({city}));
  }

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city}
          className="locations__item"
        >
          <a
            onClick={(e) => clickHandler(e, city)}
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active': city === activeCity
            })}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TabsList;
