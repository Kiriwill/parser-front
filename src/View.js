import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from "react-router-dom";
import Header from './Header'
import Sentence from './Sentence'
import Log from './Error'
import Definitions from './Definitions'
import Graph from './Graph'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Loading  from './Loading'


class View extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: 0,
            height: 0,
            translate: { x: 0, y: 0 },
            dataIsReturned: false,
            hidden: true,
            showSentence: true,
            loading:false,
            orgChart: {}
        }
    }

    setInfo = () => {
        this.setState({
            hidden: !this.state.hidden
        })
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
          <rect width={nodeDatum.value.length  ? 0 : "130"} rx="0.4%" strokeWidth="1" height="60" x={nodeDatum.value.length > 7 ? -(nodeDatum.value.length*11)*0.54 : -133/2}  fill="white"/>
          <text fill="grey" strokeWidth={nodeDatum.value ? "1.3" : "0.8"} x={nodeDatum.value.length > 2 ? -(nodeDatum.value.length*10)*0.50 : -155*0.06} y="37">
            {nodeDatum.value ? `${nodeDatum.value.toUpperCase()} (${nodeDatum.class})` : nodeDatum.class}
          </text>
          {/* {nodeDatum.attributes?.department && (
            <text fill="black" x="20" dy="20" strokeWidth="1">
              Department: {nodeDatum.attributes?.department}
            </text>
          )} */}
        </g>
        
      );

    showSentence = (event) => {
        this.setState({
            showSentence: !event.target.checked
        })
    }

    showLoading = () => {
        this.setState({
            loading:true
        })
    }


    render(){
        const width = Math.max( window.innerWidth, document.body.clientWidth );
        const height = Math.max( window.innerHeight, document.body.clientHeight );

        let graphComp = (
            <Graph 
                width={width} height={height+100} 
                orgChart={this.props.orgChart}
                renderRectSvgNode={this.renderRectSvgNode}/>
            )

        const showGraph = () => {
            if (this.props.error.type !== 'critical' && this.props.orgChart.class)
                return graphComp
            return null
        }
        
        return (
            <div>
                {this.state.loading?  <Loading size={"w-100 h-25 fixed-bottom"}/> : null}
                {!(this.props.orgChart.class || this.props.tokens.length > 0)? 
                    <Redirect to={{pathname:"/"}}/>: null}
                <Header showLoading={this.showLoading} parseSentence={this.props.parseSentence}/> 
                <Definitions width={width} hidden={this.state.hidden}/>
                {this.state.hidden? 
                    <Log 
                        width={width} height={height} 
                        error={this.props.error} showSentence={this.showSentence}/> 
                    : null}
                {this.props.error.type !== 'critical'? 
                    <div className="d-flex p-3 m-3 justify-content-end align-items-start fixed-bottom z-index-3">
                        <div className="form-check-md form-switch text-muted">
                            <AiOutlineInfoCircle size={50} onClick={() => {this.setInfo()}} style={{cursor:"pointer"}}/>
                        </div>
                    </div>: null}
                {this.state.showSentence && this.props.error.type !== 'critical' && this.props.tokens.length > 0 && this.props.tokens[0].valor[0]? 
                    <Sentence 
                        setInfo={this.setInfo} width={width} 
                        height={height} tokens={this.props.tokens}/> 
                    : showGraph()}
            </div>
            
            )
        }
    }


export default View