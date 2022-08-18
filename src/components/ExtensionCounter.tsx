import useRepository from '../hooks/useRepository'

export default function ExtensionCounter() {
  const { owner, repository, items } = useRepository()

  return (
    <div className='App'>
      Owner: {owner} <br />
      Repository: {repository} <br />
      Items: {items}
    </div>
  )
}
