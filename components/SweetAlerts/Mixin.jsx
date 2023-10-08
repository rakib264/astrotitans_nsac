import React from "react";
import Swal from 'sweetalert2';
import { IoMdDoneAll } from 'react-icons/io'

const MixinAlert = () => {

    const showAlert = async ( color ) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: `color-${color}`,
            },
        });
        toast.fire({
            icon: 'success', //{'error', 'warning'}
            title: 'Signed in successfully',
            padding: '10px 20px',
        });
        }

  return (
    <div>
      {/* message  */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Mixin
          </h5>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => showAlert('primary')}
            >
              Mixin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixinAlert;
