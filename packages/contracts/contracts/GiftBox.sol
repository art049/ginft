//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GiftBox is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => address) private _gifter;
    mapping(uint256 => bool) private _isOpened;
    mapping(uint256 => bool) private _isRevealed;
    mapping(uint256 => address) private _revealedTokenContract;
    mapping(uint256 => uint256) private _revealedTokenId;


    constructor() ERC721("GiftBox", "GFT") {}

    function mint(address giftee)
        public
        returns (uint256)
    {
        uint256 newGiftId = _tokenIds.current();
        _mint(giftee, newGiftId);
        // _setTokenURI(newGiftId, tokenURI);
        _gifter[newGiftId] = msg.sender;
        _tokenIds.increment();
        return newGiftId;
    }

    function open(uint256 tokenId) public {
        require(msg.sender == ownerOf(tokenId));
        require(!_isOpened[tokenId], "The gift has already been opened");
        _isOpened[tokenId] = true;
    }

    function reveal(uint256 tokenId, address reveraledTokenContract, uint256 revealedTokenId) public {
        require(msg.sender == _gifter[tokenId]);
        require(_isOpened[tokenId], "The gift has not been opened yet");
        require(!_isRevealed[tokenId], "The gift has already been revealed");
        address giftee = ownerOf(tokenId);
        IERC721(reveraledTokenContract).safeTransferFrom(msg.sender, giftee, revealedTokenId);
        _isRevealed[tokenId] = true;
        _revealedTokenContract[tokenId] = reveraledTokenContract;
        _revealedTokenId[tokenId] = revealedTokenId;
    }
}