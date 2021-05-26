import React from 'react';

import { BsStar } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { render } from '@testing-library/react';


const starsNumber = 5;

class NewBeer extends React.Component {
  
  state = {
    beerName: '',
    styleBeer: '',
    brewery: '',
    rating: '',
    bearImg: 'https://thumbs.dreamstime.com/b/szk%C5%82o-piwo-z-piany-linii-ikon%C4%85-kubek-zimnego-piwa-wektorowa-ilustracja-odizolowywaj%C4%85ca-na-bielu-piwny-spienia-kontur-125545431.jpg',
    dataAdded: new Date().toISOString().slice(0,10),
    };

    handlechengeValueBeerName =( e )=> {
      this.setState({
        beerName: e.target.value
      })
    };

    handlechengeValueBeerStyle =( e )=> {
      this.setState({
        styleBeer: e.target.value
      })
    };

    handlechengeValueBrewery =( e )=> {
      this.setState({
        brewery: e.target.value
      })
    };

    handleClickAddBeer =()=> {

      const { beerName, styleBeer, brewery, rating, bearImg } = this.state;
      
      if (beerName.length < 12 && styleBeer.length < 12 && brewery.length < 12 &&
        beerName.length >= 1 && styleBeer.length >= 1 && brewery.length >= 1 && rating !== '') {

        const add = this.props.add(beerName, styleBeer, brewery, rating, bearImg);

          this.setState({
            beerName: '',
            styleBeer: '',
            brewery: '',
            rating: '',
            bearImg: 'https://thumbs.dreamstime.com/b/szk%C5%82o-piwo-z-piany-linii-ikon%C4%85-kubek-zimnego-piwa-wektorowa-ilustracja-odizolowywaj%C4%85ca-na-bielu-piwny-spienia-kontur-125545431.jpg',
            dataAdded: new Date().toISOString().slice(0,10),
          })
      }
      else{
        alert("Field cannot contain more than 12 characters")
      };
    };
    
    rate = ( star ) =>{
      this.setState({ rating : star });
    };

    AddBeerImg =( e )=> {
      const reader = new FileReader();
      reader.onload =()=> {
        if(reader.readyState === 2){
          this.setState({bearImg : reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
    };
    
    
  render() {

    let stars = [];

    for(let x = 1; x <= starsNumber; x++){
      stars.push(
        <div key={x} onClick={() => {this.rate(x)}}>
          <StarRating filled={x <= this.state.rating ? true : false}  />
        </div>
      )
    };

    return ( 
      <section className="beerAddingPanel">
        <div className="beerAddingPanel__imputsContainer">
          <h1 className="beerAddingPanel__h1">Beer Name</h1>
          <input className="beerAddingPanel__BeerName" type="text" placeholder="BeerName" value={this.state.beerName} onChange={this.handlechengeValueBeerName}></input>
          <h1 className="beerAddingPanel__h1">Beer Style</h1>
          <input className="beerAddingPanel__BeerStyle" type="text" placeholder="BeerStyle" value={this.state.styleBeer} onChange={this.handlechengeValueBeerStyle}></input>
          <h1 className="beerAddingPanel__h1">Brewery</h1>
          <input className="beerAddingPanel__Brewery" type="text" placeholder="Brewery" value={this.state.brewery} onChange={this.handlechengeValueBrewery}></input>
        </div>
        <div className="mainStarPanel">
          {stars}
        </div>
        <div className="addingPictureCotainer">
          <input className="addingPictureCotainer__input" type="file" onChange={this.AddBeerImg} id="beerImg" name="image-upload" accept="image/*"></input>  
          <label className="addingPictureCotainer__label" htmlFor="beerImg"><FaRegImage/></label>
        </div>
        <button className="beerAddingPanel__btnAdd" onClick={this.handleClickAddBeer}>Add</button>
      </section>
     );
  };
}

class StarRating extends React.Component {
  state = {  }
  render() { 
    return (<div className={this.props.filled ? "starOn" : "starOff" }><BsStar/></div>);
  }
}
 
export default NewBeer;

     
