type DecipherNaughtyList<T> = T extends `${infer First}/${infer Rest}`
  ? First | DecipherNaughtyList<Rest>
  : T;
