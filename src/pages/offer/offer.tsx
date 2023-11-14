import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import OfferContent from '../../components/offer-content/offer-content';
import Loading from '../../components/loading/loading';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOffer } from '../../store/offers/offers-selector';
import { fetchOffer } from '../../store/offers/offers-action';
import { dropOffer } from '../../store/offers/offers-slice';

//TODO: Доделать вывод.Создайте новый компонент «Форма отправки комментария». Разметку для компонента вы найдёте в файле offer.html. Реализуйте сохранение введённых в форму данных в state компонента.

function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();
  const offer = useAppSelector(selectOffer);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>
      <main className="page__main page__main--offer">
        <Loading>
          {offer && <OfferContent offer={offer} />}
        </Loading>
      </main>
    </div>
  );
}

export default Offer;
