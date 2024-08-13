import React, { Component } from "react";
import Prompt from './Prompts.jsx';

const items = [];

for (let i = 65; i < 75; i++) {
    items.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,
    })
}

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items,
        };

        this.handleAnswer = this.handleAnswer.bind(this);
    }

handleAnswer(event, item, index, answer) {
    //Compare item.display with answer
   console.log(item.displayed, answer);
    this.props.handleScore(item.displayed === answer);

    //Change the item that is displayed
    //If the shown item hasn't been displayed/ Changed display property to true
    {
const items = this.state.items.map(i => {
    if (i === item) {
        if (i.displayed) {
            return i;
        } else {
            i.displayed = true;
            return i;
        } 
    } else return i;
});
    this.setState({ items });
    }
}

    randomItemIndex() {
        let rand = Math.floor(Math.random() - items.length);
        return rand;
    }
    

    render() {
        const { items } = this.state;
        const item = this.randomItemIndex();
       // const index = items[i];
        
        return (
            <main className="d-flex justify-content-around align-items-centers">
                <p id={items.indexOf(item)}>{item.content}</p>
                <Prompt item={item} handleAnswer={this.handleAnswer} />
            </main>
        );
    }
}


export default Game;
