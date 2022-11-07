import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const api = 'https://api.chucknorris.io/'
const jokeLimit = 6
const categoryLimit = 6
function customSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result = (a[property] < b[property])
      ? -1
      : (a[property] > b[property])
        ? 1
        : 0;
    return result * sortOrder;
  }
}

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    Axios.get(api + 'jokes/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  return (<div className="wrapper mx-0">

    {
      categories.map((category, i) => {
        return (
          i < categoryLimit
          ? <div key={category} className="btn-responsive">
            <div className="btn">{category}</div>
          </div>
          : <div key={category} className="btn-responsive d-none">
            <div className="btn">{category}</div>
          </div>)
      })
    }
    <div key='[]' className="btn-responsive d-none">
      <div className="btn">uncategorised</div>
    </div>
    <div key="all-categories" className="btn-responsive">
      <div className="btn btn-view-all">
        view all
      </div>
    </div>
  </div>)
}

const JokeByCategory = () => {
  const [allJokeByCategory, setAllJokeByCategory] = useState([])

  useEffect(() => {
    Axios.get(api + 'jokes/search?query=all').then((response) => {
      response.data.result.sort(customSort("categories"))
      setAllJokeByCategory(response.data.result)
    })

  }, [])

  return (<div className="wrapper px-1">
    {
      allJokeByCategory.map((joke, i) => {
        return (<div key={i} className={i < jokeLimit
            ? "group-joke"
            : "group-joke d-none"}>
          <div className="group-joke-content">
            <span className="group-joke-header-icon"></span>
            <div className="group-joke-header">
              {joke.categories[0] ?? 'uncategorized'}
            </div>
            <div className="group-joke-body">{joke.value}</div>
            <div className="group-joke-stat">See Stats</div>
          </div>
        </div>)
      })
    }
    <div key="all" className="h-center">
      <div className="btn btn-view-all view-more">
        view more
      </div>
    </div>
  </div>)
}

const Header = () => {
  return (<div className="header">
    <div className="container">
      <nav className="mx-0">
        <input type="checkbox" id="nav"/>
        <label htmlFor="nav"></label>
        <ul>
          <li>
            <a href="">So Functioniert's</a>
          </li>
          <li>
            <a href="">Sonderangebote</a>
          </li>
          <li className="account">
            <a href="">Mein Berich</a>
            <ul>
              <li>
                <a href="">My published jokes</a>
              </li>
              <li>
                <a href="">My saved jokes</a>
              </li>
              <li>
                <a href="">Account information</a>
              </li>
              <li>
                <a href="">Publish new joke</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>)
}

const Footer = () => {
  return (<div id="footer">
    <div className="container">
      <div className="px-1 joke-bible-moto get-paid-content">
        Got Jokes? Get paid for submitting!
        <div className="group-joke-stat submit-joke">
          Submit joke
        </div>
      </div>
    </div>
  </div>)
}

const JokeSearch = () => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    Axios.get(api + 'search?query=').then((response) => {
      setQuery(query)
    })
  }, [query])

  return (<div id="searchSection">
    <div className="joke-bible">
      The Joke Bible
    </div>
    <div className="joke-bible-moto">
      Daily Laughs for you and yours
    </div>
    <input type="text" className="joke-search" placeholder="How can we make you laugh today?"/>
    <span className="joke-search-icon"></span>
  </div>)
}

const JokeCategories = () => {
  return (<div id="jokeCategories">
    <div className="container">
      <Categories/>
    </div>
  </div>)
}

const JokeByGroup = () => {
  return (<div id="jokeGroup">
    <div className="container">
      <div className="wrapper px-1">
        <div className="border-top"></div>
        <div className="current-category mx-1">animal</div>
      </div>
      <JokeByCategory/>
    </div>
  </div>)
}

export {
  Header,
  JokeSearch,
  JokeCategories,
  JokeByGroup,
  Footer,
  Categories,
  JokeByCategory
}
