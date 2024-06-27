import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdoteOf } from './reducers/anecdoteReducer'

function App() {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addNote = (e) => {
    e.preventDefault()
    const newAnecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: newAnecdote
    })
  }

  const vote = (id) => dispatch(voteAnecdoteOf(id))

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>Create new</h2>
      <form onSubmit={addNote}>
        <div><input name="anecdote" /></div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default App