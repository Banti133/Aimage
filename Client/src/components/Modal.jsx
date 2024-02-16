import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsOpen(false);
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      setIsOpen(false);
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`absolute top-1/2 left-1/2 w-8/12 h-8/12 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <button
            className="absolute top-0 right-0 m-4 text-gray-400 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;