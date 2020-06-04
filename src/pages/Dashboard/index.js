import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import moment from 'moment';

import logo from '../../assets/enext.png';
import {
  Container,
  Title,
  SelectBreeds,
  SearchForms,
  FontView,
  ColorView,
  CustomDog,
  Breeds,
  Modal,
  TextModal,
} from './styles';

const Dashboard = () => {
  const colors = {
    green: {
      name: '#1ed760',
      border: '#1ed760',
    },
    blue: {
      name: '#03a9f4',
      border: '#03a9f4',
    },
    purple: {
      name: '#8905be',
      border: '#8905be',
    },
    '': {
      name: '#fff',
      border: '#fff',
    },
  };
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [colorName, setColorName] = useState('');
  const [dogList, setDogList] = useState();
  const [fontName, setFontName] = useState('Inter');
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('affenpinscher');
  const [dogImage, setDogImage] = useState('');
  const [customDog, setCustomDog] = useState(() => {
    const storageDog = localStorage.getItem('@Enext:customDog');
    console.log('storage', storageDog);

    if (storageDog) {
      setLoading(true);
      return JSON.parse(storageDog);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Enext:customDog', JSON.stringify(customDog));
  }, [customDog]);

  useEffect(() => {
    const fetchList = async () => {
      const { data } = await api.get(`/breeds/list/all`);
      const filterDogs = Object.keys(data.message);
      setDogList(filterDogs);
    };
    fetchList();
  }, []);

  async function handleImage(event) {
    event.preventDefault();

    const { data } = await api.get(`breed/${breed}/images/random`);
    setDogImage(data.message);
    setCustomDog({ name: '', image: data.message });
    setLoading(true);
    console.log(customDog);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const date = moment().format('L, h:mm:ss a');
    setCustomDog({
      name: dogName,
      font: fontName,
      color: colorName.name,
      image: customDog.image,
      date: date,
    });
    setDogName('');
    setOpen(true);
    setTimeout(() => setOpen(false), 5000);

    console.log(customDog);
  }

  function openModal() {
    setOpen(false);
    console.log('modal', open);
  }

  return (
    <>
      <Title>
        <img src={logo} alt="Logo" />
        <h1>Search Dogs</h1>
      </Title>
      <Container>
        {dogList && (
          <Breeds>
            <h1>Escolha a raça desejada: </h1>
            <SelectBreeds onChangeCapture={(e) => setBreed(e.target.value)}>
              {dogList.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
            </SelectBreeds>
            <button type="submit" onClick={handleImage}>
              Buscar
            </button>
          </Breeds>
        )}
        <SearchForms onSubmit={handleSubmit}>
          <input
            type="text"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            placeholder="Digite o nome do cachorro"
          />
          <div>
            <ColorView>
              <p>Escolha a cor da fonte: </p>
              <button
                type="button"
                style={{
                  background: '#1ed760',
                  borderColor:
                    colorName.border === '#1ed760' ? colorName.border : '#fff',
                }}
                onClick={() => setColorName(colors['green'])}
              />

              <button
                type="button"
                style={{
                  background: '#8905be',
                  borderColor:
                    colorName.border === '#8905be' ? colorName.border : '#fff',
                }}
                onClick={() => setColorName(colors['purple'])}
              />
              <button
                type="button"
                style={{
                  background: '#03a9f4',
                  borderColor:
                    colorName.border === '#03a9f4' ? colorName.border : '#fff',
                }}
                onClick={() => [setColorName(colors['blue'])]}
              />
            </ColorView>

            <FontView>
              <p>Escolha a fonte: </p>

              <button type="button" onClick={() => setFontName('Inter')}>
                Inter
              </button>
              <button type="button" onClick={() => setFontName('Roboto')}>
                Roboto
              </button>
              <button type="button" onClick={() => setFontName('Indie Flower')}>
                Indie Flower
              </button>
            </FontView>
          </div>
          <button type="submit">Salvar</button>
        </SearchForms>
        {customDog.image && (
          <CustomDog>
            <div>
              <h1
                style={{
                  fontFamily: customDog.font,
                  color: customDog.color,
                }}
              >
                {customDog.name}
              </h1>
              <img src={customDog.image} alt="Doguinho" />
            </div>
          </CustomDog>
        )}
      </Container>
      <Modal hasOpen={open}>
        <TextModal>Salvo com sucesso!</TextModal>
        <button type="button" onClick={openModal}>
          X
        </button>
      </Modal>
    </>
  );
};

export default Dashboard;
