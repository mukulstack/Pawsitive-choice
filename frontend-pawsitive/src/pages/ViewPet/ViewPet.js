import './ViewPet.css';
import Header from '../../components/Header/Header';
import SavePetButton from '../../components/SavePetButton/SavePetButton';
import AdoptButton from '../../components/AdoptButton/AdoptButton';

function ViewPet() {
    return(
        <div className='main-container'>
            <Header />
            <div className="view-pet-containter">

                <div className='pet-images'>
                    <img src='./images/dog1.jpg' alt='pic1'></img>
                    <img src='./images/dog2.jpg' alt='pic2'></img>
                    <img src='./images/dog3.jpg' alt='pic3'></img>
                </div>
                <div className='pet-information'>
                    <p>Name: Toby</p>
                    <p> INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.  INFORMATION ABOUT THE PET.   </p>
                </div>

                <SavePetButton />
                <AdoptButton />
            </div>
        </div>
    );
}

export default ViewPet;