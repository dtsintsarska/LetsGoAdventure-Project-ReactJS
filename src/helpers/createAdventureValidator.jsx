import { toast } from 'react-toastify';

const createAdventureValidator = (
  destination,
  description,
  country,
  category,
  guide,
  days,
  seats,
  level,
  price,
  image,
  date
) => {
  const allowedCategories = ['MTB', 'Mountain', 'Sea'];
  const allowedLevels = ['easy', 'advanced', 'experts'];
  const dateRegex = new RegExp(/[0-9]{2}\s[A-za-z]+\s[0-9]{4}/i);

  if (destination.length <= 2 || destination === '') {
    toast.error(
      'Destionation is required and must be at least 3 characters long'
    );
    return false;
  }

  if (category === '' || !allowedCategories.includes(category)) {
    toast.error('Category must be one of the following: MTB, Mountain or Sea');
    return false;
  }
  if (description.length <= 10 || description === '') {
    toast.error('Description is required and must be at least 10 chars long');
    return false;
  }

  if (level === '' || !allowedLevels.includes(level)) {
    toast.error(
      'Level must be one of the following: easy, advanced or experts'
    );
    return false;
  }

  if (country.length <= 2 || country === '') {
    toast.error('Country is required and must be at least 3 characters long');
    return false;
  }

  if (guide.length <= 2 || guide === '') {
    toast.error('Guide is required and must be at least 3 characters long');
    return false;
  }

  if (!image.startsWith('http')) {
    toast.error('Image must be a valid url - please upload valid photo');
    return false;
  }

  if (!dateRegex.test(date) || date === '') {
    toast.error('Date is required and must be in format dd month yyyy');
    return false;
  }

  if (price < 0 || price === '') {
    toast.error('Price must be positive number');
    return false;
  }

  if (seats < 0 || seats === '') {
    toast.error('Maximum number or participants must be positive number');
    return false;
  }

  if (days < 0 || days === '') {
    toast.error('Days must be positive number');
    return false;
  }

  return true;
};

export default createAdventureValidator;
