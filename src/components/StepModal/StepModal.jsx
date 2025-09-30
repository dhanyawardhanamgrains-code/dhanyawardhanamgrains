import React from "react";
import "./StepModal.css";
import Close from "../../assets/icon/close.svg";

const StepModal = ({ isOpen, onClose, selectedStep }) => {
  if (!isOpen || !selectedStep) return null;

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

  return (
    <div className="step-modal-overlay" onClick={handleBackdropClick}>
      <div className="step-modal-container">
        <div className="step-modal-title-container">
          <h1>{selectedStep.title}</h1>
          <img 
            src={Close} 
            alt="Close" 
            onClick={handleCloseClick}
            className="step-modal-close-icon"
          />
        </div>
          <div className="step-modal-content-container">
            <div className="step-modal-image-wrapper">
              <img src={selectedStep.img} alt={selectedStep.title} />
              <button
                className="step-slide-button"
                aria-label={`Step ${selectedStep.id}`}
                type="button"
              >
                <p>{`Step ${selectedStep.id}`}</p>
              </button>
            </div>
            <div className="step-modal-content-text-container">
              <div className="step-modal-content-text-title-container">
                <h1>Capacity & Equipment :</h1>
                <div className="step-modal-content-chips-container">
                  {selectedStep.detailsPrimary && selectedStep.detailsPrimary !== "" && (
                    <div className="step-modal-content-chip-primary">
                      <p>{selectedStep.detailsPrimary}</p>
                    </div>
                  )}
                  {selectedStep.detailsSecondary && selectedStep.detailsSecondary !== "" && (
                    <div className="step-modal-content-chip-secondary">
                      <p>{selectedStep.detailsSecondary}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="step-modal-content-text-description-container">
                <h1>Process Details:</h1>
                <p>{selectedStep.processDetails}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default StepModal;
