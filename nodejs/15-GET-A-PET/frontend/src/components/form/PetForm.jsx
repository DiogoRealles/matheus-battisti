import { useState } from 'react';
import formStyle from './Form.module.css';
import Input from './Input';
import Select from './Select';

const PetForm = ({ handleSubmit, petData, btnLabel }) => {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado'];

  function onFileChange(event) {
    setPreview(Array.from(event.target.files));
    setPet({ ...pet, images: [...event.target.files] });
  }

  function handleChange(event) {
    setPet({ ...pet, [event.target.name]: event.target.value });
  }

  function handleColor(event) {
    setPet({
      ...pet,
      color: event.target.options[event.target.selectedIndex].text,
    });
  }

  function submit(event) {
    event.preventDefault();

    handleSubmit(pet);
  }

  return (
    <form onSubmit={submit} className={formStyle.form_container}>
      <div className={formStyle.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name} + ${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${import.meta.env.VITE_APP_API}/imgs/pets/${image}`}
                alt={pet.name}
                key={`${pet.name} + ${index}`}
              />
            ))}
      </div>

      <Input
        label="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        label="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={pet.name || ''}
      />
      <Input
        label="Idade do Pet"
        type="text"
        name="age"
        placeholder="Digite a idade"
        handleOnChange={handleChange}
        value={pet.age || ''}
      />
      <Input
        label="Peso do Pet"
        type="text"
        name="weight"
        placeholder="Digite o peso"
        handleOnChange={handleChange}
        value={pet.weight || ''}
      />

      <Select
        label="Selecione a cor"
        name="color"
        options={colors}
        handleChange={handleColor}
        value={pet.color || ''}
      />

      <input type="submit" value={btnLabel} />
    </form>
  );
};

export default PetForm;
