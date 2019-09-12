import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom'
import Logo from "../logo1.svg"


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
      <div className="side">
        <img src={Logo} alt="" style={{marginTop:"8%"}} />
        <div
        style={{width:500}}
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}>
          <Link to="/anime">
            <div className="center zoom" style={{marginTop:"5%",marginBottom:"5%"}}>
              <h3 className="sideText zoomText">Anime</h3>
            </div>
          </Link>
          <Link to="/koreanvariety">
            <div className="center zoom" style={{marginTop:"5%",marginBottom:"5%"}}>
              <h3 className="sideText zoomText">Korean Variety</h3>
            </div>
          </Link>
          <Link to="/koreandrama">
            <div className="center zoom" style={{marginTop:"5%",marginBottom:"5%"}}>
              <h3 className="sideText zoomText">Korean Drama</h3>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );

  return (
    <div>
      <a onClick={toggleDrawer('left', true)} className="btn-floating btn-large waves-effect waves-light indigo lighten-2 z-depth-0">
        <i className="material-icons">more_vert</i>
      </a>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

