
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

// class state extends React.Component {
//     render() {
//         return (
//             <TableRow>
//                 <TableCell>{this.state.review_no}</TableCell>
//                 <TableCell>{this.state.review_title}</TableCell>
//                 <TableCell>{this.state.review_detail}</TableCell>
//                 <TableCell>{this.state.review_id}</TableCell>
//             </TableRow>
//         )
//     }
// }

function Review({review_no, review_title, review_detail, review_id}) {
    return (
        <TableRow>
        <TableCell>{this.state.review_no}</TableCell>
        {/* <TableCell>{this.state.review_title}</TableCell>
        <TableCell>{this.state.review_detail}</TableCell>
        <TableCell>{this.state.review_id}</TableCell> */}
    </TableRow>
    )
}

Review.propTypes = {
    review_no : PropTypes.number.isRequired,
    review_title : PropTypes.string.isRequired,
    review_detail : PropTypes.string.isRequired,
    review_id : PropTypes.string.isRequired
}

export default Review;
