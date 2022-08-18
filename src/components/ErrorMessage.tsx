import CloseIcon from '@mui/icons-material/Close'
import { AlertTitle, Grid } from '@mui/material'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'

export default function ErrorMessage() {
  const [open, setOpen] = React.useState(true)

  return (
    <Grid container>
      <Grid item xs={8}>
        <Box sx={{ width: '100%' }} py={2}>
          <Collapse in={open}>
            <Alert
              severity='error'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Error</AlertTitle>
              An error ocurred while searching files.
            </Alert>
          </Collapse>
        </Box>
      </Grid>
    </Grid>
  )
}
