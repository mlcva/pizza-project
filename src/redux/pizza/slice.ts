import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaSliceState, Status, Pizza } from './types'
import { fetchPizzas } from './asyncActions'

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = []
      state.status = Status.LOADING
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = []
      state.status = Status.ERROR
    })
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
