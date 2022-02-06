import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.showDrawer = this.showDrawer.bind(this);
    this.hideDrawer = this.hideDrawer.bind(this);
    this.state = { clickedStripes: false };
  }

  showDrawer(e) {
    if (e.target.className === 'fas fa-bars') {
      this.setState({ clickedStripes: true });
    }
  }

  hideDrawer(e) {
    if (e.target.className.includes('link') || (e.target.className.includes('page-container'))) {
      this.setState({ clickedStripes: false });
    }
  }

  render() {
    const menuButton = 'fas fa-bars';

    let menuClass = null;
    let pageClass = null;

    if (this.state.clickedStripes === true) {
      menuClass = 'drawer white-background-color drawer-reveal';
      pageClass = 'page-container full-vp transparent-background-color';

    } else if (this.state.clickedStripes === false) {
      menuClass = 'drawer white-background-color';
      pageClass = 'page-container full-vp';

    }
    return (
      <div className='link-bg full-vp'>
        <div onClick={this.hideDrawer} className={pageClass}>
          <i onClick={this.showDrawer} className={menuButton}></i>
          <div className={menuClass}>
            <div>
              <h1>Choose a Game</h1>
            </div>
            <div className="align-items-center link">
              <a className="target-link">The Legend of Zelda</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">A Link to the Past</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Link's Awakening</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Ocarina of Time</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Majora's Mask</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Wind Waker</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Skyward Sword</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Link Between Worlds</a>
            </div>
            <div className="align-items-center link">
              <a className="target-link">Breath of the Wild</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
