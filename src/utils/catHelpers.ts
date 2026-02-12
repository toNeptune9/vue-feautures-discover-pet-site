import type { Cat, CatTemper } from '../types/cat';

export const shelterMotto = 'Любовь, забота и мурчание каждый день' as const;

export function formatAge(age: number): string {
  const yearWord = age === 1 ? 'год' : age < 5 ? 'года' : 'лет';
  return `${age} ${yearWord}`;
}

export function temperLabel(temper: CatTemper): string {
  const labels: Record<CatTemper, string> = {
    playful: 'Playful',
    calm: 'Calm',
    curious: 'Curious',
    sleepy: 'Sleepy'
  };

  return labels[temper];
}

export function sortByAge(cats: Cat[]): Cat[] {
  return [...cats].sort((left, right) => left.age - right.age);
}
