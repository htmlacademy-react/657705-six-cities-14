function capitalizeFirstCharacter(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function getPluralEnding(length: number) {
  return length > 1 ? 's' : '';
}

export { capitalizeFirstCharacter, getPluralEnding };
