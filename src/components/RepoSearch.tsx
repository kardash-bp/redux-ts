import React, { useEffect, useRef, useState } from 'react'
import { getRepositories } from '../store/actions/getRepositories'
import { useDispatch } from '../store'

const RepoSearch: React.FC = () => {
  const dispatch = useDispatch()

  const [term, setTerm] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getRepositories(term))
    setTerm('')
    inputRef.current?.focus()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTerm(e.target.value)}
        ref={inputRef}
        placeholder='repository name'
        value={term}
      />
      <button>Search</button>
    </form>
  )
}

export default RepoSearch
