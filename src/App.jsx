import { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleList from "./components/ArticleList";

/*
Dati richiesti dal form:
  author (string)
  title (string)
  body (string)
  public (boolean)
*/

const initialFormData = {
  author: "",
  title: "",
  body: "",
  isPublic: false,
}

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [arrayArticles, setArrayArticles] = useState([]);

  function addArticle(event) {
    event.preventDefault();
    if (formData.author != "" && formData.title != "" && formData.body != "")
    {
      const newElement = formData;
      const newArray = [...arrayArticles, newElement];
      setArrayArticles(newArray);
      setFormData(initialFormData);
    }
  }

  function updateFormData(event) {
    const { name, type, value } = event.target;

    const newValue = type === "radio" ? (value === "true") : value;

    const newObject = {
      ...formData,
      [name]: newValue
    };

    setFormData(newObject);
  }

  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <div className="row justify-content-between">
          <div className="">
            <form action="" onSubmit={addArticle}>
              {/* Author */}
              <label htmlFor="author">Author</label>
              <br />
              <input
                name="author"
                type="text"
                id="author"
                value={formData.author}
                onChange={updateFormData} />
              <br />
              {/* Title */}
              <label htmlFor="title">Title</label>
              <br />
              <input
                name="title"
                type="text"
                id="title"
                value={formData.title}
                onChange={updateFormData} />
              <br />
              {/* body */}
              <label htmlFor="body">Body</label>
              <br />
              <input
                name="body"
                type="text"
                id="body"
                value={formData.body}
                onChange={updateFormData} />
              <br />
              {/* Public */}
              <label htmlFor="isPublic">Public</label>
              <br />
              <label htmlFor="isPublic" className="mx-3">Public</label>
              <input
                name="isPublic"
                type="radio"
                id="public"
                value="true"
                checked={formData.isPublic === true}
                onChange={updateFormData} />
              <br />
              <label htmlFor="private" className="mx-3">Private</label>
              <input
                name="isPublic"
                type="radio"
                id="private"
                value="false"
                checked={formData.isPublic === false}
                onChange={updateFormData} />
              <br />
              <button type="submit" className="btn btn-primary">Invia</button>
            </form>
            <br />
            <ArticleList 
            array = {arrayArticles}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
