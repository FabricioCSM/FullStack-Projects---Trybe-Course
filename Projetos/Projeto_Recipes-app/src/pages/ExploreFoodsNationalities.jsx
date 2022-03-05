import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { fetchNationalitiesCategories } from '../services/fetchFilterCategories';
import FoodCards from '../components/FoodCards';

function ExploreFoodsNationalities({ match: { path } }) {
  const { getFoodsByNationalities, getFoods } = useContext(AppContext);
  const [nationalities, setNationalities] = useState([]);
  const isNationalitiesLoaded = nationalities.length > 0;

  const getNationalities = async () => {
    const { meals } = await fetchNationalitiesCategories();
    const nationalitiesResult = meals.map((category) => category.strArea);
    setNationalities(nationalitiesResult);
  };

  useEffect(() => {
    getNationalities();
    getFoods();
  }, []);

  return (
    <>
      <select
        className="form-select"
        name="nationality"
        data-testid="explore-by-nationality-dropdown"
        onChange={ ({ target: { value } }) => ((value === 'All')
          ? getFoods() : getFoodsByNationalities(value)) }
      >
        {isNationalitiesLoaded && nationalities.map((curr) => (
          <option
            name="nationality"
            value={ curr }
            data-testid={ `${curr}-option` }
            key={ curr }
          >
            {curr}
          </option>))}

        <option
          name="nationality"
          value="All"
          data-testid="All-option"
          key="All"
        >
          All
        </option>
      </select>

      <FoodCards foodOrDrink={ path } />
    </>
  );
}

ExploreFoodsNationalities.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default ExploreFoodsNationalities;
