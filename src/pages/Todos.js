import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
// import DeleteModal from '../components/DeleteModal';



function Todos(props) {
    
    const todos=useSelector(state=>state.todos)
    return (
        <Container>
            <ListGroup className="mt-5" >
                {
                  todos.map((todo) => (

                        <ListGroup.Item key={todo.id} variant="warning" className="d-flex justify-content-between ">
                            <div>
                                <i className={`bi bi-file${todo.completed ?'-check':''}-fill btn text-warning btn-lg`} ></i>
                                <span>{todo.title}</span>
                            </div>
                            <div>
                                <i className="bi bi-eye-fill btn text-warning btn-lg" ></i>
                            </div>
                        </ListGroup.Item>

                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default Todos