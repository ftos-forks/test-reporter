import parse, {LcovFile} from 'lcov-parse'

const parseProm = (pathOrStr: string): Promise<LcovFile[]> => {
  return new Promise((resolve, reject) => {
    parse(pathOrStr, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data ?? []);
    });
  });
};

export {parseProm}
