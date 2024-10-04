import React from 'react';
import './ToggleSwitch.css'; // O CSS do toggle que você implementou

const ToggleSwitch = ({ onToggle }) => {
  return (
    <div className="toggle-container">
      <input
        className="toggle-input"
        type="checkbox"
        onChange={onToggle} // Dispara a função de alternância de tema
      />
      <div className="toggle-handle-wrapper">
        <div className="toggle-handle">
          <div className="toggle-handle-knob"></div>
          <div className="toggle-handle-bar-wrapper">
            <div className="toggle-handle-bar"></div>
          </div>
        </div>
      </div>
      <div className="toggle-base">
        <div className="toggle-base-inside"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
