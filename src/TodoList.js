import React ,{Component,Fragment}from 'react';
import ItemTodo from './Item'
import Son from './Son'
import Counter from './Counter'
import axios from 'axios'
import Link from 'react-router-dom'

class TodoList extends Component{
    constructor(prop) {
        super(prop)

        this.handleKeyUp=this.handleKeyUp.bind(this)
        this.handleChangeInput=this.handleChangeInput.bind(this)
        this.handleRemoveInput=this.handleRemoveInput.bind(this)
        this.getAddNumber=this.getAddNumber.bind(this)
        this.state = {
            inputValue: 'hello React',
            list:['learn React','learn Vue','learn angela'],
            count:0
        }
    }

    handleChangeInput(e) {
        this.setState({
            inputValue:e.target.value
        })
    }
    handleKeyUp(e) {
        if(e.keyCode === 13 && e.target.value !== '') {
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue:''
            })
        }
    }
    handleRemoveInput(index) {
        
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
    getAddNumber() {
        console.log(this.refs.inputId.value)
        axios.get('http://www.dell-lee.com/react/api/demo.json').then(res=> {
            console.log(res)
        })
        this.setState({
            count:this.state.count+2
        })
    }
    getUlDom() {
        return   this.state.list.map((item,index) => {
                    return <ItemTodo 
                    content={item} 
                    key={index}
                    deleteInput={this.handleRemoveInput}
                    index={index}
                    />
                })
    }
    render() {
        
        return (
            <Fragment>
                <label htmlFor="inputId">点击</label>
                {/* 这是label */}
                <input
                id="inputId"
                ref="inputId"
                value={this.state.inputValue} 
                onChange={this.handleChangeInput}
                onKeyUp={this.handleKeyUp}
                />
                <ul>
                    {
                      this.getUlDom()
                    }
                </ul>

                <hr/>

                <Son content='hello world'/>

                <hr/>

                <Link to='/about'>
                <button 
                 ref='countId'
                onClick={this.getAddNumber}>点击加2</button>
                </Link>
                <br/>
                数字： <Counter 
                       
                       count={this.state.count}/>

                <hr/>
                {/* <Input placeholder="Basic usage" /> */}
            </Fragment>
        )
    }
}

export default TodoList; 