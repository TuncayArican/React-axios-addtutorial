
import { useState } from 'react';

const EditTutorial = ({item, editTutorial}) => {
    const [title, setTitle] = useState(item.title);
    const [desc, setDesc] = useState(item.description);

    return (
        
      <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={() => editTutorial(item.id, title, desc)} >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditTutorial;