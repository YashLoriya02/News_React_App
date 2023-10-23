import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { 
  BrowserRouter as Router ,
  Route,
  Routes,
} from 'react-router-dom';

export class App extends Component {
   state = {
    mode : "dark",
    mode2 : "Enable",
    body : "white"
  }
  toggleMode = () => {
    console.log("Clicked");
    let mode = this.state.mode;
    let mode2 = this.state.mode;
    // let body = this.state.body;
    let title = this.state.title;
    let title2 = this.state.title2;

    if(mode === "dark"){
        this.setState({
          mode : "light",
          mode2 : "Disable",
          title : document.getElementById("title_change").style.color = "white",
          title2 : document.getElementById("title_change2").style.color = "white",
          title2 : document.getElementById("title_change2").style.border = "2px solid white",
          title2 : document.getElementById("title_change2").style.backgroundColor = "#212529",
          body : document.body.style.backgroundColor = "#212529",
        })
      }
      // mode = "light";
      else{
        this.setState({
          title2 : document.getElementById("title_change2").style.backgroundColor = "white",
          // title2 : document.getElementById("title_change2").style.border = "2px solid black",
          title2 : document.getElementById("title_change2").style.color = "black",
          mode : "dark",
          title : document.getElementById("title_change").style.color = "black",
          mode2 : "Enable",
          body : document.body.style.backgroundColor = "white",
      })
    }
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar toggleMode = {this.toggleMode} mode2 = {this.state.mode2} mode = {this.state.mode} />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={8} country='us' category='general' />}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={8} country='us' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={8} country='us' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={8} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={8} country='us' category='science' />}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={8} country='us' category='sports' />}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={8} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App

