import React from 'react'
import Content from '../partials/Content'
import SkeletonTable from '../utils/SkeletonTable'
export default function Products () {
  return (
    <Content title="لیست محصولات">
      <SkeletonTable />
    </Content>
  )
}
