import { FormEvent, MouseEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { fetchPostLoginAction } from '../../store/user/user-action';
import { getRandomArrElement } from '../../utils/utils';
import { AppRoute, cities } from '../../const';
import { TCityName } from '../../types/city';
import { changeCity } from '../../store/offers/offers-slice';

function Login() {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = getRandomArrElement(cities);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispath(
        fetchPostLoginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  const handleCityClick = (
    e: MouseEvent<HTMLAnchorElement>,
    city: TCityName
  ) => {
    e.preventDefault();
    dispath(changeCity({ city }));
    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--login">
      <Header>
        <Logo />
      </Header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleFormSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a
                onClick={(e) => handleCityClick(e, randomCity)}
                className="locations__item-link"
                href="#"
              >
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
