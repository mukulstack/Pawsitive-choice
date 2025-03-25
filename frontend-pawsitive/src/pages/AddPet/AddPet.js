import { useState } from "react";
import Header from "../../components/Header/Header";
import Style from '../AddPet/AddPet.module.css';

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    age: "",
    breed: "",
    type: "",
    gender: "",
    description: "",
    image: "",
    state: "",
    city: "",
  });

  const [breedOptions, setBreedOptions] = useState([]);

  const breedData = {
    cat: ["Persian", "Scottish Fold", "Indie"],
    dog: ["Chihuahua", "Golden Retriever", "Labrador"],
    rabbit: ["Holland Lop", "Netherland Dwarf", "Flemish Giant"],
    bird: ["Parrot", "Canary", "Budgie"]
  };
  
  const handleChange = (e) => {
    const {name,value }= e.target;
    setPet({...pet, [name]: value})
    if (name === "type") {
      setBreedOptions(breedData[value] || []);
      setPet((prevPet) => ({ ...prevPet, breed: "" })); // Reset breed when type changes
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/pets/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
    // ✅ Reset the form fields after successful submission
    setPet({
      name: "",
      age: "",
      breed: "",
      type: "",
      gender: "",
      description: "",
      image: "",
      state: "",
      city: "",
    });

    setBreedOptions([]); // Reset breed options if type is cleared
  };

  return (
    <div className={Style.addPetContainer}>
      <Header />
      <div className={Style.container}>
        <div className={Style.title}>Add Pet</div>
        <div className={Style.addPetForm}>
          <form onSubmit={handleSubmit}>
              <label className={Style.label}  htmlFor='name' > Name: </label>
              <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter Name" 
                  onChange={handleChange} 
                  value={pet.name}
              />

              <label className={Style.label} htmlFor='age' >Age: </label> 
              <select name="age" onChange={handleChange} value={pet.age}>
                <option value=""  disabled >Select age</option>
                <option value="Puppyhood">Puppyhood (Up to 6 Months)</option>
                <option value="Adolescence">Adolescence (6 - 18 Months)</option>
                <option value="Adulthood">Adulthood (1.5 - 3 years)</option>
                <option value="Senior">Senior (3 years or more)</option>
              </select>

              <label className={Style.label} htmlFor="type" >Type of Pet: </label>
              <select name="type" onChange={handleChange} value={pet.type}>
                  <option value="" disabled >Select a pet</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="bird">Bird</option>
              </select>

              <label className={Style.label} htmlFor='breed'>Breed: </label>
              <select name="breed" onChange={handleChange} disabled={!pet.type}>
              <option value="">Select a breed</option>                  
                {breedOptions.map((breed, index) => (
                  <option key={index} value={breed}>{breed}</option>
                ))}
              </select>


              <label className={Style.label} htmlFor='gender'>Gender: </label>
              <select name="gender" onChange={handleChange} value={pet.gender} >
                <option value=""disabled >Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <label className={Style.label} htmlFor='description'>Description: </label>
              <textarea
                  className={Style.description} 
                  name="description" 
                  placeholder="Write something about your pet....." 
                  onChange={handleChange} 
                  value={pet.description}

              />

              <label className={Style.label} htmlFor='image'>Image: </label>
              <input 
                  type="text" 
                  name="image" 
                  placeholder="Image URL" 
                  onChange={handleChange} 
                  value={pet.image}
              />
            
              <div className={Style.addressContainer}>
                  <label className={Style.label} htmlFor='state'>State: </label> 
                  <select name="state" onChange={handleChange} value={pet.state}>
                    <option value="" disabled >Select State</option>
                    <option value="Delhi" >Delhi</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Haryana">Haryana</option>
                  </select>

                  <label className={Style.label} htmlFor='city'>City: </label>
                  <select name="city" onChange={handleChange} value={pet.city}>
                    <option value="" disabled> Select City </option>
                    <option value="New delhi">New Delhi</option>
                    <option value="Bahadurgarh">Bahadurgarh</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chandigarh">Chandigarh</option>
                  </select>
              </div>
            <button type="submit">Add Pet</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
