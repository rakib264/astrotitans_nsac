import React from "react";
import Swal from "sweetalert2";

const ConfirmAlert = () => {

    // const deleteFunc = () => {
    //     console.log("Deleted");
    // }

  const showAlert = async () => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        timer: 5000,
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: '#FB7185',
        padding: '1em',
        customClass: 'sweet-alerts',
    }).then((result) => {
        if (result.value) {
            //deleteFunc();
            Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
        }
    });
  };

  return (
    <div>
      {/* Warning message */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">{`Warning message`}</h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => showAlert()}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
