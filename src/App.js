import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Programs from './components/Programs'
import CollegeDetails from './components/CollegeDetails'
import { WishlistProvider } from './components/WishListContext'
import WishList from './components/WishList'

const App = () => {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/colleges' component={Programs} />
          <Route exact path='/college/:id' component={CollegeDetails} />
          <Route exact path='/wish-list' component={WishList} />
          
        </Switch>
      </BrowserRouter>
    </WishlistProvider>
  )
}

export default App