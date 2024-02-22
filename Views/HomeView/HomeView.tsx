'use client';
import { useState, useEffect } from "react";
import { PreLoader } from "@/shared/loaders";
import { Hero, Catalog } from "@/components/Home";
import { Carousel, Slider, SoftDrinksCard, AlcoholicDrinksCard, MobileAppWidget } from "@/shared";
import { DrinkTypeProps } from "@/interface/home";

const HomeView = ({type}: DrinkTypeProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])
  const slides = [1, 2, 3]
  return (
    <>
      {
        loading ? (
          <PreLoader />
        ) : (
          <>
            <Hero type={type} />
            <Carousel 
              title='categories'
              icon1='/svgs/starGreen.svg'
              icon2='/svgs/StarOrange.svg'
              isBorder
            />
            {type === 'soft' ? <SoftDrinksCard /> : <AlcoholicDrinksCard />}
            <Slider slides={slides} />
            <Catalog type={type} />
            <MobileAppWidget />
          </>
        )
    }
    </>
  )
}

export default HomeView