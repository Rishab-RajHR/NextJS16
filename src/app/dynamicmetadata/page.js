import React from 'react'

const DynamicMetaData = () => {
  return (
    <>
       <h2>Dynamic Meta Data In Next Js 16</h2>
    </>
  )
}

export default DynamicMetaData;

export function generateMetadata() {
    return {
        title: 'My First Project',
        description: 'This is my first next JS Project'
    }
}