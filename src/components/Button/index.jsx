import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CustomButton = (props) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained"><div>
                <div>{props.name}{props.icon}</div>
            </div>
            </Button>
        </Stack>
    );
}

export default CustomButton;