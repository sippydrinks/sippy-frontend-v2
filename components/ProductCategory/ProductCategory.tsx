'use client';
import React, { useEffect, useState } from "react";
import { FilterComponent } from "./CategoryFilters";
import { ProductCardProps } from "@/interface";
import { ChartLoader } from "@/shared/loaders";
import { useGlobalContext } from "@/contexts/AppContext";
import { ProductCard, Pagination } from "../../shared";
import { productCategoryProps, CheckboxState, brandFilterDataProps, sizeFilterProps, SizeCheckboxState } from "@/interface/components";
import { ProductData, brandFilterData, sizeFilterData, sortFilterData, priceFilterData } from "@/mock";
import styles from "./ProductCategory.module.scss";

const ProductCategory = ({productName}: productCategoryProps) => {
	const { theme, productListing, setDrinkType } = useGlobalContext();
	const [isActive, setIsActive] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true)
	const [checkedbox, setCheckedBox] = useState(() => {
		const initialState: CheckboxState = {};
		brandFilterData.map((el: brandFilterDataProps) => {
		  initialState[el.brand] = el.isChecked;
		});
		return initialState;
	});
	const [sizebox, setSizeBox] = useState(() => {
		const initialState: SizeCheckboxState = {};
		sizeFilterData.map((el: sizeFilterProps) => {
			initialState[el.size] = el.isChecked;
		});
		return initialState;
	});
	const [currentPage, setCurrentPage] = useState<number>(1);
	const productCardsPerPage = 12;
	
	const indexOfLastPost = currentPage * productCardsPerPage;
	const indexOfFirstPost = indexOfLastPost - productCardsPerPage;
	const currentPosts = ProductData.slice(indexOfFirstPost, indexOfLastPost);
	const lastPage = Math.ceil(ProductData.length / productCardsPerPage);
	const [filteredArray, setFilteredArray] = useState<any[]>(currentPosts)

	const goToPreviousPage = () => {
		currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
		setIsActive(isActive => !isActive);
	};
	const goToNextPage = () => {
		currentPage < lastPage ? setCurrentPage(currentPage + 1) : null;
		setIsActive(isActive => !isActive);
	};
	useEffect(() => {
		setLoading(false)
	}, [loading])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	const { name, checked } = event.target;
	setCheckedBox((prevCheckedBoxes) => ({
	  ...prevCheckedBoxes,
	  [name]: checked,
	}));
	console.log(event?.target.value, event?.target.checked);
	const checkboxValue = event?.target.value
	const isChecked = event?.target.checked

	const filteredItems = currentPosts.filter((item: ProductCardProps) => 
		(item.productName === checkboxValue && isChecked === true) || (item.productNameAlcohol === checkboxValue && isChecked === true));
	const filterArray = filteredItems.length > 0 ? filteredItems : currentPosts
		setFilteredArray(filterArray);
  }

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	const { size, checked } = event.target;
	setSizeBox((prevCheckedBoxes) => ({
	  ...prevCheckedBoxes,
	  [size]: checked,
	}));
	console.log(event?.target.value, event?.target.checked);
	const checkboxValue = event?.target.value
	const isChecked = event?.target.checked

	const filteredItems = currentPosts.filter((item: ProductCardProps) => 
		item.productName === checkboxValue && isChecked === true);
		const filterArray = filteredItems.length > 0 ? filteredItems : currentPosts
		setFilteredArray(filterArray);
  }

	return (
		<div data-theme={theme} className={styles.pagination_container}>
			<FilterComponent 
				filterData={brandFilterData}
				sizeCheckBoxes={sizebox}
				checkedboxes={checkedbox}
				sizeFilterData={sizeFilterData}
				productName={productName}
				handleCheckboxChange={handleChange}
				handleSizeChange={handleSizeChange}
			/>
				{
					loading ?
						<ChartLoader />
				: 
					<div className={styles.pagination_selector}>
						<div className={styles.productCard_container}>
							{/* {currentPosts.map((product: ProductCardProps, index: number) => (
								<ProductCard key={index} {...product} />
							))} */}
							{filteredArray.length > 0 ? filteredArray.map((product: ProductCardProps, index: number) => (
								<ProductCard key={index} {...product} />
							)) : 
							<div>
								<h1>This Product is currently not available</h1>
							</div>}
						</div>
						<div className={styles.pageBtns_container}>
							<div
								data-active={isActive}
								data-theme={theme}
								onClick={goToPreviousPage}
								className={styles.left_chevron}
								data-page={currentPage}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
								>
									<path
										d="M20.5596 22.12L14.4396 16L20.5596 9.88L18.6662 8L10.6662 16L18.6662 24L20.5596 22.12Z"
										fill={theme === "light" ? "#1E1E1E" : "#FFFFFF"}
									/>
								</svg>
							</div>
							<Pagination
								pageSize={productCardsPerPage}
								// totalCount={ProductData.length}
								totalCount={filteredArray.length}
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								theme={theme}
							/>
							<div
								data-lastpage={currentPage === lastPage}
								data-active={isActive}
								data-theme={theme}
								onClick={goToNextPage}
								className={styles.right_chevron}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
								>
									<path
										d="M20.5596 22.12L14.4396 16L20.5596 9.88L18.6662 8L10.6662 16L18.6662 24L20.5596 22.12Z"
										fill={theme === "light" ? "#151515" : "#FFFFFF"}
									/>
								</svg>
							</div>
						</div>
					</div>
				}
		</div>
	);
};

export default ProductCategory;
