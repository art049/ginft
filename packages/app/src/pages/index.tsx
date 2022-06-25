import { Flex, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Portfolio } from "src/components/Portfolio";
import { ClaimableCard } from "src/components/UserStatCard/ClaimableCard";
import { InvitationsCard } from "src/components/UserStatCard/InvitationsCard";
import { PortfolioCard } from "src/components/UserStatCard/PortfolioCard";
import Layout from "../components/Layout";
import { OngoingOffers } from "../components/OngoingOffers";
import { StakedFunds } from "../components/StakedFunds";
import { Ventures } from "../components/Ventures";

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex direction="row" w="100%">
        <Grid
          templateRows={{
            xs: "repeat(6, 1fr)",
            sm: "repeat(5, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          templateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={4}
          w="100%"
        >
          <GridItem
            rowSpan={3}
            colSpan={{
              xs: 1,
              sm: 2,
            }}
          >
            <StakedFunds />
          </GridItem>
          <GridItem colSpan={1}>
            <ClaimableCard />
          </GridItem>
          <GridItem colSpan={1}>
            <PortfolioCard />
          </GridItem>
          <GridItem colSpan={1}>
            <InvitationsCard />
          </GridItem>
        </Grid>
      </Flex>
      <OngoingOffers />
      <Portfolio />
      <Ventures />
    </Layout>
  );
};

export default Home;
