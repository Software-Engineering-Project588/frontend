import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Programs from './components/Programs';
import CollegeDetails from './components/CollegeDetails';
import { WishlistProvider } from './components/WishListContext';
import { AppliedDataProvider } from './components/AppliedDataContext'; // Import the AppliedDataProvider
import WishList from './components/WishList';
import Apply from './components/Apply';
import AppliedColleges from './components/AppliedColleges';

const App = () => {
  return (
    <WishlistProvider>
      <AppliedDataProvider> 
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/colleges' component={Programs} />
            <Route exact path='/college/:id' component={CollegeDetails} />
            <Route exact path='/wish-list' component={WishList} />
            <Route exact path='/apply-form/:id' component={Apply} />
            <Route exact path='/applied' component={AppliedColleges} />
          </Switch>
        </BrowserRouter>
      </AppliedDataProvider>
    </WishlistProvider>
  );
};

export default App;
