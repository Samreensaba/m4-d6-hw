import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment=({asin})=>{

    //state = {
    //    comment: {
    //        comment: '',
    //        rate: 1,
    //        elementId: null
    //    }
    //}

    const [comment, setComment] = useState("")
    const [rate, setRate]= useState(0)

    //componentDidUpdate(prevProps) {
    //    if (prevProps.asin !== this.props.asin) {
    //        this.setState({
    //            comment: {
    //                ...this.state.comment,
    //                elementId: this.props.asin
    //            }
    //        })
    //    }
    //} 

   

    const sendComment = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify({comment,rate,elementId:asin}),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTY0MjE0MDEsImV4cCI6MTY1NzYzMTAwMX0.3tF4nKWr5mvRAfq0KhScHfKgQV0jE4xk7Yg1y-7XOtk'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

    
        return (
            <div>
                <Form onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={comment}
                            onChange={event => {setComment(event.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={rate}
                            onChange={event => {
                            setRate(event.target.value)  
                        }}
                            >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }


export default AddComment