const { sleep }  = require ('./Sleep');

async function delayPrint() {
  await sleep(1000);
  return 'Delayed print';
}

describe('Sleep function', () => {
  it('should return a string after delay', async () => {
    const delay = await delayPrint();
    expect(delay).toBe('Delayed print');
  });
  it('should return a promise', () => {
    expect(sleep(1000)).resolves;
  });
});