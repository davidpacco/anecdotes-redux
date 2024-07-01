import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnecdoteForm } from './AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App