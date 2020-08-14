import { toast } from 'react-toastify';

function loginValidator(username, password) {
  if (username === '' || username.length < 3) {
    toast.error('Please provide a correct username', {
      position: 'bottom-center',
    });
    return false;
  }
  if (password === '' || password.length < 6) {
    toast.error('Password must be at least 6 characters long', {
      position: 'bottom-center',
    });
    return false;
  }

  return true;
}

export default loginValidator;
