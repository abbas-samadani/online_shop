import React, { useState } from 'react'
import AttributeItems from './AttributeItems'
import Attribute from './Attribute'
import {
  Box,
  Typography,
  Divider,
  FormControl,
  Button
} from '@material-ui/core'
//import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AddBox } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    padding: theme.spacing(1),
    fontSize: '1.1em',
    fontWeight: 'bold'
  },
  marginTop: {
    marginTop: theme.spacing(2)
  }
}))

interface AttributeGroupProps {
  title: string
}



const AttributeGroup: React.FC<AttributeGroupProps> = ({ title }: AttributeGroupProps) => {
  const styles = useStyles()
  const [Attributes, setAttribute] = useState<AttributeItems[]>([])

  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    setAttribute((prev) =>{
      return [
        ...Attributes,
        {
          title: '',
          slug : '',
          type : 1,
          filterable : true,
          hasPrice : false
        }
      ]      
  
    })
  }
  return (
    <Box>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Divider />
      {Attributes.map((attribute : AttributeItems , index) => (
        <Attribute key={index}/>
      ))}
      <FormControl className={styles.marginTop}>
        <Button
          onClick={handleButton}
          variant="contained"
          color="primary"
          startIcon={<AddBox />}
        >اضافه کردن ویژگی جدید
        </Button>

      </FormControl>

    </Box>
  )
}

export default AttributeGroup
