import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ErrorsServer.css";

export const ErrorsServer = (errorsServer) => {
  const navigate = useNavigate();

  let objectResponse = errorsServer.errorsServer;
  let codeError = objectResponse.response.status;
  const handleLogin = () => {
    navigate("/inicio");
  };

  function showFirstCodeError(codeError) {
    const firstCodeNumber = codeError.toString()[0];
    return firstCodeNumber;
  }
  const firsCodeError = showFirstCodeError(codeError);

  function showLastCodeError(codeError) {
    const lastCodeString = codeError.toString();
    const lastCodeNumber = lastCodeString.charAt(lastCodeString.length - 1);
    return lastCodeNumber;
  }

  const lastCodeError = showLastCodeError(codeError);

  return (
    <div className="wrapper">
      <div className="error">
        <div className="number glitch">{firsCodeError}</div>
        <div className="illustration glitch">
          <div className="circle"></div>
          <div className="clip">
            <div className="paper">
              <div className="face">
                <div className="eyes">
                  <div className="eye eye__left"></div>
                  <div className="eye eye__right"></div>
                </div>
                <div className="cheeks cheeks__left"></div>
                <div className="cheeks cheeks__right"></div>
                <div className="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="number glitch">{lastCodeError}</div>
      </div>
      <div className="text">{objectResponse.message}</div>
      <a className="button" onClick={handleLogin} href="#">
        Back Home
      </a>
    </div>
  );
};
