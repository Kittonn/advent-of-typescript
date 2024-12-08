const createRoute = <Route>(author: string, route: Route) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
