import React from 'react';

const SideNav = props => {
  return (
    <nav id="sidebar">
      <div
        class="sidebar-header"
        onClick={() => props.changeNamefromHeader ('Hari')}
      >
        <h3>Bootstrap Sidebar</h3>
      </div>

    </nav>
  );
};

export default SideNav;
