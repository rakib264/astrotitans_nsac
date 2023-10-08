import React from "react";
import Swal from 'sweetalert2';

const BasicAlert = () => {

    const showAlert = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the button!',
            padding: '1em',
            customClass: 'sweet-alerts',
        });
        }

  return (
    <div>
      {/* message  */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Success message
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => showAlert()}
            >
              Success message!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicAlert;
