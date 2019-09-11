import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom'
import Logo from "../logo1.svg"
import Anime from "../Anime.svg"
import Movie from "../Movie.svg"
import KoreanDrama from "../KoreanDrama.svg"


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
          <Link>
          <div className="center" style={{marginTop:"10%"}}>
            <h3 className="sideText">Anime</h3>
          </div>
          </Link>
          <Link>
          <div className="center" style={{marginTop:"10%"}}>
            <h3 className="sideText">Movie</h3>
          </div>
          </Link>
          <Link>
          <div className="center" style={{marginTop:"10%"}}>
            <h3 className="sideText">Korean Drama</h3>
          </div>
          </Link>
      </div>
      </div>
    </Fragment>
  );

  return (
    <div>
        <a onClick={toggleDrawer('left', true)} className="btn-floating btn-large waves-effect waves-light indigo lighten-2 z-depth-0">
            <i className="material-icons">dehaze</i>
        </a>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
        </Drawer>
    </div>
  );
}

