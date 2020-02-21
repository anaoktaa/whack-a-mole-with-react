import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isShowMole: true,
      active: null,
      isStart: false,
      isEndGame: true,
      mole0: false,
      mole1: false,
      mole2: false,
      mole3: false,
      mole4: false,
      mole5: false,
      score: 0
    }
  }
  
  randomTanah = () => {
    const tRandom = Math.floor(Math.random()*6);
    if (this.state.active === tRandom) {
      this.randomTanah()
    }
    else {
      this.setState({active: tRandom})
    }
    return tRandom
  }

  randomWaktu = (max, min) => {
    return Math.round(Math.random()*(max-min)+min)
  }


  showTikus = () => {
    if (!this.state.isEndGame) {
      const randomTime = this.randomWaktu(200, 400)
      const setFalseRandomTime =  1000
      setTimeout(() => {
        let a = this.randomTanah()
        this.setState({active: a})
        if (a === 0) {
          this.setState({mole0: true})
          setTimeout(() => {this.setState({mole0: false})}, setFalseRandomTime)
        }
        if (a === 1) {
          this.setState((prevState) => {
            return {mole1: true,}
          })
          setTimeout(() => {this.setState({mole1: false})}, setFalseRandomTime)
        }
        if (a === 2) {
          this.setState((prevState) => {
            return {mole2: true,}
          })
          setTimeout(() => {this.setState({mole2: false})}, setFalseRandomTime)
        }
        if (a === 3) {
          this.setState((prevState) => {
            return {mole3: true,}
          })
          setTimeout(() => {this.setState({mole3: false})}, setFalseRandomTime)
        }
        if (a === 4) {
          this.setState((prevState) => {
            return {mole4: true,}
          })
          setTimeout(() => {this.setState({mole4: false})}, setFalseRandomTime)
        }
        if (a === 5) {
          this.setState((prevState) => {
            return {mole5: true,}
          })
          setTimeout(() => {this.setState({mole5: false})}, setFalseRandomTime)
        }
          this.showTikus()
      }, randomTime)
    }
    else {
      setTimeout(() => {
        this.setState({isStart: false})
      }, 1500);
    }
  }

  handleStart = () => {
     this.setState({isStart: true, isEndGame: false, score: 0}, () => {
      this.showTikus()
     })
     setTimeout(() => {
       this.setState({isEndGame: true})
     }, 10000)
  }

   handlePukul = (mole) => {
     if (this.state.mole0 && mole === "mole0") {
      this.setState((prevState) => {return {score: prevState.score+1, mole0: false}})
     }
     if (this.state.mole1 && mole === "mole1") {
      this.setState((prevState) => {return {score: prevState.score+1, mole1: false}})
     }
     if (this.state.mole2 && mole === "mole2") {
      this.setState((prevState) => {return {score: prevState.score+1, mole2: false}})
     }
     if (this.state.mole3 && mole === "mole3") {
      this.setState((prevState) => {return {score: prevState.score+1, mole3: false}})
     }
     if (this.state.mole4 && mole === "mole4") {
      this.setState((prevState) => {return {score: prevState.score+1, mole4: false}})
     }
     if (this.state.mole5 && mole === "mole5") {
      this.setState((prevState) => {return {score: prevState.score+1, mole5: false}})
     }
   }


   
  render() {
    const {isStart, mole0, mole1, mole2, mole3, mole4, mole5, score} = this.state
    return (
      <div className="container">
        <div className="row">
          <div>
            <h1>Whack A Mole !</h1>
            <p className="inspired">Inspired by Wesbos and Web Programming Unpas</p>
          </div>
          <div className="score">
            {score}
          </div>
        </div>

          <button className={isStart? "button-disabled": "button"} onClick={this.handleStart}>
            <span className="button-text">
              Start
            </span>
          </button>
      
   
        <div className="item-container"> 
          <div className="tanah" onClick={() => this.handlePukul("mole0")}>
              <div className={mole0? "tikus muncul" :"tikus"}></div>            
          </div>
          <div className="tanah" onClick={() => this.handlePukul("mole1")}>
              <div className={mole1? "tikus muncul" :"tikus"}></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul("mole2")}>
              <div className={mole2? "tikus muncul" :"tikus"}></div>
          </div>
        </div>
        <div className="item-container"> 
          <div className="tanah" onClick={() => this.handlePukul("mole3")}>
              <div className={mole3? "tikus muncul" :"tikus"}></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul("mole4")}>
              <div className={mole4? "tikus muncul" :"tikus"}></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul("mole5")}>
              <div className={mole5? "tikus muncul" :"tikus"}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
