"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import OneDayForecast from "./OneDayForecast";
import { HourlyData } from "../types";

type ForecastCarouselProps = {
  allDays: HourlyData[]
}

export default function ForecastCarousel({ allDays }: ForecastCarouselProps) {
  return (
    <div className="h-full">
      <Swiper
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: carouselPagination,
        }}
        modules={[Navigation, Pagination]}
        className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background h-full"
      >
        {allDays.map((hourlyData, index) => (
          <SwiperSlide key={index} className="select-none px-12">
            <OneDayForecast hourlyData={hourlyData} />

          </SwiperSlide>
        ))}
        <CarouselNavigation />
      </Swiper>
    </div>
  );
}

function CarouselNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        {'<-'}
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        {'->'}
      </IconButton>
    </>
  );
}

function carouselPagination(_: number, className: string) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}
