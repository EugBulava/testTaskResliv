import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./header";
import { Employees } from "./pages/employess";
import { Main } from "./pages/main";

export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}
