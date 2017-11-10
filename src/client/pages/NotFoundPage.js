import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div>
      Ooops, route not found.
    </div>
  )
}

export default {
  component: NotFoundPage
}