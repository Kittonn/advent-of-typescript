type FindSanta<T> = T extends [...infer First, infer Last]
  ? Last extends "🎅🏼"
    ? First["length"]
    : FindSanta<First>
  : never;
