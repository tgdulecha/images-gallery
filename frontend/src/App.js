import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './components/Welcome';
import Menu from './components/menu';
//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;   
//console.log(images);
const API_URL = process.env.REACT_APP_API_URL ||'http://127.0.0.1:5080'

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`${API_URL}/new_image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word, images }]);
      })
      .catch((err) => {
        console.log(err);
      })
    setWord('')
  }
  const handleDeleteImage = (id) => {
    setImages(images.filter(image => image.id !== id));

  };
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Menu />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ?
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3" >
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row> : <Welcome />
        }

      </Container>

    </div>
  )
};

export default App;
