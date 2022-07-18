import './LesionsPage.scss'
import Header from '../../components/Header/Header';
import LesionList from '../../components/LesionList/LesionList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LesionsPage() {

    const [lesions, setLesions] = useState([])

    const getLesions = () => {
        axios.get('https://moles-in-motion-api.herokuapp.com/lesions')
            .then((res) => {
                setLesions(res.data.lesion)
            })
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        getLesions();
      }, [])

    return ( 
        <main className='lesions'>
            <Header />
            <div className='lesions__content'>
                <div className='lesions__info'>
                    <h1 className='lesions__header'>Common Skin Lesions</h1>
                    <span className='lesions__text'>Our skin is capable of growing a variety of different lumps and bumps. It can be a bit daunting trying to identify what's what. </span>
                    <span className='lesions__text'>To help combat confusion, we've created a list of some of the most common lesions for you.</span>
                </div>
                <LesionList lesions={lesions}/> 
            </div>   
        </main> 
    );
}

export default LesionsPage;