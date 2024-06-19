import { useState, useEffect, useContext } from 'react';
import TaskCategoryAccordion from './TaskCategoryAccordian';
import { SessionContext } from 'lib/contexts/SessionProvider';
import TaskContext from '../../TaskContext';
// import Task from './Task';
import TaskNew from '../../TaskNew';
import { ExpandMore as ExpandMoreIcon, TaskAlt as TaskAltIcon, Done as DoneIcon, RadioButtonUnchecked as RadioButtonUncheckedIcon } from '@mui/icons-material';
import EmailComponent from './EmailComponent';
import WorksheetComponent from './WorksheetComponent';

import styled from 'styled-components';
import { ReactComponent as TaskLegendIcon } from '../../../../assets/icons/task-legend.svg'
import FinancialInvestmentRequestComponent from './FinancialInvestmentRequestComponent';

const TASK_COMPLETE_STATUS = 'completed';
const TASK_INPROGRESS_STATUS = 'inprogress'
const TASK_TYPES = {
  'upload': 'Part 1: Financial Investment Requests (4/4)',
  'preWork': 'Part 2: Financial Health Response (1/1)',
  'assessment': 'Part 3: Talent Issues (1/1)',
  //   'prepare': 'Prepare',
  //   'postWork': 'Post-Work',
}

export const ResponsiveDiv = styled.div`
    display: 'flex';
    margin: '20px 20px 20px 90px';
    @media screen and (min-width: 300px) {
      margin-left: 10%;
    }
    @media screen and (min-width: 900px) {
      margin-left: 17%;
    }
    @media screen and (min-width: 1000px) {
      margin-left: 2%;
    }
    @media screen and (min-width: 1200px) {
      margin-left: 0%;
    }
    @media screen and (min-width: 1800px) {
      margin-left: 9%;
    }
    @media screen and (min-width: 2000px) {
      margin-left: 13%;
    }
    @media screen and (min-width: 2200px) {
      margin-left: 5%;
    }
`;

const styles = {
  main: {
    maxWidth: '1600px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexBasis: '20%'
  },
  taskDiv: {
    display: 'flex'
  },
  taskLegend: {
    marginBottom: '20px',
    // flexBasis: '75%'
  },
  selectedTask: {
    marginTop: '20px'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '100%',
    //rowGap: '20px',
    border: '1px solid lightGray',
    boxShadow: 3,
    borderRadius: '10px',
    minHeight: '600px',
    width: '850px',
    padding: '30px',
    margin: '20px 20px 20px 40px',
    flexBasis: '80%'
  },
}

const BREForm = (props) => {
  const taskContext = useContext(TaskContext);
  const sessionContext = useContext(SessionContext);
  const { userKey, entityKey } = sessionContext?.auth;
  const [expandedTaskCategory, setExpandedTaskCategory] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  // const tasksPerCategory1 = taskContext.prepareData(taskContext.state.tasks);
  // console.log("------taskCategory", tasksPerCategory1)
  const tasksPerCategory = {
    part1: [{
      TaskName: 'Email 1 - Sourcing for Tungsten',
      Status: 'pending'
    },
    {
      TaskName: 'Email 2 - New Line of Cameras',
      Status: 'pending'
    },
    {
      TaskName: 'Email 3 - Mktg for Bundled Solution',
      Status: 'pending'
    },
    {
      TaskName: 'Email 4 - Investing  In Our People',
      Status: 'pending'
    }],
    part2: [{
      TaskName: 'Financial Health Worksheet',
      Status: 'pending'
    }],
    'part3': [{
      TaskName: 'Email/Worksheet - Turnover/Talent Priorities',
      Status: 'pending'
    }]
  }

  useEffect(() => {
    if (entityKey) taskContext.fetchTasks();
    return () => { };
  }, [entityKey]);

  const displayTask = (task) => {
    return task
      ? <TaskNew data={task} key={task.EMACKey} taskContext={taskContext} isParticipantLocked={props.isParticipantLocked} />
      : '';
  }

  useEffect(() => {
    if (expandedTaskCategory && selectedTask) {
      const updatedSelectedTask = tasksPerCategory[expandedTaskCategory].find(task => task.TaskName === selectedTask.TaskName);

      if (
        (updatedSelectedTask.Status !== selectedTask.Status)
        || (updatedSelectedTask.documentUrl?.Url !== selectedTask.documentUrl?.Url)
      ) {
        setSelectedTask(updatedSelectedTask);
      }
    }
  }, [tasksPerCategory, expandedTaskCategory, selectedTask]);

  const onTaskCategoryExpand = (event, expanded, taskCategory) => {
    if (expanded) {
      setExpandedTaskCategory(taskCategory);
      setSelectedTask(tasksPerCategory[taskCategory][0]);
    } else {
      setExpandedTaskCategory(null);
      setSelectedTask(null);
    }
  }

  const getTaskCategoryIcon = (tasks) => {
    if (tasks && tasks.length && tasks.filter(task => task.Status === TASK_COMPLETE_STATUS).length === tasks.length) {
      return <TaskAltIcon className={classes.taskCategoryDoneIcon} />
    } else if (BREForm && tasks.length && tasks.filter(task => task.Status === TASK_COMPLETE_STATUS || task.Status === TASK_INPROGRESS_STATUS).length > 0) {
      return <HalfCircleIcon className={classes.taskCategoryDoneIcon} />
    } else {
      return <RadioButtonUncheckedIcon />
    }
  }


  return (
    <ResponsiveDiv>
      <div style={styles.taskDiv} >
        <div style={styles.main}>
          <div>
            {Object.keys(tasksPerCategory).map((taskCategory, index) =>
              <TaskCategoryAccordion
                key={`task-type-category${index}`}
                taskCategory={taskCategory}
                expanded={expandedTaskCategory === taskCategory}
                tasks={tasksPerCategory[taskCategory]}
                onTaskCategoryExpand={(event, expanded) => onTaskCategoryExpand(event, expanded, taskCategory)}
                onTaskSelect={(task) => { setSelectedTask(task); }}
                selectedTask={selectedTask}
              />)}
          </div>
          <div style={styles.taskLegend}>
            <TaskLegendIcon />
          </div>
        </div>
        <div style={styles.container}>
          {selectedTask?.TaskName === 'Email 1 - Sourcing for Tungsten' && <FinancialInvestmentRequestComponent
            getTaskCategoryIcon={getTaskCategoryIcon}
            tasksPerCategory={tasksPerCategory}
          />}
          {/* {selectedTask && displayTask(selectedTask)} */}
        </div>
      </div>
    </ResponsiveDiv>
  )
}


export default BREForm;