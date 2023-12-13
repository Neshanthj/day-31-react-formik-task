Languages used
HTML,CSS and JavaScript(React.js)
- how to open react project file
- command 
- npm create vite@latest file-name -- --template react
- after created file - npm install
- About Application
- React formik validation application for crud operation for library management was created using "React + Vite"
- App.css & App.jsx
- src File includes 2 main components
- Context
  - books.context.jsx
    - contains
    - React context named BooksContext that handles book data.
    - It provides a custom hook useBooks to access this context's values and
    - a component BooksContextProvider responsible for managing book information,
    - such as fetching initial data, deleting books,
    - and offering these functionalities to child components through the context.
- Pages
  - Add.jsx
  - Edit.jsx
  - Home.jsx
    - Add.jsx
      - contains
      - React component named Add responsible for creating new book data. It uses Formik for form handling, Bootstrap components for styling, and context from books.context to manage the book list.
      - The component renders a form with fields for Title, Author, ISBN Number, and Publish Date. It performs validation on these fields, displaying error messages if necessary. Upon form submission, it adds the new data to the book list, triggers an alert for successful addition, and redirects to the home page.
  - Edit.jsx
    - contains
    - Edit component responsible for modifying existing book data. It utilizes Formik for form handling, React Router's useParams to fetch parameters from the URL, and context from books.context to manage the book list.
    - The component renders a form with fields for Title, Author, ISBN Number, and Publish Date. It performs validation on these fields and upon submission, updates the book data with the modified values, triggers an alert for successful update, and navigates back to the home page.
  - Home.jsx
    - contains
    - Home that displays a list of books. It utilizes Bootstrap for styling, React Router's Link for navigation, and context from books.context to manage book data.
    - The component renders a table showcasing book details such as Title, Author, ISBN Number, Publish Date, and Actions. It also includes a BookList component to represent individual book details in rows. Each row provides options to edit or delete a book using icons from react-icons.
    - The Home component has a link to add new books and displays the existing books fetched from context, enabling users to edit or delete each book entry.

- To Run Application
 - npm run dev
- after the above command 
the file runs in this url -http://localhost:5173/

- Then i have pushed my code on github and 
deployed my task 

deployed link
-
https://gleeful-phoenix-e92251.netlify.app
