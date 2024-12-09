declare module "santas-special-list" {
  type Status = "naughty" | "nice";
  type Child = {
    name: string;
    status: Status;
  };
  type List = Child[];
}
