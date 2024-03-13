'use client';
import { ProductCard, Carousel } from "../../../shared";
import { ProductData } from '@/mock';
import { DrinkTypeProps } from "@/interface/home";
import { useGlobalContext } from "@/contexts/AppContext";
import styles from './Hero.module.scss'
import { ChartLoader } from '@/shared/loaders';
import { ProductCardProps } from "@/interface";

const Hero = ({type}: DrinkTypeProps) => {
  return (
    <>
        <Carousel 
            title='recommended'
            icon1='/svgs/StarYellow.svg'
            icon2='/svgs/StarOrange.svg'
            isBorder
        />
        <div className={styles.hero_container}>
            {ProductData && ProductData.length > 0 ? (
                ProductData.slice(0, 4).map((product: ProductCardProps, index: number) => (
                    <ProductCard key={index} {...product} />
                ))
            ) : (
                <ChartLoader />
            )}
        </div>
	</>
  )
}

export default Hero