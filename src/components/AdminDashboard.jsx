import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Nav from './Nav';
import AdminMovie from './AdminMovie';
import { connect } from "react-redux";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
}));

export default function AdminDashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Nav/>
        <Paper position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            centered
            >
            <Tab style={{backgroundColor:'white'}} label="Drama List" {...a11yProps(0)} />
            <Tab style={{backgroundColor:'white'}} label="Variety List" {...a11yProps(1)} />
            <Tab style={{backgroundColor:'white'}} label="Movie List" {...a11yProps(2)} />
            <Tab style={{backgroundColor:'white'}} label="Anime List" {...a11yProps(3)} />
            <Tab style={{backgroundColor:'white'}} label="User List" {...a11yProps(4)} />
            </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
            Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            <AdminMovie/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
            Item Four
        </TabPanel>
    </div>
  );
}