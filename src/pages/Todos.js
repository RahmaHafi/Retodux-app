import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import DeleteModal from '../components/DeleteModal';
import { Link } from 'react-router-dom';


function Todos(props) {

    const todos = useSelector(state => state.todos)
    const collaborators = useSelector(state => state.collaborators)


    return (
        <Container>
            <ListGroup className="mt-5" >
                {
                    todos.map((todo) => {
                        const collaborator = collaborators.find((coll) => coll.id === todo.userId)

                        return (
                            <ListGroup.Item key={todo.id} variant="warning" className=" justify-content-between align-items-center  ">
                                <div className=" d-flex justify-content-between">
                                    <div>
                                        <i className={`bi bi-file${todo.completed ? '-check' : ''}-fill btn text-warning btn-lg`} ></i>
                                        <span>{todo.title}</span>
                                    </div>
                                    <div>
                                        <Link to={`/todos/${todo.id}`}>
                                            <i className="bi bi-eye-fill btn text-warning"></i>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/update-todo/${todo.id}`}>
                                            <i className="bi bi-pencil-square btn text-info"></i>
                                        </Link>
                                    </div>
                                    <div>
                                        <DeleteModal todo={todo} />
                                    </div>

                                </div>
                                <div>
                                    {collaborator
                                        ? (<p>Assigned to:
                                            <span className="fw-bold">{collaborator.name}</span>
                                            <Badge bg="primary">{collaborator.email}</Badge>
                                        </p>)
                                        : (<p> Not Assigned</p>)
                                    }
                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </Container>
    )
}

export default Todos