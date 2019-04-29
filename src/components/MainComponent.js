import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { COURSES } from '../shared/courses';
import { COURSES1} from '../shared/courses1';
import { COURSES2 } from '../shared/courses2';
import { ARTICLES } from '../shared/articles';
import { DATAS } from '../shared/data';
import { BLOGS } from '../shared/blogs';



import Payment from './PaymentComponent';
import Modules from './ModuleComponent';
import Coursera from './CourseraComponent';
import Learning from './LearningComponent';
import Wisdom from './WisdomComponent';

import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import Blogs from './BlogComponent';









class Main extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      courses : COURSES,
      courses1 : COURSES1,
      courses2 : COURSES2,
      articles : ARTICLES,
      datas : DATAS,
    
    }
  }
  



  
  render() {

    return (
      <div>
        
     <Header />
          <Switch>
            <Route path="/home" component={() => <Home courses = {this.state.courses}
                  courses1 = {this.state.courses1} 
                  slideImage ={this.state.slideImage}
                 />} 
                 />
            <Route exact path="/learning" component= {() => <Learning  activeTab = {this.state.activeTab} />} />
            <Route exact path="/coursera" component= {() => <Coursera  card1 = {this.state.card1} />} />
            {/* <Route exact path="/onclickk" component= {() => <Onclickk />} /> */}
            <Route exact path="/blogs" component= {() => <Blogs blogs ={this.state.blogs} />} />
            <Route exact path="/wisdom" component= {() => <Wisdom articles = {this.state.articles}
             redirect = {this.state.redirect} />} />
             <Route exact path="/modules" component= {() => <Modules datas={this.state.datas}  />}  /> />
             <Route exact path="/coursera" component= {() => <Coursera  />}  /> />
            
            <Redirect to ="/home" />
          </Switch>

     <Footer />
      </div>
    );
  }
}

export default Main;