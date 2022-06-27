export const fakeAuth = (): Promise<string> => {
  return new Promise<string>((resolve) =>
    setTimeout(() => resolve("2389d8998-83298ds8fd98-dsf8787f7s"), 250)
  );
};
