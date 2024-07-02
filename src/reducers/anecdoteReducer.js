import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
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

export const { addAnecdote, voteAnecdoteOf, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const savedAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(savedAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  const id = anecdote.id
  const updatedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  }

  return async dispatch => {
    await anecdoteService.vote(id, updatedAnecdote)
    dispatch(voteAnecdoteOf(id))
  }
}

export default anecdoteSlice.reducer