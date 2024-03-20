
export interface brandFilterComponentProps {
    handleCheckbox: any 
    checkedboxes: any
    brandFilterData: any
}
export interface brandFilterDataProps {
    id?: number
    brand: string
    isChecked: boolean
}

export interface sizeFilterProps {
    id?: number
    size: number
    isChecked: boolean
}

export interface CheckboxState {
    [key: string]: boolean;
}

export interface SizeCheckboxState {
    [key: number]: boolean;
}

export interface FilterComponentProps {
    productName: string
    handleCheckboxChange: any
    handleSizeChange: any
    checkedboxes: any
    sizeCheckBoxes: any
    filterData: any
    sizeFilterData: any
}

export interface productCategoryProps {
	productName: string
}