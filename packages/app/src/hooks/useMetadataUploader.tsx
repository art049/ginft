import { staticConfig } from "src/config";
import { uploadObjectToIpfs } from "src/util";

interface PartialGiftMetadata {
  name: string;
  description: string;
  image: string;
}

export interface GiftMetadata extends PartialGiftMetadata {
  external_url: string;
}

const useMetadataUploader = (partialMeta: PartialGiftMetadata) => {
  const meta: GiftMetadata = {
    ...partialMeta,
    description: partialMeta + "\nA gift built with GiNFT.",
    external_url: staticConfig.frontBaseUrl,
  };
  const cid = await uploadObjectToIpfs(meta);
};
