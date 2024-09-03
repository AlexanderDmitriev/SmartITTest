export interface IOnChangeFilter {
    changeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleParameter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }