import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Get a card at the bakery!</h2>
        <h3>And receive every 11th bread as a gift.</h3>
        <button className="butt-m" onClick={onClose}> Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
