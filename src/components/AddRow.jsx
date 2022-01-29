import { useState } from 'react';

import { TextField, Checkbox, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textfield: {
        width: '100%'
    },
    tablecell: {
        padding: ['2px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse'
    },
    checkbox: {
        padding: ['2px 5px', '!important'],
    }
});

const AddRow = ({ addRows, rowId, data, setData }) => {
    const classes = useStyles();

    const [checkCheckbox, setCheckCheckbox] = useState(false);

    return (
        <TableRow>
            <TableCell className={classes.tablecell}>
                <Checkbox 
                    checked={checkCheckbox}
                    className={classes.checkbox} 
                    size='large' 
                    name={rowId}
                   />
            </TableCell>
            <TableCell className={classes.tablecell}>
                <TextField className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    name="key"
                   
                />
            </TableCell>
            <TableCell className={classes.tablecell}>
                <TextField className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    name="value"
                   
            /></TableCell>
        </TableRow>
    )
}

export default AddRow;