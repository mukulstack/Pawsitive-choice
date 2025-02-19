import './SavedPets.css';
import Header from '../../components/Header/Header';

function SavedPets() {
    return (
        <div className='main-container'>
            <Header />
            <div className='content-container'>
                <div className='results-container'>
                    <h3>Saved Pets</h3>
                    {/* Example dummy results, this can be dynamically populated */}
                    <div className='pet-card'>
                        <img src="./images/dog1.jpgs" alt="pet" />
                        <p>Dog - Leo</p>
                        <p>Breed: Labrador</p>
                        <p>Age: Puppy</p>
                        <p>Location: Delhi</p>
                    </div>
                    <div className='pet-card'>
                        <img src="sdf/15" alt="pet" />
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

export default SavedPets;
