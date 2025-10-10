"use client";

type Task = {
  index: number;
  date: string;
  start_time: string;
  duration: string;
  name: string;
  notes: string;
};

const starter_tasks: Task[] = [
  {
    index: 0,
    date: "10-oct-2025",
    start_time: "09:00",
    duration : "60",
    name: "leetcode",
    notes: "solved 3 easy problems",
    
  },
  {
    index: 0,
    date: "10-oct-2025",
    start_time: "10:00",
    duration : "60",
    name: "systems design",
    notes: "read about load balancers",
    
  },
];


export default function TaskList({tasks = starter_tasks}) {

  return (
  
    <div className="p-4 max-w-3xl mt-16">
      <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
        TASKS
      </h2>
      <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />
      {tasks.map((task, index) => (
        <article key={index} className="mt-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-medium">{task.name}</h3>
            <span className="text-sm">
              {task.date} {task.start_time} for {task.duration} minutes
            </span>
            <p>{task.notes}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
