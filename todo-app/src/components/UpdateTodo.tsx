import React,{useEffect, useState} from 'react';
import { Container, Form,Col,Row, Button } from 'react-bootstrap'
import { stateType } from '../redux/reducer';
type addType = {
    value : stateType | null,
    updateTodo : (itm:stateType) => void
};
export default function UpdateTodo({updateTodo, value}:addType) {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    useEffect(()=>{
        if(value){
            setTitle(value.title);
            setDescription(value.description);
        }
    },[value])
  return (
    <Container>
        <Form>
  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
      Title
    </Form.Label>
    <Col sm="8">
      <Form.Control placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      {title!== '' && title.length < 3 && <span className='text-danger'>Enter Title of atleast 3 characters</span>}
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
      Description
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
      {description!== '' && description.length < 7 && <span className='text-danger'>Enter Description of atleast 7 characters</span>}
    </Col>
  </Form.Group>

  <Button variant='dark' onClick={() => updateTodo({title:title, description:description})}>Update todo</Button>
</Form>

    </Container>
  )
}
