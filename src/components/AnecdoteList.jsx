import { useSelector, useDispatch } from "react-redux"
import { voteAnecdoteOf } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"

export function AnecdoteList() {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter(a => a.content.includes(filter))
  })

  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(voteAnecdoteOf(id))
    dispatch(setNotification(`You voted '${content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <>
      {anecdotes.map(({ id, content, votes }) => (
        <div key={id}>
          <div>{content}</div>
          <div>
            has {votes}
            <button onClick={() => vote(id, content)}>Vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
