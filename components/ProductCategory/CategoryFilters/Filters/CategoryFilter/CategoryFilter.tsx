'use client';
import React, { useState }from 'react'
import { useGlobalContext } from '@/contexts/AppContext';
import { categoryFilterData } from '@/mock/filterData';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import styles from './CategoryFilter.module.scss'
import { formatURL } from '@/utils';

const CategoryFilter = () => {
    const { theme } = useGlobalContext()
    const router = useRouter()
    const route = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get(route)
    const [selectAll, setSelectAll] = useState(false);
    const [categorySelect, setCategorySelect] = useState<any[]>([categoryFilterData])
    const handleCheckBox = (id: number, event: any) => {
		  const updatedCategories = [...categorySelect];
		  const categoryIndex = updatedCategories.findIndex(category => category.id === id);
      if (categoryIndex !== -1) {
        updatedCategories[categoryIndex].option = !updatedCategories[categoryIndex].option;
        setCategorySelect(updatedCategories);

        const allSelected = updatedCategories.every(category => category.option);
        setSelectAll(allSelected);
      }
	  };
    
  return (
    <div className={styles.sort_filter_container}>
        {categoryFilterData.map((el, index) => 
            <div key={index} data-theme={theme} className={styles.filterName} 
              onClick={() => router.push(`/categories/${formatURL(el.productName)}`)}
            >
              <input
                onChange={() => handleCheckBox}
                type="radio"
                name="category"
                id=""
                value={el.productName}
              />
              <div><h3>{el.productName}</h3></div>
            </div>
          )}
    </div>
  )
}

export default CategoryFilter