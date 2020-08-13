import { toast } from 'react-toastify';

function registerValidator(username, password, rePassword) {
  if (username === '' || username.length < 3) {
    toast.error('Username should be at least 3 characters long!');
    return false;
  }

  if (password) {
    if (password === '' || password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }
  }
  if (password !== rePassword) {
    toast.error('Passwords do not match');
    return false;
  }

  return true;
}

export default registerValidator;
