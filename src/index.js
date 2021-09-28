import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './search';
import Sobre from './sobre'
import Graph from './Graph'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
    render(){
        const orgChart = 	{
          "class": "IP",
          "value": "",
          "children": [
            {
              "class": "DP",
              "value": "",
              "children": [
                {
                  "class": "D",
                  "value": "o",
                  "children": null
                },
                {
                  "class": "NP",
                  "value": "",
                  "children": [
                    {
                      "class": "Nl",
                      "value": "",
                      "children": [
                        {
                          "class": "AP",
                          "value": "",
                          "children": [
                            {
                              "class": "Al",
                              "value": "",
                              "children": [
                                {
                                  "class": "A",
                                  "value": "rato",
                                  "children": null
                                },
                                {
                                  "class": "All",
                                  "value": "",
                                  "children": null
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "class": "Nl",
                          "value": "",
                          "children": [
                            {
                              "class": "N",
                              "value": "amarelo",
                              "children": null
                            },
                            {
                              "class": "Nll",
                              "value": "",
                              "children": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "class": "Il",
              "value": "",
              "children": [
                {
                  "class": "Ill",
                  "value": "",
                  "children": null
                },
                {
                  "class": "VP",
                  "value": "",
                  "children": [
                    {
                      "class": "Vl",
                      "value": "",
                      "children": [
                        {
                          "class": "V",
                          "value": "roeu",
                          "children": null
                        },
                        {
                          "class": "DP",
                          "value": "",
                          "children": [
                            {
                              "class": "D",
                              "value": "a",
                              "children": null
                            },
                            {
                              "class": "NP",
                              "value": "",
                              "children": [
                                {
                                  "class": "Nl",
                                  "value": "",
                                  "children": [
                                    {
                                      "class": "N",
                                      "value": "roupa",
                                      "children": null
                                    },
                                    {
                                      "class": "Nll",
                                      "value": "",
                                      "children": null
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        };
        const width = Math.max( window.innerWidth, document.body.clientWidth );
        const height = Math.max( window.innerHeight, document.body.clientHeight );
        return (
            <Router>
              <Switch>
                <div>
                  <div>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/sobre" component={Sobre}/>
                    {/* <div className="z-index-1 mt-5 p-3 rounded opacity-25 bg-secondary position-absolute" style={{height:"250px", width:width/8}}>
                        <h9 className="ms-1 text-light">Sobre o projeto</h9>

                      </div> */}
                    <Route path="/search" component={Graph}/>        

                  </div >        
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