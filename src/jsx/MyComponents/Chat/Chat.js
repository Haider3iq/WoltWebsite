import React from "react";


import "../../../css/chat.css"




export default function Chat () {




      
  
    return(


        <div className="chatPage">
                <div id="center-text">
                    <h2>ChatBox UI</h2>
                    <p>Message send and scroll to bottom enabled </p>
                            </div> 
                            <div id="body"> 
                            
                            <div id="chat-circle" className="btn btn-raised">
                                    <div id="chat-overlay"></div>
                                        <i className="material-icons">speaker_phone</i>
                                </div>
                            
                            <div className="chat-box">
                                <div className="chat-box-header">
                                ChatBot
                                <span className="chat-box-toggle"><i className="material-icons">close</i></span>
                                </div>
                                <div className="chat-box-body">
                                <div className="chat-box-overlay">   
                                </div>
                                <div className="chat-logs">
                                
                                </div>
                                {/* <!--chat-log --> */}
                                </div>
                                <div className="chat-input">      
                                <form>
                                    <input type="text" id="chat-input" placeholder="Send a message..."/>
                                <button type="submit" className="chat-submit" id="chat-submit"><i className="material-icons">send</i></button>
                                </form>      
                                </div>
                        </div>
                
                </div>

</div>
    )
    
  }