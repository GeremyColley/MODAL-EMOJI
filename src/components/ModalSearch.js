
import Line from "../components/Line";

const ModalSearch = ({ setVisible , results}) => {
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
          {// la méthode map va retourner autant de composants Line qu'il y a d'élément dans le tableau results
            results.map((emoji, index) => {
              return <Line key={index} emoji={emoji} min={3}/>;
          })}
        </div>
      </div>
    );
  };
  
  export default ModalSearch;