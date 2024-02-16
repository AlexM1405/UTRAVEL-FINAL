import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';


const initialAirlines = [
    {
        id:   1,
        name: 'Etihad',
        link: 'https://www.etihad.com/en/',
        image: 'images/img-57.jpg',
        country: {
            name: 'United Arab Emirates',
            code: 'ae' // ISO country code for United Arab Emirates
        }
    },
    {
        id:   2,
        name: 'Emirates',
        link: 'https://www.emirates.com/ar/english/',
        image: 'images/img-45.jpg',
        country: {
            name: 'United Arab Emirates',
            code: 'ae' // ISO country code for United Arab Emirates
        }
    },
    {
        id:   3,
        name: 'United',
        link: 'https://www.united.com/en/gb',
        image: 'images/img-47.jpg',
        country: {
            name: 'United States',
            code: 'us' // ISO country code for United States
        }
    },
    {
        id:   4,
        name: 'Air New Zealand',
        link: 'https://www.airnewzealand.com/',
        image: 'images/img-59.jpg',
        country: {
            name: 'New Zealand',
            code: 'nz' // ISO country code for New Zealand
        }
    },
    {
        id:   5,
        name: 'Turkish Airlines',
        link: 'https://www.turkishairlines.com/',
        image: 'images/img-56.jpg',
        country: {
            name: 'Turkey',
            code: 'tr' // ISO country code for Turkey
        }
    },
    {
        id:   6,
        name: 'Qatar Airways',
        link: 'https://www.qatarairways.com/en-us/homepage.html',
        image: 'images/img-55.jpg',
        country: {
            name: 'Qatar',
            code: 'qa' // ISO country code for Qatar
        }
    },
    {
        id:   7,
        name: 'Copa Airlines',
        link: 'https://www.copaair.com/es-us/',
        image: 'images/img-53.jpg',
        country: {
            name: 'Colombia',
            code: 'co' // ISO country code for Colombia
        }
    },
    {
        id:   8,
        name: 'American Airlines',
        link: 'https://www.aa.com/homePage.do',
        image: 'images/img-44.jpg',
        country: {
            name: 'United States',
            code: 'us' // ISO country code for United States
        }
    },
    {
        id:   9,
        name: 'Air Europa',
        link: 'https://www.aireuropa.com/us/es/home',
        image: 'images/img-52.jpg',
        country: {
            name: 'Spain',
            code: 'es' // ISO country code for Spain
        }
    },
    {
        id:   10,
        name: 'Palace Resorts',
        link: 'https://www.palaceresorts.com/',
        image: 'images/img-33.jpg',
        country: {
            name: 'United Arab Emirates',
            code: 'ae' // ISO country code for United Arab Emirates
        }
    },
    {
        id:   11,
        name: 'Hard Rock Hotels',
        link: 'https://www.hardrockhotels.com/all-inclusive-resorts.aspx',
        image: 'images/Img-32.jpg',
        country: {
            name: 'United States',
            code: 'us' // ISO country code for United States
        }
    },
    {
        id:   12,
        name: 'Hilton Hotels',
        link: 'https://www.hilton.com/en/brands/hilton-hotels/',
        image: 'images/img-34.jpg',
        country: {
            name: 'United States',
            code: 'us' // ISO country code for United States
        }
    },
    {
        id:   13,
        name: 'Cheval Blanc',
        link: 'https://www.chevalblanc.com/en/',
        image: 'images/img-35.jpg',
        country: {
            name: 'France',
            code: 'fr' // ISO country code for France
        }
    },
    {
        id:   14,
        name: 'Four Seasons',
        link: 'https://www.fourseasons.com/',
        image: 'images/img-36.jpg',
        country: {
            name: 'United States',
            code: 'us' // ISO country code for United States
        }
    },
    {
        id:   15,
        name: 'Bulgari Hotels',
        link: 'https://www.bulgarihotels.com/',
        image: 'images/img-37.jpg',
        country: {
            name: 'Italy',
            code: 'it' // ISO country code for Italy
        }
    },
    {
        id:   16,
        name: 'CoMo Hotels',
        link: 'https://www.comohotels.com/',
        image: 'images/img-38.jpg',
        country: {
            name: 'Mexico',
            code: 'mx' // ISO country code for Mexico
        }
    },
    {
        id:   17,
        name: 'Hyatt Hotels',
        link: 'https://www.hyatt.com/en-US/hotel/france/hotel-martinez/jcagh',
        image: 'images/img-39.jpg',
        country: {
            name: 'France',
            code: 'fr' // ISO country code for france
        }
    },
    {
        id:   18,
        name: 'Lagonisi Resort',
        link: 'https://www.lagonissiresort.gr/',
        image: 'images/img-41.jpg',
        country: {
            name: 'Greece',
            code: 'gr' // ISO country code for Greece
        }
    }

];

