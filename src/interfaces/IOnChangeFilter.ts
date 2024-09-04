export interface IOnChangeFilter {
    changeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleParameter: (event: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  }