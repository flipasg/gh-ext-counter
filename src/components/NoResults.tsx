import GitHubIcon from '@mui/icons-material/GitHub'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

export default function NoResults() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Card>
          <CardHeader
            avatar={
              <IconButton aria-label='settings'>
                <GitHubIcon />
              </IconButton>
            }
            title='No results found.'
            subheader='Try another owner or repository.'
          />
        </Card>
      </Grid>
    </Grid>
  )
}
