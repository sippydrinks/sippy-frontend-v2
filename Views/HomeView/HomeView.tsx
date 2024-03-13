'use client';
import { Hero, Catalog } from "@/components/Home";
import { Carousel, Slider, SoftDrinksCard, AlcoholicDrinksCard, MobileAppWidget } from "@/shared";
import { DrinkTypeProps } from "@/interface/home";

const HomeView = ({type}: DrinkTypeProps) => {
  const slides = [1, 2, 3]
  return (
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

export default HomeView