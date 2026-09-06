import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
    employees: JSON.parse(localStorage.getItem('emp')),
    isLoading: false,
    error: null,
    employeesAPIData: []
}

export const apiData = createAsyncThunk("apidata", async () => {
     const response = await fetch('https://jsonplaceholder.com/users');
     return response.json();
})

const Slice = createSlice({
     name:'addEmployeeSlice',
     initialState,
     reducers:{
        addEmployee:(state, action) => {
            console.log(action);
             const data = {
               id:nanoid(),
               name:action.payload
             }
             state.employees.push(data)
             current
             let empData = JSON.stringify(current(state.employees));
             localStorage.setItem("emp",empData);
        },
        removeEmployee:(state, action)=> {
           const data = state.employees.filter((item) => {
              return item.id !== action.payload
           })
           state.employees = data;
        }
     },
     extraReducers: (builder) => {
         builder.addCase(apiData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
         })
         builder.addCase(apiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.employeesAPIData = action.payload;
         })
         builder.addCase(apiData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
         })
     }
});

export const {addEmployee, removeEmployee} = Slice.actions;
export default Slice.reducer;