import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './Search.js';
import Sobre from './Sobre.js';
import View from './View.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          sentence: '',
          orgChart: {},
          redirect: false,
          error: {type: ""},
          tokens: []
        }
    }

    componentDidMount(){
      this.setState({
        sentence: '',
        orgChart:{},
        redirect:false,
        error: {type: ""},
        tokens: []
      })
    }
  
    parseSentence = (sentence) => {  
      let requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          }
      }
      let url = `https://parserapiv1.herokuapp.com/parser/?sentence=${sentence}`
      //console.log(url)
      fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.type) {
              //console.log("DEU ERRO")
              this.setState({error: data})
              let orgChart = {"class":"Resultados", "value": "", "children": data.detail.lasttree}
              this.setState({orgChart:orgChart})
              
              if (data.type !== 'critical'){
                data.detail.lasttokens.pop()
                this.setState({tokens: data.detail.lasttokens})
              }
              this.setState({redirect: true})
              return
            }
            //console.log("SUCESSO")
            this.setState({error: {type: ""}})
            data.tokens.pop()
            this.setState({tokens: data.tokens})
            //console.log("PARSED SENTENCE: ", this.state.tokens)
            this.setState({orgChart: data.tree})
            this.setState({redirect: true})
            //console.log('Arvore nova: ', data)
            
          })
    }
  
    render(){
        return (
            <Router>
              <Switch>
                <div>
                  <div>
                    <Route exact path="/" component={(props) => (<Search parseSentence={this.parseSentence} redirect={this.state.redirect}/>)}/>
                    <Route exact path="/home" component={(props) => (<Search parseSentence={this.parseSentence} redirect={this.state.redirect}/>)}/>
                    <Route exact path="/sobre" component={Sobre}/>
                    <Route path="/search" component={(props) => (<View orgChart={this.state.orgChart} error={this.state.error} tokens={this.state.tokens} parseSentence={this.parseSentence}/>)}/>
                  </div>
                </div>
              </Switch>
            </Router>

        )
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)