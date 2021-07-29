import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Create } from './pages/Create';
import { Home } from './pages/Home';

const App: React.FC = () => {
   return (
      <div className="container">
         <Header />
         <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} exact />
         </Switch>
      </div>
   );
};

export default App;
