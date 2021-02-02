import React , {useReducer} from 'react'
import Content from '../partials/Content'
//import Attribute from './attribute/Attribute'
import {reducer} from './state/index'
import {initialState} from './state/index'
import {
  FormControl,
  TextField,
  Button,  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core'
import { AddBox } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AttributeGroup from './attribute/AttributeGroups'
const useStyles = makeStyles((theme:Theme) => createStyles({
  formRow: {
    margin: theme.spacing(2, 'auto')
  }
}))
export default function EditCategory () {
  const styles = useStyles()
  const [open, setOpen] = React.useState<boolean>(false)
  const [title, setTitle] = React.useState<string>('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClose = (e:React.MouseEvent) =>{
    setOpen(false)
  }
  const openDialog = (e:React.MouseEvent) =>{
    setOpen(true)
  }

  const handleConfirm = (e:React.MouseEvent) =>{
    console.log(e);
    
    if(title !== ''){
      dispatch({
        type : 'ADD_ATTRIBUTE_CATEGORY',
        payload : {
          title
        }
      })
      setOpen(false)
    }
  }
  return (
    <Content title="ویرایش / اضافه کردن دسته بندی">
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">عنوان دسته بندی خاصیت ها</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="attributes_group_title"
            label="عنوان دسته بندی خاصیت ها "
            type="text"
            fullWidth
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            بستن 
          </Button>
          <Button onClick={handleConfirm} color="primary">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <FormControl fullWidth className={styles.formRow}>
        <TextField variant="outlined" id="category_title_fa" label="عنوان دسته بندی - فارسی"/>
      </FormControl >
      <FormControl fullWidth className={styles.formRow}>
        <TextField variant="outlined" id="category_title_en" label="عنوان دسته بندی - انگلیسی"/>
      </FormControl>
      {state.groups.map((group , index) => (<AttributeGroup key={index} title={group.title}/>))}
      <FormControl className={styles.formRow}>
        <Button   
          onClick={openDialog}       
          variant="contained"
          color="primary"
          startIcon={<AddBox />}
        >اضافه کردن دسته بندی ویژگی ها
        </Button>

      </FormControl>
    </Content>
  )
}
