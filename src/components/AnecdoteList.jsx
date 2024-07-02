import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"

export function AnecdoteList() {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(a => a.content.includes(filter))
  })

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    dispatch(voteAnecdote(anecdote.id, updatedAnecdote))
    dispatch(setNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>Vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
