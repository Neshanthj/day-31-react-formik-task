import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useBooks } from '../Context/books.context';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

// Validation function for form fields
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 40) {
    errors.title = 'Must be 40 characters or less';
  }

  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length > 25) {
    errors.author = 'Must be 25 characters or less';
  }

  if (!values.isbn) {
    errors.isbn = 'Required';
  } else if (String(values.isbn).split("").length > 10) {
    errors.isbn = 'Must be 10 characters';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  return errors;
};

// Add component for creating new data
function Add() {
  const navigate = useNavigate();
  const { books, setBooks } = useBooks();

  // Initialize Formik form handling
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      date: '',
    },
    validate,
    onSubmit: values => {
      // Add new data to the books array
      setBooks([...books, { ...values }])
      // Alert for successful data addition
      alert("Data added Successfully");
      // Redirect to the home page after submission
      navigate('/');
    },
  });

  return (
    <div className='container mt-4'>
      <Form onSubmit={formik.handleSubmit}>
        <h1 className='text-center mb-4 text-success'>Create New Data</h1>
        {/* Input field for Title */}
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id='title'
            name='title'
            placeholder="Enter Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {/* Display validation error if touched */}
          {formik.touched.title && formik.errors.title ? <div style={{ color: "red" }}>{formik.errors.title}</div> : null}
        </Form.Group>
        {/* Input field for Author */}
        <Form.Group className='mb-3'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            id='author'
            name='author'
            placeholder="Enter Author Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {/* Display validation error if touched */}
          {formik.touched.author && formik.errors.author ? <div style={{ color: "red" }}>{formik.errors.author}</div> : null}
        </Form.Group>
        {/* Input field for ISBN Number */}
        <Form.Group className='mb-3'>
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            required
            type="text"
            id='isbn'
            name='isbn'
            placeholder="Enter ISBN Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
          />
          {/* Display validation error if touched */}
          {formik.touched.isbn && formik.errors.isbn ? <div style={{ color: "red" }}>{formik.errors.isbn}</div> : null}
        </Form.Group>
        {/* Input field for Publish Date */}
        <Form.Group className='mb-3'>
          <Form.Label>Publish Date</Form.Label>
          <Form.Control
            type="date"
            id='date'
            name='date'
            placeholder="Enter Publish Date"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {/* Display validation error if touched */}
          {formik.touched.date && formik.errors.date ? <div style={{ color: "red" }}>{formik.errors.date}</div> : null}
        </Form.Group>
        {/* Buttons for form submission and cancellation */}
        <div className='d-grid gap-2 gap-md-3 d-md-flex justify-content-md-between'>
          <Button variant="primary" type="submit" className='btn-lg me-md-2'>Submit form</Button>
          <Button variant="danger" onClick={() => navigate('/')} className='btn-lg mt-2 mt-md-0'>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default Add;
