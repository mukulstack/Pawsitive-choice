import { useState } from 'react';
import './SearchPet.css';
import Header from '../../components/Header/Header';

function SearchPet() {
    const [filters, setFilters] = useState({
        animalType: '',
        breed: '',
        age: '',
        state: '',
        city: '',
        pincode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className='main-container'>
            <Header />
            <div className='content-container'>
                {/* Filters Section */}
                <div className='filters-container'>
                    <h3>Filters</h3>

                    {/* Animal Type Filter */}
                    <div>
                        <label>Animal Type:</label>
                        <select
                            name="animalType"
                            value={filters.animalType}
                            onChange={handleChange}
                        >
                            <option value="">All</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                        </select>
                    </div>

                    {/* Breed Filter */}
                    <div>
                        <label>Breed:</label>
                        <select
                            name="breed"
                            value={filters.breed}
                            onChange={handleChange}
                        >
                            <option value="">All</option>
                            {/* Example breeds, you can make this dynamic or based on animalType */}
                            {filters.animalType === 'dog' && (
                                <>
                                    <option value="labrador">Labrador</option>
                                    <option value="bulldog">Bulldog</option>
                                </>
                            )}
                            {filters.animalType === 'cat' && (
                                <>
                                    <option value="persian">Persian</option>
                                    <option value="siamese">Siamese</option>
                                </>
                            )}
                        </select>
                    </div>

                    {/* Age Filter */}
                    <div>
                        <label>Age:</label>
                        <select
                            name="age"
                            value={filters.age}
                            onChange={handleChange}
                        >
                            <option value="">Any Age</option>
                            <option value="puppy">Puppy</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>

                    {/* State Filter */}
                    <div>
                        <label>State:</label>
                        <select
                            name="state"
                            value={filters.state}
                            onChange={handleChange}
                        >
                            <option value="">All States</option>
                            <option value="california">New Delhi</option>
                            <option value="texas">Haryana</option>
                            <option value="florida">Punjab</option>
                        </select>
                    </div>

                    {/* City Filter */}
                    <div>
                        <label>City:</label>
                        <select
                            name="city"
                            value={filters.city}
                            onChange={handleChange}
                        >
                            <option value="">All Cities</option>
                            <option value="los_angeles">New Delhi</option>
                            <option value="houston">Bahadurgarh</option>
                            <option value="miami">Mumbai</option>
                        </select>
                    </div>

                    {/* Pincode Filter */}
                    <div>
                        <label>Pincode:</label>
                        <input
                            type="text"
                            name="pincode"
                            value={filters.pincode}
                            onChange={handleChange}
                            placeholder="Enter Pincode"
                        />
                    </div>
                </div>

                {/* Results Section */}
                <div className='results-container'>
                    <h3>Available Pets</h3>
                    {/* Example dummy results, this can be dynamically populated */}
                    <div className='pet-card'>
                        <img src="./images/dog1.jpgs" alt="pet" />
                        <p>Dog - Leo</p>
                        <p>Breed: Labrador</p>
                        <p>Age: Puppy</p>
                        <p>Location: Delhi</p>
                    </div>
                    <div className='pet-card'>
                        <img src="https://via.placeholder.com/150" alt="pet" />
                        <p>Cat - Bimo</p>
                        <p>Breed: Persian</p>
                        <p>Age: Adult</p>
                        <p>Location: Delhi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPet;
