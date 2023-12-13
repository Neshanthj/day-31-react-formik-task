import React from 'react';
import Table from 'react-bootstrap/Table';
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { TiPlus } from "react-icons/ti";
import { useBooks } from '../Context/books.context';

// Home component displaying the book list
export default function Home() {
    const { books, handleDelete } = useBooks();

    return (
        <div className="container">
            <h1 className='text-center mt-3'>📚 LIBRARY MANAGEMENT 📚</h1>
            {/* Link to Add component */}
            <Link to='/add'>
                <Button className='button mt-3 mb-4' size='sm' variant="primary">
                    <TiPlus /> Add New
                </Button>
            </Link>
            <div className="table-responsive">
                {/* Table to display book details */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>ISBN NUMBER</th>
                            <th>PUBLISH DATE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through books to display book details */}
                        {books.map((item, i) => <BookList key={i} data={item} handleDelete={handleDelete} />)}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

// BookList component for displaying individual book details in a row
function BookList({ data, handleDelete }) {
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.author}</td>
            <td>{data.isbn}</td>
            <td>{data.date}</td>
            <td>
                {/* Link to Edit component */}
                <Link to={`/Edit/${data.title}`} className='btn btn-warning me-2'>
                    <BiSolidPencil />
                </Link>
                {/* Button to delete a book */}
                <button onClick={() => handleDelete(data)} className='btn btn-danger'>
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
