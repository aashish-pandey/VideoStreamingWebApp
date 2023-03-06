import React, { Component } from 'react'

export default class UploadSeries extends Component {
    state = {
        noOfSeasons : ["aashish", "pandey", "is", "awesome"],
    }

    handleNoOfSeasons(){
        let len = document.getElementById('season')

        let fields  = []

        for(let i = 0; i < len; i++){
            let ip = ""
        }

    }

    
  render() {
    return (
      <div>UploadSeries<br/>

      <form action="">
        <div>
            <label htmlFor="">Enter the series name</label>
            <input type="text" placeholder='series name'/>
        </div>

        <div>
            {console.log(this.state.noOfSeasons)}<br/>
            <label htmlFor="">Enter the number of seasons</label>
            <input type="text" id='season' placeholder='No of seasons' defaultValue='0' onChange={()=>{this.handleNoOfSeasons()}}/>
        </div>

        {this.state.noOfSeasons.map(ns=>{
            return <div>
                Aashish is here
            </div>
        })}

        <div>
            <input type="submit" value="upload Series"/>
        </div>
      </form>

      </div>
    )
  }
}
