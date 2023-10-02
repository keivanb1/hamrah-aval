import React, {useState} from "react";
import ProductTable from "../DevTable";
import FilterModal from "../FilterModal";

const FilterData = ({ data  }) => {
    const [filteredData, setFilteredData] = useState([]);
    function filteration(data , newData) {
        console.log({data, newData})
        return data.filter((item) => {
            if (newData.length === 0 || filteredData.length === 0) {
                return true
            }

            if ((newData || newData.length) &&
                (item.first_name?.toLowerCase() === (newData[0]?.first_name?.toLowerCase())
                    || item.last_name?.toLowerCase() === (newData[0]?.last_name?.toLowerCase())
                    || item.email?.toLowerCase() === (newData[0]?.email?.toLowerCase())
                    ||(( +newData[0].condition) && (+newData[0].condition ===1 ? +newData[0]?.id > item.id : +newData[0].condition ===3 ? +newData[0]?.id < item.id  : item.id === (+newData[0]?.id))))
            ) {
                return true;
            }
            return false;
        });
    }


    return (
        <>
            <FilterModal  data={data} filteration={filteration} onFilteredData={setFilteredData}/>
            <ProductTable data={filteration(data, filteredData)} />
        </>
    );
};

export default FilterData;
