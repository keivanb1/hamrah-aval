import React, { useState } from "react";
import ProductTable from "../DevTable";
import styles from '../../shared/styles/index.module.scss'
import FilterModal from "../FilterModal";
const FilterData = ({ data }) => {
    const [filteredData, setFilteredData] = useState({first_name:'', email:'', last_name:'',id:''});
    console.log({filteredData})
    function filteration(data) {
        const newarr = data.filter((item) => {
            // if (!(filteredData.name && filteredData.email)) return true;
            if (!filteredData.name && !filteredData.email) return  true
            if (
                item.first_name?.toLowerCase().includes(filteredData.first_name?.toLowerCase())
                && item.last_name?.toLowerCase().includes(filteredData.last_name?.toLowerCase())
                && item.email?.toLowerCase().includes(filteredData.email?.toLowerCase())
                && item.id?.toLowerCase().includes(filteredData.id?.toLowerCase())
            ) {
                return true;
            }
            return false;
        });
        return newarr;
    }


    return (
        <>
                <FilterModal/>
            <ProductTable data={filteration(data)} />
        </>
    );
};

export default FilterData;
