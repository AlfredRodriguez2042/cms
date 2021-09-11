import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Banner from 'Components/Banners/BannerParallax'
import Page from 'Components/Base/Page'
import ProfileForm from 'Components/Forms/Profile'
import ProfileContent from './ProfileContent'
import background from 'assets/background/bg1.jpg'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '-95px',
    position: 'relative',
    zIndex: '3',
  },
}))

const Profile = () => {
  const classes = useStyles()
  const user = useSelector((state) => state.user?.username)
  return (
    <Page title={`${user.name}`}>
      <Banner image={background} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProfileContent />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Profile
