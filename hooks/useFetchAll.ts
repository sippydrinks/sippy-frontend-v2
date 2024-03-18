'use client';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Fetcher } from '@/utils/fetcher';
import { useGlobalContext } from '@/contexts/AppContext';
import { isEmpty } from 'lodash';

const useFetchAll = () => {
	const { setProductListing, setCart, drinkType }: any = useGlobalContext();
	console.log('useFetchAll');
	const { data: drinkList } = useSWR<any>(`/api/productListings?drinkType=${drinkType}`, Fetcher);

	useEffect(() => {
		if (!isEmpty(drinkList)) {
			setProductListing(drinkList.data);
		}
	}, [drinkList, setProductListing]);
};

export default useFetchAll;
