import React from 'react'
import './BenefitModal.css'
import Close from '../../assets/icon/close.svg'

const BenefitModal = ({ isOpen, selectedBenefit, onClose }) => {

    if (!isOpen || !selectedBenefit) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      document.body.style.overflow = 'unset';
      onClose();
    }
  };

  const handleCloseClick = () => {
    document.body.style.overflow = 'unset';
    onClose();
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        document.body.style.overflow = 'unset';
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when modal closes
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return <>
    <div className='benefit-modal-overlay' onClick={handleBackdropClick}>
        <div className='benefit-modal-container'>
            <div className='benefit-modal-title-container'>
                <div className='benefit-modal-title-container-text'>
                    <h1>{selectedBenefit.title}</h1>
                    <button>{selectedBenefit.tag}</button>
                </div>
                <img 
                    src={Close} 
                    alt='close' 
                    onClick={handleCloseClick}
                    className='benefit-modal-close-icon' 
                />
            </div>
            <div className='benefit-modal-content-container'>
                <p>{selectedBenefit.info}</p>
            </div>
        </div>
    </div>
  </>
}

export default BenefitModal