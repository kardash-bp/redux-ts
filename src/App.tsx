import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from './store'
import './App.css'
import RepoSearch from './components/RepoSearch'

function App() {
  // const { loading, data, error }: StateBlueprint = useSelector(dataSelector)
  const { loading, data, error } = useSelector((state) => state.repositories)

  // render the data
  const renderData = () => {
    // loading state
    if (loading) return <strong>Loading please wait...</strong>

    // error state
    if (error) return <strong>{error}</strong>
    if (!data.length)
      return <strong>Didn't find anything. Search again.</strong>

    // regular data workflow
    return data?.map((d, index) => <li key={index}> {d} </li>)
  }

  console.log(data)
  // template
  return (
    <div className='container'>
      <div>
        <h1>Search Results</h1>

        <ul>{renderData()}</ul>
      </div>
      <div>
        <RepoSearch />
      </div>
    </div>
  )
}

export default App
