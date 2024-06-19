import React, { useState } from 'react'

const Form = () => {
    const tasksPerCategory = {
        part1: [
            { TaskName: 'Email 1 - Sourcing for Tungsten', Status: 'pending' },
            { TaskName: 'Email 2 - New Line of Cameras', Status: 'pending' },
            { TaskName: 'Email 3 - Mktg for Bundled Solution', Status: 'pending' },
            { TaskName: 'Email 4 - Investing In Our People', Status: 'pending' }
        ],
        part2: [
            { TaskName: 'Financial Health Worksheet', Status: 'pending' }
        ],
        part3: [
            { TaskName: 'Email/Worksheet - Turnover/Talent Priorities', Status: 'pending' }
        ]
    }

    const [openCategory, setOpenCategory] = useState(null);

    const handleToggle = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    }

    return (
        <div>
            <h1>Form</h1>
            {Object.keys(tasksPerCategory).map((taskCategory, index) => {
                console.log('First task in', taskCategory, ':', tasksPerCategory[taskCategory][0]);
                return (
                    <div key={index}>
                        <h2 onClick={() => handleToggle(taskCategory)} style={{ cursor: 'pointer' }}>
                            {taskCategory} {openCategory === taskCategory ? '▲' : '▼'}
                        </h2>
                        {openCategory === taskCategory && (
                            <ul>
                                {tasksPerCategory[taskCategory].map((task, taskIndex) => (
                                    <li key={taskIndex}>
                                        {task.TaskName} - {task.Status}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Form
