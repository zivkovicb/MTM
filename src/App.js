import { Component } from 'react';

//COMPONENTS:
import QuickTaskList from './components/quick-task-list/quick-task-list.component';
import Tasker from './components/tasker/tasker.component';
import Header from './components/header/header.component';

//STYLES
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='app'>
        <Header />
        <div className='body-container'>
          <div className='quick-task-container'>
            <QuickTaskList />
          </div>
          <Tasker/>
        </div>
      </div>
    )
  }
}

export default App;
