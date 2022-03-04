import React,{useState} from 'react';
import { Container, Form,Col,Row, Button } from 'react-bootstrap'
import { stateType } from '../redux/reducer';
type addType = {
    addTodo : (itm:stateType) => void
};
export default function AddTodo({ addTodo}:addType) {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
  return (
    <Container>
        <Form>
  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
      Title
    </Form.Label>
    <Col sm="8">
      <Form.Control placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} />
      {title!== '' && title.length < 3 && <span className='text-danger'>Enter Title of atleast 3 characters</span>}
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="3">
      Description
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
      {description!== '' && description.length < 7 && <span className='text-danger'>Enter Description of atleast 7 characters</span>}
    </Col>
  </Form.Group>

  <Button variant='success' onClick={() => addTodo({title:title, description:description})}>Add todo</Button>
</Form>

    </Container>
  )
}
