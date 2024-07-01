import { useSelector, useDispatch } from "react-redux"
import { voteAnecdoteOf } from "../reducers/anecdoteReducer"

export function AnecdoteList() {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(a => a.content.includes(filter))
  })

  const dispatch = useDispatch()

  const vote = id => dispatch(voteAnecdoteOf(id))

  return (
    <>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>Vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
