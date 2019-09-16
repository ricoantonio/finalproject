import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom'
import BogoWhite from '.././Webpic/BOGOlogoWhite.svg'
import { Divider } from '@material-ui/core';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <Fragment>
      <div className="side black">
        <div className="" >
          <Link to="/"><img src={BogoWhite} alt="BOGO" style={{marginTop:"3%", marginBottom:"1%"}} /></Link>
        </div>
        <Divider/>
        <div
        style={{width:400}}
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}>
          <Link to="/anime" >
            <div className="center zoom">
              <h4 className="sideText zoomText" style={{paddingTop:"8%",paddingBottom:"8%"}}>Anime</h4>
            </div>
          </Link>
          <Link to="/koreanvariety">
            <div className="center zoom">
              <h4 className="sideText zoomText" style={{paddingTop:"8%",paddingBottom:"8%"}}>Korean Variety</h4>
            </div>
          </Link>
          <Link to="/koreandrama">
            <div className="center zoom">
              <h4 className="sideText zoomText" style={{paddingTop:"8%",paddingBottom:"8%"}}>Korean Drama</h4>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );

  return (
    <div>
      <a onClick={toggleDrawer('left', true)} className="btn-floating btn-large waves-effect waves-light black" >
        <i className="material-icons navMenu">menu</i>
      </a>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

