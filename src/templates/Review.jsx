import React, {Component} from 'react';
import tw from "twin.macro"; //eslint-disable-line
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewActions } from '../modules/cop/rev/review/review.action'

// import Customer from '../containers/cop//rev/review/Customer'
import '../App.css';
// import styled from "../components/common/node_modules/styled-components";
// import { css } from "../components/common/node_modules/styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';


import Header from "../components/cmm/Header.jsx";
import Footer from "../components/cmm/Footer.jsx";
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-yellow-500 hocus:text-yellow-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-yellow-500 text-black
  hocus:bg-yellow-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;


const PrimaryAction = tw.button`rounded-full sm:px-4 sm:py-2 font-bold shadow transition duration-300 bg-yellow-500 text-black hocus:bg-yellow-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const Container = styled.div`
  ${tw`relative -mx-3 px-10 bg-center bg-cover h-screen min-h-144 pt-10 `}`;

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
    },
    table: {
        minWidth: 500
    }
});
// =======================selector=============================
    // const [reviews, setReviews] = useState(null);
    // const dispatch = useDispatch()
    // const reviews = useSelector(state => (state.reviewReducer.reviews))

    // useEffect(() => {
    //     // let reviews = localStorage.getReviews('reviews')
    //     dispatch(reviewActions.getReviews())
    //   }, [])

//  =====================================================   
    // export const getReviews = data => ({type: "REVIEW_SUCCESS", payload: data})

    // export const reviewReducer = (state = [], action) =>{
    //     switch (action.type) {
    //         case "REVIEW_SUCCESS": return action.payload
    //         default: return state
    //     }
    // }
    // export const getReviews = () => dispatch => {
    //     axios.get(`https://localhost:8080/api/reviews`)
    //         .then(response => {
    //             alert('good !')
    //             dispatch(getReviews(response.data))
    //         })
    //         .catch(error => {throw (error)})
    // }    


export default function Review () {
    // const dispatch =  useDispatch()
    // const reivews = useSelector(state => (state.reviewReducer.reivews))

    // useEffect(() => {
    //     // let stockName = localStorage.getItem('stockName')
    //     dispatch(reviewActions.getReview(reivews))
    // }, [])

    const [reivews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            
            setReviews(null);
            
            setLoading(true);
            const response = await axios.get(
              'http://localhost:8080/api/reviews'
            );
            setReviews(response.data.reivews);
            // alert(JSON.stringify(response.data)) 
            // console.log(response.data)
            console.log(response.data.reivews)
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchReviews();
      }, []);

      if (loading) return <div>..</div>;
      if (error) return <div>error</div>;
      if (!reivews) return null;  

    return (<>
        <Header />
        <Container>
            {/* <button onClick={fnqAxios}>Fnq axios(검색어 입력창)</button> */}
            <PrimaryLink  margin="10em" href="/boardregister">검색</PrimaryLink>
            <PrimaryLink  margin="10em" href="/boardregister">게시글 작성</PrimaryLink>
            {/* <Paper className={classes.root}> */}
                {/* <Table className={classes.table}> */}
                <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>내용</TableCell>
                            <TableCell>ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {reivews.map(c =>  (
                        <TableRow key={c.review_no}>
                            <TableCell>{c.review_no}</TableCell>
                            <TableCell>{c.review_title}</TableCell>
                            <TableCell>{c.review_detail}</TableCell>
                            <TableCell>{c.review_id}</TableCell>
                        </TableRow> 
                    ))}                    
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
        <Footer/>   
    </>);
}

