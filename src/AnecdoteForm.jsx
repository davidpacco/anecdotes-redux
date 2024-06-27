import { useDispatch } from "react-redux"
import { createAnecdote } from "./reducers/anecdoteReducer"

export function AnecdoteForm() {
  const dispatch = useDispatch()

  const addNote = e => {
    e.preventDefault()
    const newAnecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
  }

  return (
    <>
      <h2>Create New</h2>
      <form onSubmit={addNote}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button>Create</button>
      </form>
    </>
  )
}