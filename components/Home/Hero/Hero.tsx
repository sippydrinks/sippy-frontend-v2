'use client';
import { useState } from "react";
import { ProductCard, Carousel } from "../../../shared";
import { ProductData } from '@/mock';
import { DrinkTypeProps } from "@/interface/home";
import { usePathname } from "next/navigation";
import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
import { ChartLoader } from '@/shared/loaders';
import { ProductCardProps } from "@/interface";
import styles from './Hero.module.scss'

const Hero = ({type}: DrinkTypeProps) => {
    const { theme }: ContextProps = useGlobalContext()
    const [currentPage, setCurrentPage] = useState<number>(1);
	const [isActive, setIsActive] = useState<boolean>(false);
    const route = usePathname()
    const isAlcoholRoute = route.includes('/alcohol')
	const productCardsPerPage = 4;
	const indexOfLastPost = currentPage * productCardsPerPage;
	const indexOfFirstPost = indexOfLastPost - productCardsPerPage;
	const currentPosts = ProductData.slice(indexOfFirstPost, indexOfLastPost);
	const lastPage = Math.ceil(ProductData.slice(0, 12).length / productCardsPerPage);
    const goToPreviousPage = () => {
		currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
		setIsActive(isActive => !isActive);
	};
	const goToNextPage = () => {
		currentPage < lastPage ? setCurrentPage(currentPage + 1) : null;
		setIsActive(isActive => !isActive);
	};
    
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
                currentPosts.map((product: ProductCardProps, index: number) => (
                    <ProductCard key={index} {...product} />
                ))
            ) : (
                <ChartLoader />
            )}
        </div>
        <div className={styles.btns}>
            <div data-active={isActive} data-theme={theme} onClick={goToPreviousPage}
                data-page={currentPage}
                className={styles.left_chevron}
                data-pagenumber={currentPage !== 1}
                data-route={isAlcoholRoute}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill={theme === "light" ? "#1E1E1E" : "#FFFFFF"}
                        d="M20.5596 22.12L14.4396 16L20.5596 9.88L18.6662 8L10.6662 16L18.6662 24L20.5596 22.12Z"
                    />
                </svg>
			</div>
            <div data-active={isActive} data-theme={theme} onClick={goToNextPage}
                className={styles.right_chevron}
                data-lastpage={currentPage === lastPage}
                data-route={isAlcoholRoute}
                data-notlastpage={currentPage !== lastPage}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill={theme === "light" ? "#151515" : "#FFFFFF"}
                        d="M20.5596 22.12L14.4396 16L20.5596 9.88L18.6662 8L10.6662 16L18.6662 24L20.5596 22.12Z"
                    />
                </svg>
            </div>
        </div>
	</>
  )
}

export default Hero