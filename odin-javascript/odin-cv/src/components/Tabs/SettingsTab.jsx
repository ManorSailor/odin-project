export default function SettingsTab() {
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