export default function ProvidersList() {
    const [Providers, setProviders] = useState(initialAirlines);

    const imageStyle = {
        width: '100px',
        height: 'auto',
        marginRight: '10px'
    };

    const countryBodyTemplate = (rowData) => {
        if (rowData.country && rowData.country.name) {
            return (
                <div className="flex align-items-center gap-2">
                    <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                    <span>{rowData.country.name}</span>
                </div>
            );
        } else {
            return <span>No Country Information</span>;
        }
    };

    const addProvider = (provider) => {
        setProviders([...Providers, provider]);
    };

    const deleteProvider = (id) => {
        setProviders(Providers.filter(provider => provider.id !== id));
    };

    const updateProvider = (updatedProvider) => {
        setProviders(Providers.map(provider => provider.id === updatedProvider.id ? updatedProvider : provider));
    };

    const handleAddProvider = () => {
        const newProvider = { id: Providers.length +  1, name: '', link: '', image: '' };
        addProvider(newProvider);
    };

    const handleDeleteProvider = (id) => {
        deleteProvider(id);
    };

    const handleUpdateProvider = () => {
        if (selectedId && newName && newLink && newImage) {
            const updatedProvider = {
                id: parseInt(selectedId),
                name: newName,
                link: newLink,
                image: newImage
            };
            updateProvider(updatedProvider);
            setSelectedId('');
            setNewName('');
            setNewLink('');
            setNewImage('');
        }
    };

    const [selectedId, setSelectedId] = useState('');
    const [newName, setNewName] = useState('');
    const [newLink, setNewLink] = useState('');
    const [newImage, setNewImage] = useState('');

    const handleSelectProvider = (event) => {
        setSelectedId(event.target.value);
    };

    const handleInputChange = (setter, event) => {
        setter(event.target.value);
    };

    return (
        <div className="card">
            <DataTable value={Providers} rowClassName={() => 'providers-row'} footer={
                <div className="table-footer">
                    <button onClick={handleAddProvider}>Add Provider</button>
                    <select onChange={handleSelectProvider}>
                        <option value="" disabled selected>Select a provider to update</option>
                        {Providers.map((provider) => (
                            <option key={provider.id} value={provider.id}>{provider.name}</option>
                        ))}
                    </select>
                    <input type="text" placeholder="Enter new provider name" value={newName} onChange={(e) => handleInputChange(setNewName, e)} />
                    <input type="text" placeholder="Enter new provider link" value={newLink} onChange={(e) => handleInputChange(setNewLink, e)} />
                    <input type="text" placeholder="Enter new provider image" value={newImage} onChange={(e) => handleInputChange(setNewImage, e)} />
                    <button onClick={handleUpdateProvider}>Update Selected Provider</button>
                </div>
            }>
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex +  1}></Column>
                <Column header="Providers" body={(rowData) => (
                    <>
                        <Link to={rowData.link}>
                            <img src={rowData.image} alt={rowData.name} style={imageStyle} />
                            <span>{rowData.name}</span>
                        </Link>
                    </>
                )} style={{ minWidth: '200px' }}></Column>
                <Column header="Link" body={(rowData) => (
                    <Link to={rowData.link}>Visit Website</Link>
                )} style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                <Column header="Actions" body={(rowData) => (
                    <button onClick={() => handleDeleteProvider(rowData.id)}>Delete</button>
                )} style={{ minWidth: '100px' }}></Column>
            </DataTable>
        </div>
    );
}