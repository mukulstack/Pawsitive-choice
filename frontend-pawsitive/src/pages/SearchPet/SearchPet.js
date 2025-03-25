import { useState, useEffect } from 'react';
import Style from '../SearchPet/SearchPet.module.css';
import Header from '../../components/Header/Header';

function SearchPet() {
    // State for filters (user input)
    const [filters, setFilters] = useState({
        type: '',
        breed: '',
        age: '',
        state: '',
        city: ''
    });

    // State for applied filters (used for fetching pets)
    const [appliedFilters, setAppliedFilters] = useState({ ...filters });

    // State to store fetched pets
    const [pets, setPets] = useState([]);

    // Breed options based on type
    const breedData = {
        Cat: ["Persian", "Scottish Fold", "Indie"],
        Dog: ["Chihuahua", "Golden Retriever", "Labrador"],
        Rabbit: ["Holland Lop", "Netherland Dwarf", "Flemish Giant"],
        Bird: ["Parrot", "Canary", "Budgie"]
    };

    // Fetch pets when appliedFilters change
    useEffect(() => {
        const fetchPets = async () => {
            try {
                let query = new URLSearchParams(appliedFilters).toString();
                let response = await fetch(`http://localhost:8080/pets/search?${query}`);
                let data = await response.json();
                setPets(data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, [appliedFilters]);

    // Handle filter input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // Apply filters only when the button is clicked
    const applyFilters = () => {
        setAppliedFilters(filters);
    };

    //remove filters
    const removeFilters = () => {
        window.location.reload();
    };

    return (
        <div className={Style.mainContainer}>
            <Header />
            <div className={Style.contentContainer}>

                {/* Filters Section */}
                <div className={Style.filtersContainer}>
                    <h1>Filters</h1>

                    <label>Type of Pet:</label>
                    <select name="type" value={filters.type} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bird">Bird</option>
                    </select>

                    <label>Breed:</label>
                    <select name="breed" value={filters.breed} onChange={handleChange}>
                        <option value="">All</option>
                        {filters.type && breedData[filters.type].map((breed, index) => (
                            <option key={index} value={breed}>{breed}</option>
                        ))}
                    </select>

                    <label>Age:</label>
                    <select name="age" value={filters.age} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="Puppyhood">Puppyhood (Up to 6 Months)</option>
                        <option value="Adolescence">Adolescence (6 - 18 Months)</option>
                        <option value="Adulthood">Adulthood (1.5 - 3 years)</option>
                        <option value="Senior">Senior (3 years or more)</option>
                    </select>

                    <label>State:</label>
                    <select name="state" value={filters.state} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="delhi">Delhi</option>
                        <option value="punjab">Punjab</option>
                        <option value="haryana">Haryana</option>
                    </select>

                    <label>City:</label>
                    <select name="city" value={filters.city} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="new delhi">New Delhi</option>
                        <option value="chandigarh">Chandigarh</option>
                        <option value="bahadurgarh">Bahadurgarh</option>
                    </select>

                    {/* Apply Filters Button */}
                    <button onClick={applyFilters}>Apply Filters</button>
                    <button onClick={removeFilters}>Remove Filters</button>
            
                </div>

                {/* Results Section */}
                <div className={Style.resultsContainer}>
                    <h3>Available Pets</h3>
                    {pets.length === 0 ? (
                        <p>No pets found</p>
                    ) : (
                        pets.map((pet) => (
                            <div className={Style.petCard} key={pet._id}>
                                <img src={pet.image || 'https://via.placeholder.com/150'} alt="pet" />
                                <h3>{pet.name}</h3>
                                <p>{pet.type} - {pet.breed}</p>
                                <p>Gender: {pet.gender}</p>
                                <p>Age: {pet.age}</p>
                                <p>Location: {pet.city}, {pet.state}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchPet;
