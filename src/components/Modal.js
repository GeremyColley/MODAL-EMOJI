


const Modal = ({ setVisible }) => {
    return (
      <div className="modal-root">
        <div className="modal">
          {/* button pour fermer la modal */}
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            X
          </button>
          <p>
            Article je suis ici
          </p>
        </div>
      </div>
    );
  };
  
  export default Modal;