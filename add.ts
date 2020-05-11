export default function asyncAdd(a: number, b: number, callback: (result: number) => void): void {
  new Promise<number>(resolve => {
    resolve(a + b);
  }).then(result => callback(result));
};
