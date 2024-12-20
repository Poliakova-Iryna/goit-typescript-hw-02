import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    largeImage: string;
    description: string;
}

const ImageModal: React.FC <ImageModalProps> = ({isOpen, onRequestClose, largeImage, description}) => {
 return (
 <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      closeTimeoutMS={200}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
          maxWidth: '90vw',   
          maxHeight: '90vh',
        },
      }}
    >
      <h2>{description}</h2>
      <img src={largeImage} alt={description} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>

 );
};

export default ImageModal;