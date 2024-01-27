import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-xl shadow-md z-10">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-main-purple text-white px-4 py-2 mr-2 rounded-xl"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-main-gray text-gray-700 px-4 py-2 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
