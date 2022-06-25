//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HappyApes is ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("HappyApes", "HAPP") {}

    function mint(address to)
        public
        returns (uint256)
    {
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);
        _tokenIds.increment();
        return newTokenId;
    }
}