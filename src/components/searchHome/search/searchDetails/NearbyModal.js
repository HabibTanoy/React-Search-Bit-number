import React, { useRef, useEffect } from 'react';

const NearbyModal = ({ setOpenModal, handleNearByClick }) => {
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target) !== undefined) {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
    }
    //outside click
    setOpenModal(false);
  };

  return (
    <div className='modal-wrapper'>
      <div className='modal-content' ref={node}>
        <div className='tags modal-tags'>
          <button name='education' onClick={handleNearByClick}>
            Education
          </button>
          <button name='hotel' onClick={handleNearByClick}>
            Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NearbyModal;
