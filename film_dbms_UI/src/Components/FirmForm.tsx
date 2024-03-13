import React, { useEffect, useState } from 'react';
import Firm from '../Models/Film';
import '../Assets/css/popform.css'; 
import FirmService from '../Services/FirmApiService';

interface Props {
    firm: Firm;
    onClose: () => void;
}
 

const FirmForm: React.FC<Props> = ({ firm, onClose }) => {
    const [title, setTitle] = useState(firm.title);
    const [year, setYear] = useState(firm.year);
    const [director, setDirector] = useState(firm.director);
    const [stars, setStars] = useState(firm.stars);
    const [review, setReview] = useState(firm.review);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const updatedFirm: Firm = { ...firm, title, year, director, stars, review };
        const firmService = new FirmService();
        firmService.updateFirm(updatedFirm);
    };

    return (
        <div className="pop_wrapper_container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea quod tempora ipsam perferendis tempore necessitatibus totam placeat! Similique officiis qui ab voluptatem vero reprehenderit excepturi, velit modi quisquam voluptatum.
        <div className="firm-form-container">
            <div className="firm-form-popup"> {/* Use a wrapper div for floating and pop-up effect */}
                <h2>Update Firm</h2>
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
                        <button type="submit">Update</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
                </div>
        
    );
};

export default FirmForm;
