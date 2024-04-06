import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import Times from './Times';

function Canledar() {
    const [value, setValue] = React.useState(dayjs());
    const tomorrow = dayjs().add(1, 'day');
    const nextmonth = dayjs().add(1, 'month');
    const isWeekend = (date) => {
        const day = date.day();
        return day === 0 || day === 6;
    };
    const { isTimeActive, setIsTimeActive } = useContext(DataContext)
    const { selectedDate, setSelectedDate } = useContext(DataContext)
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    function HandleChange(newValue) {
        setValue(newValue)
        setSelectedDate(`${weekDays[newValue.$W]}, ${months[newValue.$M]} ${newValue.$D}`)
        setIsTimeActive(true)
    }
    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']} sx={{overflow : 'hidden'}}>
                    <DateCalendar shouldDisableDate={isWeekend} minDate={tomorrow} maxDate={nextmonth} views={['day']} value={value} onChange={(newValue) => HandleChange(newValue)} className="m-0"/>
                </DemoContainer>
            </LocalizationProvider>
            {
        isTimeActive && <Times />
      }
        </div>
    );
}


export default Canledar