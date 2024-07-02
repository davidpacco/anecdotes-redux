import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    updateNotification(state, action) {
      return action.payload
    },
    removeNotification() {
      return null
    }
  }
})

export const { updateNotification, removeNotification } = notificationSlice.actions

export const setNotification = (message, seconds) => {
  return dispatch => {
    dispatch(updateNotification(message))
    setTimeout(() => dispatch(removeNotification()), seconds * 1000)
  }
}

export default notificationSlice.reducer