type StreetSuffixTester<
  T extends string,
  E extends string
> = T extends `${infer Prefix}${E}` ? true : false;
