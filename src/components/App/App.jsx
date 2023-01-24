import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultContainer from '../ResultContainer/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            headerText : "Name It! ",
            headerExpanded : true,
            suggestedName : []
        }
    }

    handleInputChange = (inpTxt) =>{
      if(!inpTxt){
        this.setState({
          headerExpanded:true,
          suggestedName:[]
        })
      }
          else{  
            this.setState({
              headerExpanded: false,
              suggestedName :name(inpTxt)
            }) }      
    }
  render() {
    return (
      <div className='container'>
        <Header 
        headerTitle={this.state.headerText} 
        headerExpanded={this.state.headerExpanded}/>

        <SearchBox onInputChange={this.handleInputChange}/>

        <ResultContainer suggestedNames={this.state.suggestedName}/>
      </div>
    )
  }
}
