import React, { useState, useEffect } from 'react'
import { Button, Container, Table, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { stateType } from '../redux/reducer';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';

export default function Todo() {
  const [isAdd, setAdd] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [item, setItem] = useState<stateType | null>(null);
  const todos = useSelector((state:stateType[]) => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:'FETCH'});
  },[dispatch])

  const addTodo = (itm:stateType) => {
    dispatch({type:'ADD', payload:itm})
    setAdd(false);
  }
  const editTodo = (itm:stateType) => {
    setItem(itm);
    setEdit(true);
  }

  const deleteTodo = (id:string | undefined) => {
    dispatch({type: 'DELETE', payload:id});
  }
  const updateTodo = (itm:stateType) => {
    dispatch({type: 'UPDATE', payload:{_id:item?._id, title:itm.title, description: itm.description}});
    setItem(null);
    setEdit(false);
  }

  const handleClose = () => setAdd(false);

  const clickAdd = () => setAdd(true)
  return (
    <>
        <Container className='m-3'>

        <Modal show={isAdd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddTodo addTodo={addTodo} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={isEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateTodo updateTodo={updateTodo} value={item} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Button onClick={() => clickAdd()}>Add Todo</Button>
          <Table bordered striped className='m-4'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {todos.map((todo, ind:number)=>
                <tr key={todo._id}>
                  <td>{ind + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td><Button variant='info' className='m-2' onClick={()=>editTodo(todo)}>Edit</Button>
                  <Button variant='danger' className='m-2' onClick={()=>deleteTodo(todo._id)}>Delete</Button></td>
                  
                </tr>)}

            </tbody>
          </Table>
        </Container>
    </>
  )
}
