import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Main from "./components/Main"
import Error from "./components/Error"
import Note from "./components/Note"
import Footer from "./components/Footer"
import Create from "./components/Create"

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/create" component={Create} />
          <Route exact path="/note" component={Note} />
          <Route exact path="/note/:noteURL" component={Note} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
