import React from 'react'
import { HashRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom'
import TopicRecommend from './pages/topicRecommend'
import TemplateRecommend from './pages/templateRecommend'
import "./App.css"
import logo from "./asset/logo.png"
function App() {
  return (
    <div className="App">
      <>
        <HashRouter>
          <div className="header">
            <img src={logo} alt="华中科技大学管理学院" srcset="" />
            <ul>
              <li className='topNav'><NavLink activeClassName='active' to={"/topic"}>选题推荐</NavLink>
              </li>
              <li className='topNav'><NavLink activeClassName='active' to={"/template"}>模板推荐</NavLink>
              </li>
            </ul>
          </div>
          <div className='route'>

            <Switch>
              <Route path="/topic" component={TopicRecommend} />
              <Route path="/template" component={TemplateRecommend} />
              <Route exact path="/" component={TopicRecommend} />
              <Redirect to={"/topic"} />
            </Switch>

          </div>
        </HashRouter>
      </>
    </div>
  )
}

export default App
