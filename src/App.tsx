import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { RootState } from './redux/root.reducer';
import { addTodo } from './redux/articles/actions';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: RootState)=>({
  articleReducer: state.article
});
const connector = connect(mapState, { addTodo });
type Iprops = ConnectedProps<typeof connector>;
const App: FC<Iprops> = (props)=> {
  const onAdd = ()=>{
    props.addTodo({title: 'love', description: 'kimya kimya'});
  }
  return (
    <div className="App">
        <div className="logo">
          <img src={logo} alt={logo}/>
        </div>
        <div className="title">article - redux observable</div>
        <div className="mt-1"><Button type="primary" onClick={onAdd}> new article </Button></div>
    </div>
  );
}

export default connector(App);
