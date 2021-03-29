import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import '../components/Youtube.css'

// const API = "AIzaSyDnCQmXrQwLd6VmNLD9D7Ve3YVwf2XYhSc&channelId=10"
const API = "AIzaSyDnCQmXrQwLd6VmNLD9D7Ve3YVwf2XYhSc";
const channelID = "UCXgGY0wkgOzynnHvSEVmE3A";
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
// var React = require("react");
// var ReactDOM = require("react-dom");
//var ScrollArea = require("react-scrollbar");

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [],
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // console.log(finalURL);
   
    console.log(this.state.resultyt);

    return (
      <div>

        
       
       
         <button onClick={this.clicked} className="poda">Get youtube videos</button>
      
      
      
      
    
      
      <Scrollbars className="rahul" style={{ width: 600, height: 650 }}>
      {/* <div className="left"> */}
     
        <br />
        {this.state.resultyt.map((link, i) => {
          console.log(link);
          var frame = (
            <div key={i} className="youtube">
              <iframe
                width="660"
                height="700"
                src={link}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          
          );
          return frame;
        })}
        {this.frame}
      {/* </div> */}
      </Scrollbars>
      </div>
    );
  }
}

export default Youtube;
