import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../components/products/Products'
import EditCategory from '../components/categories/EditCategory'

interface RouteItem {
    path:string;
    component:any;
}

const routes:RouteItem[] = [
  {
    path: '/products',
    component: Products
  },
  {
    path: '/categories/edit',
    component: EditCategory
  }
]

const RenderRoutes = () => {
  return (<Switch>
    {
      routes.map((route:RouteItem, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))
    }
  </Switch>)
}
export default RenderRoutes
