import React, { useState } from 'react';
import Firm from '../Models/Film';
import '../Assets/css/popform.css'; 
import FirmService from '../Services/FirmApiService';

interface Props {
    onClose: () => void;
}
 
const AddFirm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [director, setDirector] = useState('');
    const [stars, setStars] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newFirm: Firm = {
            title, year, director, stars, review,
            id: 0
        };
        const firmService = new FirmService();
        try {
            await firmService.addFirm(newFirm);
            setTitle('');
            setYear(0);
            setDirector('');
            setStars('');
            setReview('');
        } catch (error) {
            console.error('Error adding firm:', error);
            // Handle error as needed, e.g., display error message to the user
        }
    };

    return (
        <div className="pop_wrapper_container">
            <div className="firm-form-container">
                <div className="firm-form-popup">
                    <h2>Add Firm</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label>
                            Year:
                            <input className='form-control' type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
                        </label>
                        <label>
                            Director:
                            <input className='form-control' type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
                        </label>
                        <label>
                            Stars:
                            <input className='form-control' type="text" value={stars} onChange={(e) => setStars(e.target.value)} />
                        </label>
                        <label>
                            Review:
                            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
                        </label>
                        <div className="form-buttons">
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFirm;
