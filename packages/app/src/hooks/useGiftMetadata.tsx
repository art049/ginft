import { GiftBox__factory } from "@ginft/contracts/dist/typechain";
import axios from "axios";
import { useEffect, useState } from "react";
import { staticConfig } from "src/config";
import { NFTMetadata } from "src/interfaces";
import { useWallet } from "./useWallet";

interface GiftKey {
  secret: string;
  giftId: string;
}

export const useGiftMetadata = () => {
  const [giftKey, setGiftKey] = useState<GiftKey>();
  const [metadata, setMetadata] = useState<NFTMetadata>();
  const [loading, setLoading] = useState<boolean>(false);
  const wallet = useWallet();
  useEffect(() => {
    if (!wallet.isWalletConnected || !giftKey) return;
    setLoading(true);
    (async function () {
      console.log("Starting query");
      const giftBoxAddress = staticConfig.contracts.GiftBox.address;
      const giftBox = GiftBox__factory.connect(giftBoxAddress, wallet.signer);
      const tokenURI = await giftBox.tokenURI(giftKey.giftId);
      const res = await axios.get(
        `https://ipfs.io/ipfs/${tokenURI.slice("ipfs://".length)}`
      );
      console.log(res);
      setMetadata(res.data);
      setLoading(false);
    })();
  }, [giftKey, wallet.isWalletConnected]);
  return { setGiftKey, loading, metadata };
};
