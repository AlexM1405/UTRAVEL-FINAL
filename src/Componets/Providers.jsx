import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; // Import Button if not already imported
import './Providers.css';

function Providers() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0); // State for the current page
    const itemsPerPage =  10; // Number of items per page
    const [pageCount, setPageCount] = useState(0); // State for the total number of pages

    useEffect(() => {
        fetch('https://nodejs-production-001d.up.railway.app/tours')
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setPageCount(Math.ceil(apiData.length / itemsPerPage)); // Calculate the total number of pages
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const imageBodyTemplate = (data) => {
        return <img src={data.src} style={{ width: '200px' }} />;
    };

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    // Paginate the data before passing it to the DataTable
    const paginatedData = data.slice(page * itemsPerPage, (page +  1) * itemsPerPage);

    return (
        <>
            <DataTable value={paginatedData} showGridlines stripedRows>
                <Column field="text" header="text" />
                <Column field="location" header="location" />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header={`price`} />
            </DataTable>
            <div className="pagination">
                {[...Array(pageCount).keys()].map((number) => (
                    <Button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={page === number ? "active_page" : ""}
                    >
                        {number +  1}
                    </Button>
                ))}
            </div>
        </>
    );
}

export default Providers;