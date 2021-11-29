import React from 'react'
import Tree from 'react-d3-tree';

const Graph = (props) => {
    return (
        <div 
            hidden={props.hidden}
            id="treeWrapper" 
            style={{ width: props.width, height: props.height-100 }} 
            className="z-index-0">
            <Tree 
                data={props.orgChart}
                translate={{ x: props.width/2, y: (props.height/2)*0.4 }}
                orientation="vertical"
                renderCustomNodeElement={(x, y) => props.renderRectSvgNode(x,y)}>
            </Tree>
        </div>
    )
}

export default Graph
