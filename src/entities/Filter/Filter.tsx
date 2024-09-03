import { IOnChangeFilter } from '../../interfaces/IOnChangeFilter';

export const Filter: React.FC<IOnChangeFilter> = ({
  changeFilter,
  handleParameter,
}) => {
  return (
    <>
      <form action="">
        <label htmlFor="filter">
          <span>Filter</span>
          <input type="text" id="filter" onChange={changeFilter} />
        </label>
        <p>Choose parameter</p>
        <label htmlFor="name">
          <input
            type="radio"
            name="parameter"
            value="name"
            id="name"
            onChange={handleParameter}
            defaultChecked
          />
          name
        </label>
        <label htmlFor="username">
          <input
            type="radio"
            name="parameter"
            value="username"
            id="username"
            onChange={handleParameter}
          />
          username
        </label>
        <label htmlFor="email">
          <input
            type="radio"
            name="parameter"
            value="email"
            id="email"
            onChange={handleParameter}
          />{' '}
          {/* [A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,} */}
          email
        </label>
        <label htmlFor="phone">
          <input
            type="radio"
            name="parameter"
            value="phone"
            id="phone"
            onChange={handleParameter}
          />{' '}
          {/* ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ */}
          phone
        </label>
      </form>
    </>
  );
};
