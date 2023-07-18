// Here by using ReactNode we are able to pass complex types tp the app.tsx like using h1 tag

import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  onClose: ()=> void;
}

export const Alert = ({ children, onClose}: Props) => {
 
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </>
    // <div className="alert alert-primary">{children}</div>
  );
};
