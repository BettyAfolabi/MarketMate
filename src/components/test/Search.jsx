import React from 'react'

function Search() {
    const [search, setSearch] = React.useState('')

    function handleChange(e) {
        setSearch(e.target.value);
    }
  return (
    <div>
      <Searching value={search} onchange={handleChange}>
        Search:
      </Searching>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Searching({value, onChange, children}) {
    return(
        <div>
            <label htmlFor="search">{children}</label>
            <input type="text" 
            id='search'
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Search;
