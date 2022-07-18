import React from "react";
function Modal (){
    return(
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100 fw-bold" id="staticBackdropLabel">Write to Us</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingName" placeholder="Your Name"/>
                                <label htmlFor="floatingName"><i className="fas fa-user prefix grey-text"></i> Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail"
                                    placeholder="name@example.com" />
                                <label htmlFor="floatingEmail"><i className="fas fa-envelope prefix grey-text"></i> Email
                                    address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Your Password" />
                                <label htmlFor="floatingEmail"><i className="fas fa-lock prefix grey-text"></i> Your
                                    password</label>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn w-50 btn-success">Send</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Modal;