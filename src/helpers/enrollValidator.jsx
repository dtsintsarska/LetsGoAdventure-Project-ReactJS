import { toast } from 'react-toastify';

function enrollValidator(firstName, lastName, phone, email) {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (firstName === '' || firstName.length < 3) {
    toast.error(
      'First Name is required and should be at least 3 characters long',
      { position: 'bottom-center' }
    );
    return false;
  }
  if (lastName === '' || lastName.length < 3) {
    toast.error(
      'Last Name is required and should be at least 3 characters long',
      { position: 'bottom-center' }
    );
    return false;
  }
  if (!phone.startsWith('+359')) {
    toast.error('Phone number must start with +359', {
      position: 'bottom-center',
    });
    return false;
  }

  if (!emailRegex.test(email) || email === '') {
    toast.error('Please provide a correct email address', {
      position: 'bottom-center',
    });
    return false;
  }

  return true;
}

export default enrollValidator;
