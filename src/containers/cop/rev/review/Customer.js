
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.review_no}</TableCell>
                <TableCell>{this.props.review_title}</TableCell>
                <TableCell>{this.props.review_detail}</TableCell>
                <TableCell>{this.props.review_id}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;