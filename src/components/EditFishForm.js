import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
  }

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    }
    console.log(updatedFish)
    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
          placeholder="price"
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <input
          type="text"
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
          placeholder="desc"
        />
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
          placeholder="image"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Delete fish
        </button>
      </div>
    )
  }
}

export default EditFishForm
