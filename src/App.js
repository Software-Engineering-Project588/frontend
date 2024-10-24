import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Programs from './components/Programs'
import CollegeDetails from './components/CollegeDetails'

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/colleges' component={Programs} />
        <Route exact path='/college/:id' component={CollegeDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App