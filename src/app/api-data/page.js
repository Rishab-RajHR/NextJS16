'use client';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiData } from '../reduxToolkit/slice';

const APIData = () => {
  const dispatch = useDispatch();
  const employeesAPIData = useSelector((state) => state.employeeData.employeesAPIData);
  const isLoading = useSelector((state) => state.employeeData.isLoading);
  const error = useSelector((state) => state.employeeData.error);

  useEffect(() => {
      dispatch(apiData);
  },[])
  return (
    <>
     <h2>API Data</h2>
     </>
  )
}

export default APIData;