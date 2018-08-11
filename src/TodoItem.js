import React, {Component} from 'react'

class TodoItem extends Component{

	constructor(props) {
	  super(props);

	  this.state = {};

	  this.handleDelete = this.handleDelete.bind(this)
	}

	//子组件想和父组件通信，要调用父组件传递过来的方法

	handleDelete(){
		//ES6解构赋值
		const { handDelete, index} = this.props
		handDelete(index)
		// this.props.handDelete(this.props.index)
	}

	render() {
	  const { content } = this.props
	  return (
	    <div onClick={this.handleDelete}>{content}</div>
	  );
	}
}

export default TodoItem