import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = asObject(action.payload)
      state.push(anecdote)
    },
    voteAnecdoteOf(state, action) {
      const id = action.payload
      const votedAnecdote = state.find(a => a.id === id)
      const updatedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id === id ? updatedAnecdote : anecdote
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdoteOf, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer