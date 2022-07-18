import React from "react";
function SocialIcon(){
    return(
        <div className="my-3">
        <a href="https://www.facebook.com/faimran.imran/">
        <button
          type="button"
          className="btn btn-sm text-light rounded-2 me-1"
          id="fb"
        >
          <small>
            <i className="fa-brands fa-facebook"></i> Share
          </small>
        </button>
        </a>
        <a href="https://www.youtube.com/watch?v=u69xERyF59g&t=8s">
        <button
          type="button"
          className="btn btn-sm text-light rounded-2 me-1"
          id="yt"
        >
          <small>
          <i className="fa-brands fa-youtube"></i> share
          </small>
        </button>
        </a>
       <a href="https://www.linkedin.com/in/fowjaelahamed/">
       <button
          type="button"
          className="btn btn-sm text-light rounded-2 me-1"
          id="linked"
        >
          <small>
            <i className="fa-brands fa-linkedin"></i> Share
          </small>
        </button>
       </a>
      </div>
    );
}
export default SocialIcon;