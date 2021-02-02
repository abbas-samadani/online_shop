import React from 'react'
import {
  Paper,
  List,
  Divider
} from '@material-ui/core'
import Products from '../menu/products/Products'
import Orders from '../menu/orders/Orders'
import Finance from '../menu/finance/Finance'
import Delivery from '../menu/delivery/Delivery'
import Customers from '../menu/customers/Customers'
import FeedBack from '../menu/feedbacks/FeedBack'
import Settings from '../menu/settings/Settings'
const SideBar = () => {
  return <Paper elevation={0}>
    <List component="nav">
      <Products/>
      <Divider/>
      <Orders/>
      <Divider/>
      <Finance/>
      <Divider/>
      <Delivery/>
      <Divider/>
      <Customers/>
      <Divider/>
      <FeedBack/>
      <Divider/>
      <Settings/>
    </List>
  </Paper>
}

export default SideBar
