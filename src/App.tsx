import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, StateBlueprint, RootState } from './store'
import './App.css'

function App() {
  const dispatch = useDispatch()
  // const { loading, data, error }: StateBlueprint = useSelector(dataSelector)
  const { loading, data, error }: StateBlueprint = useSelector(
    (state: RootState) => state.repositories
  )

  useEffect(() => {
    dispatch(getData('react'))
  }, [dispatch])
  // render the data
  const renderData = () => {
    // loading state
    if (loading) return <strong>Loading please wait...</strong>

    // error state
    if (error) return <strong>data not available at this time</strong>

    // regular data workflow
    return data?.map((d) => <li> {d} </li>)
  }
  console.log(data)
  // template
  return (
    <div>
      <h1>Search Results</h1>

      <ul>{renderData()}</ul>
    </div>
  )
}

export default App
