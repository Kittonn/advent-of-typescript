type List = readonly unknown[]
type SantasList<BadList extends List, GoodList extends List> = [...BadList, ...GoodList];
