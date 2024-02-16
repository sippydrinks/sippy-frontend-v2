import { useEffect, useState } from "react";
import useSWR from "swr";
import { Fetcher } from "@/utils/fetcher";
import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
import { isEmpty } from "lodash";

const useFetchAll = () => {
	const { setProductListing, setCart, drinkType } = useGlobalContext();
	const { data: drinkList } = useSWR<any>(
		`/api/productListing?drinkType=${drinkType}`,
		Fetcher
	);
	useEffect(() => {
		if (!isEmpty(drinkList)) {
			setProductListing(drinkList.data);
		}
	}, [drinkList, setProductListing]);
};

export default useFetchAll;
