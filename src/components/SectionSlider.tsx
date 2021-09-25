import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { AxiosError, AxiosResponse } from "axios";
import Router from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../services/api";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Continent {
  id: number;
  name: string;
  slogan: string;
  image: string;
  route: string;
}

const SectionSlider: FC = () => {
  const [sliders, setSliders] = useState<Continent[]>([]);
  const toast = useToast();

  const getContinentsApi = useCallback(async () => {
    await api
      .get<Continent[]>("/continents")
      .then((response: AxiosResponse) => {
        const { data } = response;
        setSliders(data);
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

  function handleRouter(name: string) {
    Router.push(`/continent/${name}`);
  }

  return (
    <Box as="section" pt={{ base: "24px", xl: "52px" }}>
      <Box mb={{ base: "20px", xl: "52px" }}>
        <Text as="h1" color="brand.headingText" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Box>

      <Box
        maxW={{ base: "100%", xl: "1240px" }}
        margin="auto"
        pb={{ base: "24px", xl: "40px" }}
      >
        <Swiper
          pagination={{ clickable: true }}
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
          {sliders.map((item) => (
            <SwiperSlide key={item.id} onClick={() => handleRouter(item.route)}>
              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                h={{ base: "250px", xl: "450px" }}
                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${item.image})`}
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "24px", xl: "48px" }}
                  color="brand.headings"
                >
                  {item.name}
                </Text>

                <Text
                  fontWeight="bold"
                  fontSize={{ base: "14px", xl: "24px" }}
                  color="brand.infoLight"
                >
                  {item.slogan}
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default SectionSlider;
