import React from 'react'
import {

  TextField,
  Switch,
  FormControl,
  InputLabel,
  Select, 
  MenuItem,
  Box,
  FormControlLabel

} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme:Theme) => createStyles({
  attributeItem: {
    margin: theme.spacing(0, 1)
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
  }, 
  MarginForm: {
    marginTop : theme.spacing(2)
  }

}))
export default function Attribute () {
  const styles = useStyles()
  return (
    <Box className={styles.MarginForm}>
      <TextField variant="outlined" label="عنوان فارسی" id="attribute_title_fa"
        className={styles.attributeItem}/>
      <TextField variant="outlined" label="عنوان انگلیسی" id="attribute_title_en"
        className={styles.attributeItem}
      />
      <FormControl variant="outlined" className={styles.formControl} >
        <InputLabel htmlFor="select-outlined-label">نوع داده</InputLabel>
        <Select 
          labelId="select-outlined-label"
          id="select-outlined"
        >        
          
          <MenuItem value={1}>عددی</MenuItem>
          <MenuItem value={2}>متنی</MenuItem>
          <MenuItem value={3}>چند گزینه ای</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel label="استفاده از فیلتر ها"
        control={<Switch color="primary" id="attribute_filterable"/>}
        className={styles.attributeItem}
      />
      <FormControlLabel label="استفاده برای قیمت" control={<Switch color="primary" id="attribute_filterable"/>}
        className={styles.attributeItem}
      />
    </Box>
  )
}
