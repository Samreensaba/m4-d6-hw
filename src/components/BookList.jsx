import {useState} from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList=({books})=>{

    //state = {
    //    searchQuery: '',
    //    selectedBook: null
    //}
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedBook, setSelectedBook] = useState(null)

    
    
    
        return (
            <Container>
                <Row>
                    <Col md={selectedBook?8:12}>
                    <Row>
                            { books&&
                                books.map(b => (
                                    <Col xs={3} key={b.asin} >
                                        <SingleBook
                                            book={b}
                                            changeSelectedBook={setSelectedBook}
                                                //this.setState({
                                                //selectedBook: asin
                                            />
                                    </Col>
                                ))
                            }
                        </Row>
                        </Col>
                        <Col md={4}>
                           { selectedBook && <CommentArea asin={selectedBook}/>}
                        </Col>
                    
                </Row>
            </Container>
        )
    }



export default BookList