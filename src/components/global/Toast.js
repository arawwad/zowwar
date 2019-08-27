import React from 'react';
import Toast from 'react-bootstrap/Toast';


const ErrorToast = ({ show, setShow }) => (

    <Toast 
        style={{
        position: 'fixed',
        top: '50px',
        right: '50px',
        }} 
        onClose={() => setShow(false)} 
        show={show} 
        delay={3000} 
        autohide
    >
        <Toast.Header>
            <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Api Error!. Please Try Again</Toast.Body>
    </Toast>
)

export default ErrorToast;