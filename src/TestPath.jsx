import React from 'react'
import { useParams } from 'react-router-dom'

const TestPath = () => {
    const parms = useParams();
    const test = parms.testId
  return (
    <div><h1>TestPath {test}</h1></div>
  )
}

export default TestPath