'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    selected: Date;
    onChange: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ selected, onChange }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleYearChange = (year: number) => {
        const newDate = new Date(startDate);
        newDate.setFullYear(year);
        setStartDate(newDate);
    };

    const handleMonthChange = (month: number) => {
        const newDate = new Date(startDate);
        newDate.setMonth(month);
        setStartDate(newDate);
    };

    return (
        <div>
            <DatePicker
                selected={selected}
                onChange={(date) => {
                    if (date !== null) {
                        onChange(date);
                    }
                }}
                dateFormat="MM/dd/yyyy"
            />
            {/* <div>
                <button onClick={() => handleYearChange(2023)}>Set Year to 2023</button>
                <button onClick={() => handleMonthChange(3)}>Set Month to April</button>
            </div> */}
        </div>
    );
};

export default DatePickerComponent;
