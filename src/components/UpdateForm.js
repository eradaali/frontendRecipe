import React, { Component } from 'react'
 class UpdateForm extends Component {
    render() {
        return (
            <>
            <form onSubmit={e=>this.props.updateRecipe(e)}>
                <label>
                    Recipe Name : </label>
                <input type='text' value={this.props.recipeName} onChange={this.props.updateLabelFunc}/>
                <label>
                    Recipe Iamge : </label>
                    <input type='text' value={this.props.recipeImage}/>
                    <input type='submit' value='update' onChange={this.props.updateImageFunc}/>
            </form>
            </>
        )
    }
}
export default UpdateForm ;