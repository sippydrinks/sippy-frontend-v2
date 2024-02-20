import React from 'react'
import { ProductCard } from '..';
import { ContentLoader } from '../loaders';
import { useGlobalContext } from "@/contexts/AppContext";
import { DrinkTypeProps } from "@/interface";
import styles from './RelatedProducts.module.scss'

const RelatedProducts = ({type}: DrinkTypeProps) => {
    const { productListing, drinkType }: any = useGlobalContext();
  return (
    <div className={styles.hero_container}>
        {
            productListing && productListing.length > 0 ? (
                productListing.slice(0, 4).map((product: any, index: number) =>
                    <ProductCard key={index} data={product} />
                )
            ) : (
            <ContentLoader />
        )}
    </div>
  )
}

export default RelatedProducts