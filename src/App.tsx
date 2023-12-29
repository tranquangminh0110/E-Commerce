import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './hooks/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div>
      <ToastContainer />
      {routeElements}
    </div>
  )
}

export default App
