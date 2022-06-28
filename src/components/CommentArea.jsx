import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState } from 'react'
import { useEffect } from 'react'

const CommentArea=({asin})=> {

    //state = {
    //    comments: [], // comments will go here
    //    isLoading: false,
    //    isError: false
    //}
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError] = useState(false)
    //componentDidUpdate = async (prevProps) => {
    //    if (prevProps.asin !== this.props.asin) {
    //        this.setState({
    //            isLoading: true
    //        })}
    useEffect(() => {
        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    useEffect(()=>{
        fetchComments();
    },[asin])

            const fetchComments = async()=>{
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTY0MjE0MDEsImV4cCI6MTY1NzYzMTAwMX0.3tF4nKWr5mvRAfq0KhScHfKgQV0jE4xk7Yg1y-7XOtk'
                    }
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                    setComments(comments)
                    setIsLoading(false)
                    setIsError(false)
                    //this.setState({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    //this.setState({ isLoading: false, isError: true })
                    setIsError(true)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
                //this.setState({ isLoading: false, isError: true })
                setIsError(true)
                setIsLoading(false)
            }
        }
        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={asin} />
                <CommentList commentsToShow={comments} />
            </div>
        )
    }

    
        
    


export default CommentArea