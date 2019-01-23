import React, {Component} from 'react';
import Description from './description';

class Character extends Component {
  render() {

    return (
      <div className = 'character'>

          My name is {this.props.character.name}.
          <p> Weapon: {this.props.character.weapon} </p>

          <p>
          Arm me:
        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Sword', 1)}>
            Sword
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Bow & Arrow', 2)}>
            Bow & Arrow
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Dragon', 3)}>
            Dragon
        </button>

          {this.props.character.errorMessage}

        </p>

       <Description
          handleSelected = {this.props.handleSelected}
          character= {this.props.character}
        />

      </div>
    );
  }
}

export default Character;

//id might be wrong
