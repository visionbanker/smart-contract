pragma solidity ^0.5.9;
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';

contract VBKToken is ERC20, ERC20Detailed {
  uint8 public constant DECIMALS = 18;
  uint256 public constant INITIAL_SUPPLY = 2500000000 * (10 ** uint256(DECIMALS));

  constructor () public ERC20() ERC20Detailed("VBKToken", "VBK", DECIMALS) {
    _mint(msg.sender, INITIAL_SUPPLY);
  }
}
