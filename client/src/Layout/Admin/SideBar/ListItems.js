import {
  Collapse,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import {
  ChevronRight,
  Dashboard,
  Error,
  ExpandMore,
  Folder,
  LocalMall,
  People,
  Settings,
  Store,
} from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useToggle from 'Hooks/useToggle'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    textTransform: 'none',
  },
  links: {
    paddingLeft: theme.spacing(6),
  },
}))
const ListItems = () => {
  const history = useHistory()
  const classes = useStyles()
  const [dashboard, setDashboard] = useToggle()
  const [article, setArticle] = useToggle()
  const [customer, setCustomer] = useToggle()
  const [order, setOrder] = useToggle()
  const [store, setStore] = useToggle()
  const goTo = (path) => {
    history.push(`/admin/${path}`)
  }

  return (
    <>
      <ListItem open={dashboard} onClick={setDashboard} button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>

        <ListItemText primary="Dashboard" />
        {dashboard ? <ExpandMore /> : <ChevronRight />}
      </ListItem>

      <Collapse component="li" in={dashboard} timeout="auto" unmountOnExit>
        <Divider />
        <ListItem
          className={classes.links}
          button
          onClick={() => goTo('dashboard')}
        >
          <ListItemText primary={<li>Analytics</li>} />
        </ListItem>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Articles</li>} />
        </ListItem>
        <Divider />
      </Collapse>

      <ListItem open={article} onClick={setArticle} button>
        <ListItemIcon>
          <LocalMall />
        </ListItemIcon>
        <ListItemText primary="Articles" />
        {article ? <ExpandMore /> : <ChevronRight />}
      </ListItem>

      <Collapse component="li" in={article} timeout="auto" unmountOnExit>
        <Divider />

        <ListItem
          className={classes.links}
          button
          onClick={() => goTo('article/edit')}
        >
          <ListItemText primary={<li>Create Article</li>} />
        </ListItem>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Articles</li>} />
        </ListItem>
        <Divider />
      </Collapse>

      <ListItem open={customer} onClick={setCustomer} button>
        <ListItemIcon>
          <People />
        </ListItemIcon>

        <ListItemText primary="Customers" />
        {customer ? <ExpandMore /> : <ChevronRight />}
      </ListItem>

      <Collapse component="li" in={customer} timeout="auto" unmountOnExit>
        <Divider />

        <ListItem
          className={classes.links}
          button
          onClick={() => goTo('customers')}
        >
          <ListItemText primary={<li>Customer List</li>} />
        </ListItem>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Customer</li>} />
        </ListItem>
        <Divider />
      </Collapse>

      <ListItem open={order} onClick={setOrder} button>
        <ListItemIcon>
          <Folder />
        </ListItemIcon>

        <ListItemText primary="Orders" />
        {order ? <ExpandMore /> : <ChevronRight />}
      </ListItem>

      <Collapse component="li" in={order} timeout="auto" unmountOnExit>
        <Divider />

        <ListItem className={classes.links} button>
          <ListItemText primary={<li>Order List</li>} />
        </ListItem>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Order</li>} />
        </ListItem>
      </Collapse>
      <ListItem open={store} onClick={setStore} button>
        <ListItemIcon>
          <Store />
        </ListItemIcon>

        <ListItemText primary="Store" />
        {store ? <ExpandMore /> : <ChevronRight />}
      </ListItem>

      <Collapse component="li" in={store} timeout="auto" unmountOnExit>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Products</li>} />
        </ListItem>
        <ListItem className={classes.links} button>
          <ListItemText primary={<li>View Orderr</li>} />
        </ListItem>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button onClick={() => goTo('Error')}>
        <ListItemIcon>
          <Error />
        </ListItemIcon>
        <ListItemText primary="Error" />
      </ListItem>
    </>
  )
}

export default ListItems
