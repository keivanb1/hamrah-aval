import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import classes from './index.module.scss'
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { conditionWithId} from "../../shared/constants";

const FilterModal = ({filteration , onFilteredData , data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredData, setFilteredData] = useState([{}]);

    const [selectedName , setSelectedName]= useState('')
    const handleOpen = () => {
        setIsOpen(true)
        setFilteredData([{first_name:'', email:'', last_name:'',id:'', condition:''}])
        filteration(data, [])
    };
    const handleClose = () => {
        setIsOpen(false)
         setFilteredData([{first_name:'', email:'', last_name:'',id:'', condition:''}])
    };


    const handleChangeFilterType = ( value ) => {
        setSelectedName(value)
    }

    const handleAddFilter = () => {
        if (filteredData.length > 3) return;
        setFilteredData([...filteredData, {first_name:'', email:'', last_name:'',id:'' , condition:''}])
    }
    const handleDeleteFilter = (index) => {
        if (index>0) {
            const deleteItem = [...filteredData]
            deleteItem.splice(index,1)
            setFilteredData(deleteItem)
        }

    }

    const handleChangeFilterValue = ( value) => {
        const changeValue = [...filteredData]
        changeValue[0][selectedName] = value
        setFilteredData(changeValue)
    }

    const handleChangeCondition = (name, value) => {
        const changeValue = [...filteredData]
        changeValue[0][name] = value
        setFilteredData(changeValue)
    }


    const handleSubmit = () => {
        filteration(data,filteredData)
        onFilteredData(filteredData)
        setIsOpen(false)
    }

    return (
        <div className={classes.container}>
            <Button onClick={handleOpen} variant='outlined'>اعمال فیلتر‌ها</Button>
            <Modal
                open={isOpen}
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
                        return <Grid container spacing='8' className={classes.gridContainer}>
                            <Grid item xs={3}>
                                <TextField id="outlined-basic"  label="نوع فیلتر" variant="outlined" onChange={(e)=>handleChangeFilterType(e.target.value, index)}/>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">شرایط</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={(e)=>handleChangeCondition('condition',e.target.value, index)}
                                    >
                                        { conditionWithId.map(cond=><MenuItem key={cond.id} value={ cond.id}>{cond.label} </MenuItem>)}
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