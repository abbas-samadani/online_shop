import React from 'react'
import { TextField, Switch, Box, FormControlLabel } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AttributeItems from './AttributeItems'
const useStyles = makeStyles((theme: Theme) => createStyles({
  attributeItem: {
    margin: theme.spacing(0, 1)
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
  },
  MarginForm: {
    marginTop: theme.spacing(2)
  }

}))
export default function Attribute({hash, title , hasPrice, slug, filterable} : AttributeItems) {
  const styles = useStyles()
  return (
    <Box className={styles.MarginForm}>
      <TextField variant="outlined" label="عنوان فارسی" id="title" name="title"
        className={styles.attributeItem} />
      <TextField variant="outlined" label="عنوان انگلیسی" id="slug" name="slug"
        className={styles.attributeItem}
      />

      <FormControlLabel label="استفاده از فیلتر ها"
        control={<Switch color="primary" id="filterable" name="filterable" />}
        className={styles.attributeItem}
      />
      <FormControlLabel label="استفاده برای قیمت" control={<Switch color="primary" id="hasPrice" name="hasPrice" />}
        className={styles.attributeItem}
      />
    </Box>
  )
}
