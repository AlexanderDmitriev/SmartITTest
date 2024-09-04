import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export interface IRadiobutton {
    handleParameter: (event: React.SyntheticEvent<Element, Event>, checked: boolean) => void;
  }

export const FilterRadioGroup: React.FC<IRadiobutton> = ({handleParameter}) => {
    
  return (
    <FormControl>
      <FormLabel id="row-radio-buttons-group-label">Choose parameter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="name"
      >
        <FormControlLabel value="name" control={<Radio />} label="Name" onChange={handleParameter} defaultChecked/>
        <FormControlLabel
          value="username"
          control={<Radio />}
          label="Username"
          onChange={handleParameter}
        />
        <FormControlLabel value="email" control={<Radio />} label="Email" onChange={handleParameter}/>
        <FormControlLabel value="phone" control={<Radio />} label="Phone" onChange={handleParameter}/>
      </RadioGroup>
    </FormControl>
  );
};
