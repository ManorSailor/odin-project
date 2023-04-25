import React from 'react';

class SettingsTab extends React.Component {
  render() {
    return (
      <div className="settings">
        <h3 className="form-title">Settings</h3>

        <ul className="settings-list">
          <li className="">
            <button className="btn">Export as PDF</button>
          </li>
          <li className="">
            <button className="btn">Export as JSON</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingsTab;
