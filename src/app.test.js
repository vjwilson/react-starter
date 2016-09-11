import chai from 'chai';
chai.should();

describe('Our first test', () => {
  it('should pass', () => {
    const veritas = true;

    veritas.should.be.true;
  });
});
