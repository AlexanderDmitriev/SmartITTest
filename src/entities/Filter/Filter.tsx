import { IOnChangeFilter } from '../../interfaces/IOnChangeFilter';
import { FilterInput } from './FilterInput';
import { FilterRadioGroup } from './FilterRadioGroup';
import '../../App.css';

export const Filter: React.FC<IOnChangeFilter> = ({
  changeFilter,
  handleParameter,
}) => {
  return (
    <>
      <form action="">
        <div className="filter-section">
          <FilterInput changeFilter={changeFilter} />
          <FilterRadioGroup handleParameter={handleParameter} />
        </div>
      </form>
    </>
  );
};
