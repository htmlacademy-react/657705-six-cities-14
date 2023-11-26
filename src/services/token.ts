const AUTH_TOKEN_NAME = 'six-cities';

type Token = string;

function getToken(): Token {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
}

function saveToken(token: Token): void {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
}

function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_NAME);
}

export {getToken, saveToken, dropToken};
