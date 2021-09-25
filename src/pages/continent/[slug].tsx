import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { AxiosError, AxiosResponse } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import { PageHeader } from "../../components";
import { api } from "../../services/api";

interface CitiesTop {
  rank: number;
  image: string;
  city: string;
  country: string;
  flag: string;
}

interface Continent {
  id: number;
  name: string;
  slogan: string;
  image: string;
  route: string;
  details: {
    image: string;
    resume: string;
    countries: number;
    languages: number;
    citiesTop100: number;
    citiesTop5: CitiesTop[];
  };
}

interface InfoTextProps {
  text: string;
  number: number | undefined;
}
const InfoText: FC<InfoTextProps> = ({ number, text }) => (
  <Box textAlign={{ base: "left", xl: "center" }}>
    <Text
      color="#FFBA08"
      fontWeight={600}
      fontSize={{ base: "24px", xl: "48px" }}
      lineHeight={{ base: "36px", xl: "72px" }}
    >
      {number}
    </Text>
    <Text
      fontWeight={{ base: 400, xl: 600 }}
      fontSize={{ base: "18px", xl: "24px" }}
      lineHeight={{ base: "27px", xl: "36px" }}
    >
      {text}
    </Text>
  </Box>
);

export default function Continent() {
  const router = useRouter();
  const { slug } = router.query;

  const [continent, setContinent] = useState<Continent>();
  const toast = useToast();

  const getContinentsApi = useCallback(async () => {
    await api
      .get<Continent[]>(`/continent/${slug}`)
      .then((response: AxiosResponse) => {
        const { data } = response;
        setContinent(data);
      })
      .catch((error: AxiosError) => {
        toast({
          title: "Error",
          description: "Não foi possível recuperar os dados da servidor",
          status: "error",
        });
      });
  }, [toast]);

  useEffect(() => {
    getContinentsApi();
  }, [getContinentsApi]);

  return (
    <>
      <Head>
        <title>Word Trip</title>
      </Head>
      <Box as="main">
        <PageHeader navigation="/" />

        <Box
          backgroundSize="cover!important"
          backgroundRepeat="no-repeat"
          background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/static/${continent?.image})`}
          boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
          border="1px solid #000000"
          h={{ base: "372px", xl: "500px" }}
          display="flex"
          alignItems={{ base: "center", xl: "flex-end" }}
          justifyContent={{ base: "center", xl: "flex-start" }}
        >
          <Text
            color="#F5F8FA"
            fontWeight={600}
            fontSize="28px"
            lineHeight="42px"
            margin={{ xl: "0 0 60px 140px" }}
          >
            {continent?.name}
          </Text>
        </Box>

        <Box
          margin="auto"
          maxW={{ base: "343px", xl: "1160px" }}
          padding={{ base: "24px 0", xl: "80px 0" }}
          display={{ base: "block", xl: "flex" }}
          alignItems={{ xl: "center" }}
        >
          <Box flexBasis={{ base: "100%", xl: "50%" }}>
            <Text
              fontSize={{ base: "14px", xl: "24px" }}
              lineHeight={{ base: "21px", xl: " 36px" }}
              textAlign="justify"
              maxWidth="600px"
            >
              {continent?.details.resume}
            </Text>
          </Box>
          <Box
            flexBasis={{ base: "100%", xl: "50%" }}
            margin={{ base: "16px 0" }}
          >
            <Flex justifyContent="space-between" maxW="490px" m="auto">
              <InfoText number={continent?.details.countries} text="países" />
              <InfoText number={continent?.details.languages} text="línguas" />
              <InfoText
                number={continent?.details.citiesTop100}
                text="cidades +100"
              />
            </Flex>
          </Box>
        </Box>

        <Box margin="auto" maxW={{ base: "343px", xl: "1160px" }}>
          <Text fontWeight={600} fontSize="24px" lineHeight="36px" mb="20px">
            Cidades +100
          </Text>
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{ base: "center", xl: "start" }}
          >
            {continent?.details.citiesTop5.map((item, index) => (
              <Box
                key={item.city}
                background="#FFFFFF"
                border=" 1px solid rgba(255, 186, 8, 0.5)"
                borderRadius="4px"
                overflow="hidden"
                m={{
                  base: "0 0 20px 0",
                  xl: `0 ${(index + 1) % 4 === 0 ? "0" : "45px"} 48px  0`,
                }}
                w="256px"
              >
                <Box
                  background={`url(/static/${item.image})`}
                  backgroundSize="cover"
                  borderRadius="4px 4px 0px 0px"
                  height="173px"
                  w="100%"
                />
                <Box
                  p="18px 24px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Text
                      fontWeight={600}
                      fontSize="20px"
                      lineHeight="25px"
                      mb="12px"
                    >
                      {item.city}
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize="16px"
                      lineHeight="26px"
                      color="#999999"
                    >
                      {item.country}
                    </Text>
                  </Box>
                  <img src={`/static/${item.flag}`} alt={item.city} />
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
