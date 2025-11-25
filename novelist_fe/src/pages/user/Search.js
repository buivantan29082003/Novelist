import { useEffect, useState } from "react";
import ModalGenres from "../../components/user/ModalGenres";
import Chip from "@mui/material/Chip";
import { FilterIcon } from "lucide-react";

const Seacrhing = () => {

  const getWork=(filters)=>{
    // getAllWork
  }

  return (
    <div className="text-left">
      <Filter />
    </div>
  );
};

const Filter = ({ setFilter }) => {
  const [filters, setFilters] = useState({
    genres: new Map(),
    authors: new Map(),
    sortBy: 1,
  });

  const chooseGenres = (element) => {
    let genre = filters.genres.get(element.id);
    if (genre != null) {
      filters.genres.delete(element.id);
    } else {
      filters.genres.set(element.id, element);
    }
    setFilters({ ...filters });
  };

  const chooseAuthors = (element) => {
    let genre = filters.authors.get(element.id);
    if (genre != null) {
      filters.authors.delete(element.id);
    } else {
      filters.authors.set(element.id, element);
    }
    setFilters({ ...filters });
  };

  const deleteGenreElement = (element) => {
    filters.genres.delete(element.id);
    setFilters({ ...filters });
  };

  const deleteAuthorElement = (element) => {
    filters.authors.delete(element.id);
    setFilters({ ...filters });
  };

 
  return (
    // <div className="grid md:grid-cols-3 gap-5 mt-5">
      <div> 
        <ModalGenres
          sortBy={filters.sortBy}
          setSortBy={(v)=>{
            setFilter({...filters,sortBy:v})
          }}
          chooseAuthor={chooseAuthors}
          authorMap={filters.authors}
          chooseElement={chooseGenres}
          genresMap={filters.genres}
          visibleElement={
            <button className="flex items-center gap-4 inline-block text-md px-4 py-2  border-2 border-pink-700 rounded-full mt-5">
                <FilterIcon size={15}  /> <button>Filters</button>
            </button>
          }
        />
        {filters.genres.size>0&&<div className="flex gap-3 items-center flex-wrap w-full mt-5">
          <p className="text-md font-medium  ">Thể loại: </p>
          {Array.from(filters.genres.values()).map((v) => {
                return (
                  <Chip  label={v.genreName} onDelete={() => deleteGenreElement(v)}  color="primary" variant="outlined" />  
                );
              })}
        </div>}
        {filters.authors.size>0&&<div className="flex gap-3 items-center flex-wrap w-full mt-5">
          <p className="text-md font-medium  ">Tác giả: </p>
          {Array.from(filters.authors.values()).map((v) => {
                return (
                  <Chip  label={v.authorName} onDelete={() => deleteAuthorElement(v)}  color="primary" variant="outlined" />  
                );
              })}
        </div>}
        <div>
          
        </div>
      </div> 
    // </div>
  );
};



export default Seacrhing;


 