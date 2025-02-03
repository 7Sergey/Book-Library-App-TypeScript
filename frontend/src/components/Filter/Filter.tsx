import { useDispatch, useSelector } from "react-redux";
import {
  selectTitleFilter,
  setTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  selectFavoriteFilter,
  setFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            onChange={(e) => dispatch(setTitleFilter(e.target.value))}
            value={titleFilter}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
            value={authorFilter}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="favorites">
            <input
              type="checkbox"
              id="favorites"
              checked={favoriteFilter}
              onChange={(e) => dispatch(setFavoriteFilter(e.target.checked))}
            />
            Only Favorite
          </label>
        </div>
        <button onClick={() => dispatch(resetFilters())}>Reset Filters</button>
      </div>
    </div>
  );
};
export default Filter;
