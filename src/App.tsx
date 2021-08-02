import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Auth } from './pages/Auth';
import { WrappedCreate } from './pages/Create';
import { WrappedHome } from './pages/Home';

const App: React.FC = () => {
   return (
      <>
         <Header />
         <div className="container">
            <Switch>
               <Route path="/" component={WrappedHome} exact />
               <Route path="/create" component={WrappedCreate} exact />
               <Route path="/auth" component={Auth} exact />
            </Switch>
         </div>
      </>
   );
};

export default App;
