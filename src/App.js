import React from 'react';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Project from './Pages/Projectpage/Project';
import Volunteers from './Pages/Volunteers/Volunteers';
import Services from './Pages/Services/Services';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Project} />
        <Route path='/Volunteers' component={Volunteers} />
        <Route path='/Services' component={Services}/>
        <Route path='/SignUp' component={SignUp}/>        
         </Switch>
         <Footer/>
         </Router>
  );
}

export default App;
