import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PrimaryButton } from "src/components/Button";
import { useGiftBox } from "src/hooks/useGiftBox";
import Layout from "../../../components/Layout";

const RevealPage: NextPage = () => {
  const router = useRouter();
  const { unwrap } = useGiftBox();
  console.log(router.query);
  return (
    <Layout>
      <VStack>
        <PrimaryButton
          onClick={() => unwrap(router.query.giftId, router.query.secret)}
        >
          Open Gift
        </PrimaryButton>
      </VStack>
    </Layout>
  );
};

export default RevealPage;
