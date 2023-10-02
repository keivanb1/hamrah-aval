import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import classes from './index.module.scss'
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {condition, selectedFilters} from "../../shared/constants";

const FilterModal = () => {
    const [open, setOpen] = useState(false);
    const [selected , setSelected] = useState('')
    const [filteredData, setFilteredData] = useState([{first_name:'', email:'', last_name:'',id:''}]);
    // const [filteredData, setFilteredData] = useState([]);

    const [selectedName , setSelectedName]= useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeFilterType = ( value , index) => {
        console.log({ value , index})
        setSelectedName(value)
        // const changeValue = [...filteredData]
        // changeValue[index][name] = value
        // setFilteredData(changeValue)
    }

    console.log({filteredData})
    const handleChange = (e) => {
        setSelected(e.target.value)
    }


    const handleAddFilter = () => {
        if (filteredData.length > 3) return;
        setFilteredData([...filteredData, {first_name:'', email:'', last_name:'',id:''}])
    }
    const handleDeleteFilter = (index) => {
        if (index>0) {
            const deleteItem = [...filteredData]
            deleteItem.splice(index,1)
            setFilteredData(deleteItem)
        }

    }
    const handleSubmit = () => {
        // let array = []
        // if (Object.values(filteredData).length) {
        //     array.push(Object.keys())
        // }
        // console.log({array})
        console.log(Object.values(filteredData).length)
        const newFilter = {

        }
    }
    const handleChangeFilterValue = ( value , index) => {
        console.log({value , index})
        const changeValue = [...filteredData]
        changeValue[index][selectedName] = value
        setFilteredData(changeValue)

        console.log({changeValue})
    }

    return (
        <div className={classes.container}>
            <Button onClick={handleOpen} variant='outlined'>اعمال فیلتر‌ها</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <div className={classes.header}>
                        <h4> اعمال فیلتر</h4>
                        <CloseIcon className={classes.icon} fontSize='small' onClick={handleClose} />
                    </div>
                    {filteredData.map((item , index)=> {
                            console.log(selectedFilters.map(data=>data.type)?.[index])
                        return <Grid container spacing='8' className={classes.gridContainer}>
                            <Grid item xs={3}>
                                <TextField id="outlined-basic" label="نوع فیلتر" variant="outlined" onChange={(e)=>handleChangeFilterType(e.target.value, index)}/>
                                {/*<FormControl fullWidth>*/}
                                {/*    <InputLabel id="demo-simple-select-label">نوع فیلتر</InputLabel>*/}
                                {/*    <Select*/}
                                {/*        labelId="demo-simple-select-label"*/}
                                {/*        id="demo-simple-select"*/}
                                {/*        value={selectedName}*/}
                                {/*        onChange={(e)=>handleChangeFilterType(selectedName, index)} label='نوع فیلتر'*/}
                                {/*    >*/}
                                {/*        {selectedFilters.map(item=> <MenuItem key={item.id} value={item.id}>{item.label} </MenuItem>)}*/}
                                {/*    </Select>*/}
                                {/*</FormControl>*/}
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">شرایط</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selected}
                                        onChange={handleChange}
                                    >
                                        {condition.map(item=> <MenuItem key={item.id} value={item.id}>{item.label} </MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="outlined-basic" label="مقدار" variant="outlined" onChange={(e)=>handleChangeFilterValue(e.target.value,index)}/>
                            </Grid>
                            <Grid item xs={1} className={classes.filterIcon} onClick={handleAddFilter}>
                                <AddIcon color='primary' />
                            </Grid>
                            {index>0 &&  <Grid item xs={1} className={classes.filterIcon} onClick={()=>handleDeleteFilter(index)}>
                                <DeleteOutlinedIcon color='error' />
                            </Grid>}
                        </Grid>
                    }

                    )}
                    <Button onClick={handleSubmit} variant='contained' size='large' className={classes.submit}>ثبت فیلتر‌ها</Button>
                </Box>
            </Modal>
        </div>
    )
}
export default FilterModal