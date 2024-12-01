type SantaListProtector<T> = T extends object
  ? T extends Function
    ? T
    : {
        readonly [K in keyof T]: SantaListProtector<T[K]>;
      }
  : T;
