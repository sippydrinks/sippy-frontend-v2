'use client';
import React from 'react';
import { ProductCard } from '..';
import { ContentLoader } from '../loaders';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { DrinkTypeProps, ProductCardProps } from '@/interface';
import { ProductData } from '@/mock';
import styles from './RelatedProducts.module.scss';

const RelatedProducts = ({ type }: DrinkTypeProps) => {
	const { drinkType }: ContextProps = useGlobalContext();
	return <div className={styles.hero_container}>{ProductData && ProductData.length > 0 ? ProductData.slice(0, 4).map((product: ProductCardProps, index: number) => <ProductCard key={index} {...product} />) : <ContentLoader />}</div>;
};

export default RelatedProducts;
