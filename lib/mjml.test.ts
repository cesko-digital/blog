// We can’t test the mailing code easily for now, since one of the modules we use,
// unified, is an ES module and can’t be processed by Jest without a load of crap.
// We could probably twist the infrastructure so it works, but it’s not worth it;
// let’s wait for the dust to settle down and write the tests later. Details:
// https://github.com/facebook/jest/issues/9430
export {};
