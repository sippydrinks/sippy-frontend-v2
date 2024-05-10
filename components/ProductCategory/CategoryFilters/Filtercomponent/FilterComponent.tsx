'use client';
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import { BrandFilter, SizeFilter, PriceFilter, SortFilter, SelectComponent, CategoryFilter } from "..";
import { Accordion, ActionPanel } from "../../../../shared";
import { usePathname, useRouter } from "next/navigation";
import { FilterComponentProps } from "@/interface/components";
import Image from "next/image";
import styles from "./FilterComponent.module.scss";

const FilterComponent = ({ productName, handleCheckboxChange, checkedboxes, filterData, sizeFilterData, sizeCheckBoxes, handleSizeChange}: FilterComponentProps) => {
	const { theme, categoryHeight } = useGlobalContext();
	const [openBrand, setOpenBrand] = useState<boolean>(false);
	const [openSize, setOpenSize] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [openPanel, setOpenPanel] = useState<boolean>(false)
	const router = useRouter()
	const route = usePathname()
	const isAlcoholRoute = route.includes('/alcohol')
	useEffect(() => {
		const handleScroll = () => {
			const componentHeight: number = window.innerHeight;
			const scrollY: number = window.scrollY;
			const fullScrollHeight: number = componentHeight + scrollY;
			const heightOfPage: number = document.documentElement.scrollHeight;
			const heightWithoutFooter: number = heightOfPage - categoryHeight;
			
			if (fullScrollHeight <= heightWithoutFooter) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [categoryHeight]);

	useEffect(() => {
        document.body.style.overflow = openPanel ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto';
          };
    }, [openPanel])
	const handleOpenPanel = () => {
		setOpenPanel(true);
	};
	const handleClosePanel = () => {
		setOpenPanel(false);
	};

	return (
		<div className={styles.filters}>
			<div className={styles.breadcrumbs}>
				<span className={styles.category_text} 
					// onClick={() => isAlcoholRoute ? 
					// 	router.push(route.slice(0, 19)) 
					// : 
					// 	router.push('/categories')}
					onClick={() => router.back()}
				>
					Categories
				</span> 
				{` > `}
				<span className={styles.product_name}> {`${productName}`}</span>
			</div>
			<div className={styles.filter_Accordion}>
				<Accordion title="Category" iconType="chevron">
					<CategoryFilter />
				</Accordion>
				<Accordion title="Sort" iconType="chevron">
					<SortFilter />
				</Accordion>
				<Accordion title="Price (₦)" iconType="chevron">
					<PriceFilter max={100000} min={100}  />
				</Accordion>
				<Accordion title="Brand" iconType="chevron">
					<BrandFilter handleCheckbox={handleCheckboxChange} 
						checkedboxes={checkedboxes}
						brandFilterData={filterData}
					/>
				</Accordion>
				<Accordion title="Size" iconType="chevron">
					<SizeFilter sizeFilterData={sizeFilterData} 
						checkedboxes={sizeCheckBoxes}
						handleCheckbox={handleSizeChange}
					/>
				</Accordion>
			</div>
			
			<div data-active={isVisible} data-theme={theme} 
				className={styles.action_panel_container}
			>
				<ActionPanel isOpen={openPanel} type="small" className={styles.action_panel}>
					<div data-open={openPanel} className={styles.action_panel_header}>
						<SelectComponent />
						<div className={styles.filter_container} data-theme={theme}
							onClick={handleOpenPanel}
						>
							<h3>Filter</h3>
							<div className={styles.filter_icon}>
								<Image alt="" fill src={`/svgs/filterIcon-${theme}.svg`} />
							</div>
						</div>
					</div>
					<div data-active={openPanel} className={styles.filter_body}>
						<div className={styles.filter_content}>
							<div className={styles.filter_header}>
								<h3>Filter</h3>
								<div className={styles.filter_icon} 
									onClick={handleClosePanel}
								>
									<Image alt="" fill src={`/svgs/plus-${theme}.svg`} />
								</div>
							</div>

							<div onClick={() => setOpenBrand(!openBrand)}
								className={styles.brandFilter_container}
							>
								<h3>Brand</h3>
								<div className={styles.icon}>
									<Image alt="" fill
										src={`/svgs/chevron-${theme}.svg`}
									/>
								</div>
							</div>

							<div onClick={() => setOpenSize(!openSize)}
								className={styles.brandFilter_container}
							>
								<h3>Size</h3>
								<div className={styles.icon}>
									<Image alt="" fill 
										src={`/svgs/chevron-${theme}.svg`}
									/>
								</div>
							</div>

							<div className={styles.priceFilter_container}>
								<h3>Price (₦)</h3>
								<PriceFilter max={100000} min={100} />
							</div>
						</div>
					</div>
					<div data-active={openBrand} className={styles.brand_filter_body}>
						<div className={styles.filter_header}>
							<div className={styles.arrow_container}>
								<div onClick={() => setOpenBrand(!openBrand)}
									className={styles.back_arrow}
								>
									<Image alt="" fill src={`/svgs/arrow-left-${theme}.svg`} />
								</div>
								<h3>Brand</h3>
							</div>
							<div
								className={styles.filter_icon}
								onClick={() => setOpenBrand(!openBrand)}
							>
								<Image alt="" fill src={`/svgs/plus-${theme}.svg`} />
							</div>
						</div>
						<BrandFilter 
							handleCheckbox={handleCheckboxChange} 
							checkedboxes={checkedboxes}
							brandFilterData={filterData}
						/>
					</div>
					<div data-active={openSize} className={styles.size_filter_body}>
						<div className={styles.filter_header}>
							<div className={styles.arrow_container}>
								<div onClick={() => setOpenSize(!openSize)}
									className={styles.back_arrow}
								>
									<Image alt="" fill 
										src={`/svgs/arrow-left-${theme}.svg`} />
								</div>
								<h3>Size</h3>
							</div>
							<div className={styles.filter_icon}
								onClick={() => setOpenSize(!openSize)}
							>
								<Image alt="" fill src={`/svgs/plus-${theme}.svg`} />
							</div>
						</div>
						<SizeFilter sizeFilterData={sizeFilterData} 
							checkedboxes={sizeCheckBoxes}
							handleCheckbox={handleSizeChange}
						/>
					</div>
				</ActionPanel>
			</div>
		</div>
	);
};

export default FilterComponent;
