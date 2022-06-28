import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTY0MjE0MDEsImV4cCI6MTY1NzYzMTAwMX0.3tF4nKWr5mvRAfq0KhScHfKgQV0jE4xk7Yg1y-7XOtk'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment + " " +
        comment.rate}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
    </ListGroup.Item>
)

export default SingleComment