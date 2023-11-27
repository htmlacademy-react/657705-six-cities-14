function capitalizeFirstCharacter(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function getPluralEnding(length: number) {
  return length > 1 ? 's' : '';
}

function getRandomIntegerFromRange(a: number, b: number) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrElement<T>(array: T[] | ReadonlyArray<T>): T {
  return array[getRandomIntegerFromRange(0, array.length - 1)];
}

export { capitalizeFirstCharacter, getPluralEnding, getRandomArrElement };
