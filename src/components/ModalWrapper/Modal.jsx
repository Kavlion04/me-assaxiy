import "./Modal.css"
const ModalWrapper = ({ children, open, onClose,  }) => {

  
  return (
    <>
      <div onClick={onClose} className="modal-overlay">

      </div>
      <div className="modal-content">
        <div>{children}</div>
      </div>
    </>
  )
}

export default ModalWrapper