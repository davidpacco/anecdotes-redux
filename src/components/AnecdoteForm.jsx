import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

export function AnecdoteForm() {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <>
      <h2>Create New</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button>Create</button>
      </form>
    </>
  )
}