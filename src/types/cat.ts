export type CatTemper = 'playful' | 'calm' | 'curious' | 'sleepy';

export interface Cat {
  id: number;
  name: string;
  age: number;
  temper: CatTemper;
  imageUrl: string;
  rescuedAt: string;
  traits: string[];
}

export interface ShelterState {
  property: {
    foo: {
      bar: {
        baz: string;
      };
    };
  };
  stats: {
    available: {
      cats: number;
    };
  };
}
