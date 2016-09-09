import React from 'react';
import BoundingCirlce from './BoundingCircle.js';
export default class BoundingCirclesContainer extends React.Component {

  constructor(props){
    super(props);
    let containerStyle = {
      height: 'initial',
      width: '100%',
      padding: '10px',
      minHeight: '900px',
      position: 'relative'
    };
    let positionedCards = this.repositionCards(props.cards);
    this.state = {
      containerStyle: containerStyle,
      cards: positionedCards
    }

  }

  componentDidMount () {

  }

  render() {
    return (
      <div style={this.state.containerStyle} >
        { this.state.cards.map( (card) => {
          return (
            <BoundingCirlce
              key={ card.key }
              size={ card.size }
              position={ card.position }
            />
          )
        } ) }
      </div>
    );
  }

  repositionCards(cards) {
    let nextCards =  cards.map( (card,index) => {
      return this.repositionCard (cards,index);
    } );
    return nextCards;
  }

  repositionCard (cards,index) {
    let card = cards[index];
    let nextCard = Object.assign({},card);
    nextCard.position = this.calculatePosition(cards,index);
    return nextCard;
  }

  handleMouseMove(mouse) {

  }



  calculatePosition (cards,index) {
     if(index === 0) return { left: 10, top: 10 };
     let nextLeft = cards[index].position.left + cards[index - 1].size;
     return { left: nextLeft, top: 0 };
  }

  getContainerWidth () {
    return 0;
  }

  getCardBoundingPoints() {
    return 0;
  }

}
