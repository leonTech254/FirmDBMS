import React, { useState, useEffect } from 'react';
import FirmService from '../Services/FirmApiService';
import Firm from '../Models/Film';
import "../Assets/css/allFirms.css"
import FirmForm from './FirmForm';

const PopUpComponent = () => {
    const [firms, setFirms] = useState<Firm[]>([]);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [firmToUpdate, setFirmToUpdate] = useState<Firm | null>(null);

    useEffect(() => {
        const fetchFirms = async () => {
            try {
                const firmService = new FirmService();
                const allFirms = await firmService.getAllFirms();
                setFirms(allFirms);
            } catch (error) {
                console.error('Error fetching firms:', error);
            }
        };

        fetchFirms();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const firmService = new FirmService();
            await firmService.deleteFirm(id);
            // Remove the deleted firm from the state
            setFirms(firms.filter(firm => firm.id !== id));
        } catch (error) {
            console.error('Error deleting firm:', error);
        }
    };

    const handleUpdate = (firm: Firm) => {
        setFirmToUpdate(firm);
        setShowUpdateForm(true);
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
        setFirmToUpdate(null);
    };

    return (
        <div className="film-table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Stars</th>
                        <th>Review</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {firms.map(firm => (
                        <tr key={firm.id}>
                            <td>{firm.title}</td>
                            <td>{firm.year}</td>
                            <td>{firm.director}</td>
                            <td>{firm.stars}</td>
                            <td>{firm.review}</td>
                            <td>
                                <button onClick={() => handleDelete(firm.id)}>Delete</button>
                                <button onClick={() => handleUpdate(firm)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showUpdateForm && firmToUpdate && (
                <FirmForm firm={firmToUpdate} onClose={handleCloseUpdateForm} />
            )}
        </div>
    );
};

export default PopUpComponent;
