import React from 'react'
import styles from './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'

import Home from './home'
import QuestionsViewer from './questions-viewer'
import Export from './export'

class App extends React.Component {
   render() {
      return (
        <Router>
            <div className="full-height">
                {/* <ul>
                    <li className={styles.inline}><Link to={'/'}>Home</Link></li>
                    <li className={styles.inline}><Link to={'/test'}>test</Link></li>
                    <li className={styles.inline}><Link to={'/result'}>result</Link></li> 
                </ul> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/questions' component={QuestionsViewer} />
                    <Route exact path='/export' component={Export} />
                </Switch>
            </div>
        </Router>
      );
   }
}
export default App