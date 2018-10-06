export const promiseResolve = data =>
  new Promise((resolve, reject) => {
    resolve(data);
    reject(err => {
      throw new Error(err, " error");
    });
  });

export default promiseResolve;
