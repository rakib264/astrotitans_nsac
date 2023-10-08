import React from "react";
import Swal from "sweetalert2";

const PositionWiseNotification = () => {

  const showMessage = async (color) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            closeButton: 'btn-right',
            popup: `color-${color}`, // { "primary", "secondary", "info", "danger", "warning", }
        },
        buttonsStyling: false,
    });
    toast.fire({
        title: 'Example Text. Notifications',
    });
  };

  return (
    <div className="relative">
      {/* message  */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Position Wise Notifications
          </h5>
        </div>
        <div className="mb-5">
          <button
            type="button"
            className="btn btn-success"
            onClick={showMessage}
          >
            Position
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionWiseNotification;
