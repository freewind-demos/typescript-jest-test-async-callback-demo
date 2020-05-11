import add from './add';

describe('test', () => {
  it('1+2 === 3', (done) => {
    function callback(result: number) {
      expect(result).toBe(3);
      done();
    }

    add(1, 2, callback);
  })
})
