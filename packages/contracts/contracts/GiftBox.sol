//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

struct NFT {
  address tokenContract;
  uint256 tokenId;
}

contract GiftBox is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  mapping(uint256 => address) private _gifter;
  mapping(uint256 => bool) private _isOpened;
  mapping(uint256 => address) private _revealedTokenContract;
  mapping(uint256 => uint256) private _revealedTokenId;
  mapping(address => mapping(uint256 => address)) private _nftOwner;
  mapping(bytes32 => NFT) private _NFTByUnlockingSecret;

  event GiftMinted(address sender, address giftee, uint256 tokenId);

  constructor() ERC721("GiftBox", "GFT") {}

  function mint(address giftee) public returns (uint256) {
    uint256 newGiftId = _tokenIds.current();
    _mint(giftee, newGiftId);
    // _setTokenURI(newGiftId, tokenURI);
    _gifter[newGiftId] = msg.sender;
    _tokenIds.increment();
    emit GiftMinted(msg.sender, giftee, newGiftId);
    return newGiftId;
  }

  function totalSupply() public view returns (uint256) {
    return _tokenIds.current();
  }

  function bytesToBytes32(bytes calldata b) public pure returns (bytes32) {
    bytes32 out;
    for (uint256 i = 0; i < 32; i++) {
      out |= bytes32(b[i] & 0xFF) >> (i * 8);
    }
    return out;
  }

  function onERC721Received(
    address, /*operator*/
    address from,
    uint256 tokenId,
    bytes calldata data
  ) external returns (bytes4) {
    bytes32 hashedSecret = bytesToBytes32(data);
    address tokenContract = msg.sender;
    _nftOwner[tokenContract][tokenId] = from;
    _NFTByUnlockingSecret[hashedSecret] = NFT({
      tokenContract: tokenContract,
      tokenId: tokenId
    });
    return IERC721Receiver.onERC721Received.selector;
  }

  function pickupNFT(address tokenContract, uint256 tokenId) public {
    address owner = _nftOwner[tokenContract][tokenId];
    require(owner == msg.sender);
    IERC721(tokenContract).safeTransferFrom(address(this), msg.sender, tokenId);
    delete _nftOwner[tokenContract][tokenId];
  }

  function open(uint256 giftId, bytes32 secret) public {
    require(msg.sender == ownerOf(giftId), "You don't own this gift");
    require(!_isOpened[giftId], "The gift has already been opened");
    bytes32 hashedSecret = keccak256(abi.encodePacked(giftId, secret));
    NFT memory claim = _NFTByUnlockingSecret[hashedSecret];
    IERC721(claim.tokenContract).safeTransferFrom(
      address(this),
      msg.sender,
      claim.tokenId
    );
    _isOpened[giftId] = true;
    delete _NFTByUnlockingSecret[hashedSecret];
    delete _nftOwner[claim.tokenContract][claim.tokenId];
  }
}
