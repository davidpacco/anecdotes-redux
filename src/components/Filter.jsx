import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

export function Filter() {
  const style = { marginBottom: 10 }
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(filterChange(e.target.value))
  }

  return (
    <div style={style}>
      Filter <input type="text" onChange={handleChange} />
    </div>
  )
}
