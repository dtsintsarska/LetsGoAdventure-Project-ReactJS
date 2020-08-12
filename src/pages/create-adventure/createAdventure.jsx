import React, { useState, Fragment } from 'react';
import styles from './create-adventure.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import getCookie from '../../helpers/cookie';

const CreateAdventurePage = () => {
  const [destination, setDestination] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [guide, setGuide] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [level, setLevel] = useState('');
  const [days, setDays] = useState('');
  const [seats, setSeats] = useState('');
  const [galleryPhotoOne, setGalleryPhotoOne] = useState('');
  const [galleryPhotoTwo, setGalleryPhotoTwo] = useState('');
  const [galleryPhotoThree, setGalleryPhotoThree] = useState('');
  const [galleryPhotoFour, setGalleryPhotoFour] = useState('');

  const handleSubmit = async (e) => {
    let images = [];
    if (galleryPhotoOne) {
      images.push(galleryPhotoOne);
    }
    if (galleryPhotoTwo) {
      images.push(galleryPhotoTwo);
    }
    if (galleryPhotoThree) {
      images.push(galleryPhotoThree);
    }
    if (galleryPhotoFour) {
      images.push(galleryPhotoFour);
    }

    await fetch('http://localhost:9999/api/offers/create', {
      method: 'POST',
      body: JSON.stringify({
        destination,
        country,
        description,
        guide,
        image,
        category,
        date,
        price,
        level,
        days,
        seats,
        galery: images,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('x-auth-token'),
      },
    });
    setDestination('');
    setCountry('');
    setDescription('');
    setSeats('');
    setImage('');
    setLevel('');
    setPrice('');
    setDate('');
    setDays('');
    setCategory('');
    setGuide('');
  };

  const openWidget = (event, update) => {
    event.preventDefault();
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dvk3zertv',
        uploadPreset: 'letsgoadventure',
      },
      (error, result) => {
        if (result.event === 'success') {
          update(result.info.url);
        }
      }
    );

    widget.open();
  };

  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='Create New Adventure' />
        <h4>Fulfill all fields to create a new adventure</h4>
      </section>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          label='Destination'
          id='destination'
          placeholder='Destination description'
        />
        <Input
          type='text'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label='Country'
          id='country'
          placeholder='Country or Region'
        />
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label='Description'
          id='description'
          placeholder='Description of the adventure - day by day'
        />
        <Input
          type='text'
          value={guide}
          onChange={(e) => setGuide(e.target.value)}
          label='Guide'
          id='guide'
          placeholder='Name of the guide/guides'
        />
        <Input
          type='text'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          label='Date'
          id='date'
          placeholder='Choose date'
        />
        <Input
          type='number'
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          label='Number of max participants'
          id='seats'
          placeholder='Set a max number of participants'
        />

        <Input
          type='number'
          value={days}
          onChange={(e) => setDays(e.target.value)}
          label='Days'
          id='days'
          placeholder='Choose how many days'
        />
        <Input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label='Category'
          id='category'
          placeholder='Choose category - MTB, Mountain, Sea or Abroad'
        />
        <Input
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label='Price'
          id='price'
          placeholder='Set a price'
        />
        <Input
          type='text'
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          label='Level'
          id='level'
          placeholder='Choose level - easy, advanced, experts'
        />

        <div className={styles.upload}>
          <div>
            Gallery Image:
            <button
              onClick={(e) => {
                openWidget(e, setGalleryPhotoOne);
              }}
            >
              Upload Image
            </button>
            {galleryPhotoOne ? (
              <img src={galleryPhotoOne} alt='Gallery1' />
            ) : null}
          </div>
          <div>
            Gallery Image:
            <button
              onClick={(e) => {
                openWidget(e, setGalleryPhotoTwo);
              }}
            >
              Upload Image
            </button>
            {galleryPhotoTwo ? (
              <img src={galleryPhotoTwo} alt='Gallery2' />
            ) : null}
          </div>
          <div>
            Gallery Image:
            <button
              onClick={(e) => {
                openWidget(e, setGalleryPhotoThree);
              }}
            >
              Upload Image
            </button>
            {galleryPhotoThree ? (
              <img src={galleryPhotoThree} alt='Gallery3' />
            ) : null}
          </div>
          <div>
            Gallery Image:
            <button
              onClick={(e) => {
                openWidget(e, setGalleryPhotoFour);
              }}
            >
              Upload Image
            </button>
            {galleryPhotoFour ? (
              <img src={galleryPhotoFour} alt='Gallery4' />
            ) : null}
          </div>
          <div>
            Main Image:
            <button
              onClick={(e) => {
                openWidget(e, setImage);
              }}
            >
              Upload Image
            </button>
            {image ? <img src={image} alt='Main' /> : null}
          </div>
        </div>

        <SubmitButton title='Submit' onClick={handleSubmit} />
      </form>

      <Footer />
    </Fragment>
  );
};

export default CreateAdventurePage;
