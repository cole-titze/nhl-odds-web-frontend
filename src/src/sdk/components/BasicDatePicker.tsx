import * as React from 'react';
import {memo, useCallback, useEffect} from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

interface IProps{
    label: string
    defaultDate: Date,
    onChange: (date: Date) => void
}
function BasicDatePicker(props: IProps) {
  const { onChange, defaultDate, label } = props;
  const [date, setDate] = React.useState<Dayjs>(dayjs(defaultDate).set('hour', 0).set('minute', 0).set('second', 0).set('milliseconds', 0));

  useEffect( () => {
    onChange(date.toDate());
  }, [onChange, date]);

  const setNewDate = useCallback( (newDate: Dayjs) => {
    newDate.set('hour', 0).set('minute', 0).set('second', 0).set('milliseconds', 0);
    if(newDate.valueOf() === date.valueOf())
      return;
    setDate(newDate);
  }, [date]);

  return (
    <span className="input-spacing">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="input-spacing"
          label={label}
          value={date}
          onChange={(newDate) => {setNewDate(newDate??dayjs());}}
        />
      </LocalizationProvider>
    </span>
  );
}

export default memo(BasicDatePicker);