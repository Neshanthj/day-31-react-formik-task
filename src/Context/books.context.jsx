import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context with initial values for books management
const BooksContext = createContext({
  books: [],
  setBooks: () => Promise,
  inputData: [],
  setInputData: () => Promise,
  handleDelete: () => null,
});

// Custom hook to consume the BooksContext
export const useBooks = () => useContext(BooksContext);

// BooksContextProvider component to manage books and provide context values
export default function BooksContextProvider({ children }) {
  // State variables to manage books and input data
  const [books, setBooks] = useState([]);
  const [inputData, setInputData] = useState([]);

  // Get initial book data using useEffect on component mount
  useEffect(() => {
    fetch('./mocks/books.json')
      .then(response => response.json())
      .then(result => setBooks(result.books))
      .catch(err => console.log("Fetch the Books Error :: ", err));
  }, []);

  // Navigate from React Router DOM for redirection
  const navigate = useNavigate();

  // Function to handle book deletion
  const handleDelete = (data) => {
    const confirmDelete = window.confirm("Do You Want to Delete?");
    if (confirmDelete) {
      // Filter out the book to delete and update the state
      setBooks(books.filter(item => item.title !== data.title));
      // Show alert for successful deletion
      alert("Your Record has been Deleted");
      // Redirect to the home page or another route after deletion
      navigate('/');
    }
  }

  // Context value to be provided to consuming components
  const value = {
    books, // List of books
    setBooks, // Function to set books
    inputData, // Input data (if any)
    setInputData, // Function to set input data
    handleDelete, // Function to delete a book
  }

  // Provide the context value to its children
  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  )
}
