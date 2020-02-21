import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      active: null,
      isStart: false,
      isEndGame: true,
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
    const tikus = document.querySelectorAll('.tikus');
    if (!this.state.isEndGame) {
      const randomTime = this.randomWaktu(200, 400)
      const setHideMole =  1000
      setTimeout(() => {
        let index = this.randomTanah()
        tikus[index].classList.add('muncul');
        setTimeout(() => {
          tikus[index].classList.remove('muncul');
        }, setHideMole);
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
    const tikus = document.querySelectorAll('.tikus');
    if (tikus[mole].className === "tikus muncul") {
      this.setState((prevState) => {
        return {score: prevState.score+1}
      })
      tikus[mole].classList.remove('muncul');
    }
   }


  render() {
    const {isStart, score} = this.state
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
          <div className="tanah" onClick={() => this.handlePukul(0)}>
              <div className="tikus"></div>            
          </div>
          <div className="tanah" onClick={() => this.handlePukul(1)}>
              <div className="tikus"></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul(2)}>
              <div className="tikus"></div>
          </div>
        </div>
        <div className="item-container"> 
          <div className="tanah" onClick={() => this.handlePukul(3)}>
              <div className="tikus"></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul(4)}>
              <div className="tikus"></div>
          </div>
          <div className="tanah" onClick={() => this.handlePukul(5)}>
              <div className="tikus"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
