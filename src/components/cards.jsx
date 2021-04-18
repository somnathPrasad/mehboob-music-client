import React, { Component } from 'react'


function Cards(props){
    return(
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <div className="card-buttons">
                <button className="btn btn-light"  >Download</button>
                <button className="btn btn-light listen" id={props.title} >Play</button>
                </div>
            </div>
        </div>
    )
}
export default Cards;