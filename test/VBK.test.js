const VBK = artifacts.require('VBKToken');
contract('VBKToken', accounts => {
  let token;
  const creator = accounts[0];
  beforeEach(async function () {
    token = await VBK.new({ from: creator });
  });
  it('has a name', async function () {
    const name = await token.name();
    assert.equal(name, 'VBKToken');
  });
  it('has a symbol', async function () {
    const symbol = await token.symbol();
    assert.equal(symbol, 'VBK');
  });
  it('has 18 decimals', async function () {
    const decimals = await token.decimals();
    assert.equal(decimals, 18);
  });
  it('assigns the initial total supply to the creator', async function () {
    const totalSupply = await token.totalSupply();
    const creatorBalance = await token.balanceOf(creator);
    assert(creatorBalance.eq(totalSupply));
  });
});
