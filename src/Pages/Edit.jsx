import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useBooks } from '../Context/books.context';
import { useFormik } from 'formik';

// Validation function for form fields
const validate = values => {
  const errors = {};
  // Validation for Title field
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 40) {
    errors.title = 'Must be 40 characters or less';
  }

  // Validation for Author field
  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length > 25) {
    errors.author = 'Must be 25 characters or less';
  }

  // Validation for ISBN field
  if (!values.isbn) {
    errors.isbn = 'Required';
  } else if (String(values.isbn).split("").length > 10) {
    errors.isbn = 'Must be 10 characters';
  }

  // Validation for Date field
  if (!values.date) {
    errors.date = 'Required';
  }

  return errors;
};

// Edit component for modifying existing data
export default function Edit() {
  const { id } = useParams(); // Fetching the parameter from the URL
  const { books, setBooks } = useBooks();
  const [modifiedData, setModifiedData] = useState([]);

  // Fetch the specific data to be modified
  useEffect(() => {
    setModifiedData(books.find(item => item.title === id))
  }, [books, id]);

  const navigate = useNavigate(); // Accessing navigation functionality from React Router

  // Initializing Formik form handling
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: modifiedData.title,
      author: modifiedData.author,
      isbn: modifiedData.isbn,
      date: modifiedData.date,
    },
    validate,
    onSubmit: values => {
      // Update the data based on the modified values
      setBooks(books.map(item => {
        if (item.title === id) {
          return { ...values };
        } else {
          return item;
        }
      }));
      // Alert for successful data update
      alert('Data Update Successfully!');
      // Navigate back to the home page after submission
      navigate('/');
    },
  });

  return (
    <div className='container mt-4'>
      <Form onSubmit={formik.handleSubmit}>
        <h1 className='text-center text-success mb-4'>Edit The Existing Data</h1>
        {/* Input field for Title */}
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name='title'
            placeholder="Enter Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {/* Display validation error if touched */}
          {formik.touched.title && formik.errors.title ? <div className="text-danger">{formik.errors.title}</div> : null}
        </Form.Group>
        {/* Input field for Author */}
        <Form.Group className='mb-3'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name='author'
            placeholder="Enter Author Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {/* Display validation error if touched */}
          {formik.touched.author && formik.errors.author ? <div className="text-danger">{formik.errors.author}</div> : null}
        </Form.Group>
        {/* Input field for ISBN Number */}
        <Form.Group className='mb-3'>
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            type="text"
            name='isbn'
            placeholder="Enter ISBN Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
          />
          {/* Display validation error if touched */}
          {formik.touched.isbn && formik.errors.isbn ? <div className="text-danger">{formik.errors.isbn}</div> : null}
        </Form.Group>
        {/* Input field for Publish Date */}
        <Form.Group className='mb-3'>
          <Form.Label>Publish Date</Form.Label>
          <Form.Control
            type="date"
            name='date'
            placeholder="Enter Publish Date"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {/* Display validation error if touched */}
          {formik.touched.date && formik.errors.date ? <div className="text-danger">{formik.errors.date}</div> : null}
        </Form.Group>
        {/* Buttons for form submission and cancellation */}
        <div className='d-grid gap-2 d-md-flex justify-content-md-between'>
          <Button variant="primary" type="submit" className='btn-lg me-md-2'>Update form</Button>
          <Button variant="danger" onClick={() => navigate('/')} className='btn-lg mt-2 mt-md-0'>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}
