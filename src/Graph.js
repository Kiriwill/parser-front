import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './search';
import Sobre from './sobre'
import Header from './header'
import Tree from 'react-d3-tree';

class Graph extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: 0,
            height: 0,
            translate: { x: 0, y: 0 },
            orgChart: {
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
                                              "class": "N",
                                              "value": "rato",
                                              "children": null
                                          },
                                          {
                                              "class": "Nll",
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
                                                                      "value": "verde",
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
                                              "value": "buscou",
                                              "children": null
                                          },
                                          {
                                              "class": "Vll",
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
        }
    }

    parseSentence(sentence){
      let requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
          }
      }
      fetch(`http://127.0.0.1:8800/parser/?sentence=${sentence}}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log('hey'));
    }

    updateDimensions = () => {
        this.setState( {
            width: Math.max( window.innerWidth, document.body.clientWidth),
            height: Math.max( window.innerWidth, document.body.clientWidth )
            }
        )
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions)
    }

    renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
        <g onClick={toggleNode}>
          <rect width={nodeDatum.value.length  ? 0 : "100"} rx="0.4%" strokeWidth="0.2" height="40" x={nodeDatum.value.length > 7 ? -(nodeDatum.value.length*11)*0.54 : -100/2}  fill="white"/>
          <text fill="grey" strokeWidth={nodeDatum.value ? "1.3" : "0.5"} x={nodeDatum.value.length > 2 ? -(nodeDatum.value.length*10)*0.50 : -100*0.06} y="25">
            {nodeDatum.value ? nodeDatum.value.toUpperCase() : nodeDatum.class}
          </text>
          {/* {nodeDatum.attributes?.department && (
            <text fill="black" x="20" dy="20" strokeWidth="1">
              Department: {nodeDatum.attributes?.department}
            </text>
          )} */}
        </g>
        
      );

    render(){
        const width = Math.max( window.innerWidth, document.body.clientWidth );
        const height = Math.max( window.innerHeight, document.body.clientHeight );
        return (
          <div>
              <Header/>
              {/* <button type="button" onClick={() => this.parseSentence("o rato verde caiu ")} className="btn btn-outline-secondary ms-3">Teste</button> */}
              
              <div id="treeWrapper" style={{ width: width, height: height-50 }}>
                  <Tree 
                      data={this.state.orgChart}
                      translate={{ x: width/2, y: (height/2)*0.3 }}
                      onNodeClick={(x) => console.log(x)}
                      orientation="vertical"
                      renderCustomNodeElement={(x, y) => this.renderRectSvgNode(x,y)}>
                  </Tree>
              </div>
          </div>

        )
    }
}

export default Graph