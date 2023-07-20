import React from "react";

const TaskComponent = ({ column }) => {
  return (
    <div className="mt-3 flex gap-6 p-4">
      {column.map((item, index) => {
        const length = item.tasks.length;
        return (
          <div key={index}>
            <p className="ml-3 py-2 text-sm font-bold tracking-widest text-[#828fa3]">{`${item.name}(${length})`}</p>
            <div>
              {item.tasks.map((task, index) => {
                const count = task.subtasks.filter(
                  (item) => item.isCompleted === true
                );
                console.log(count);
                return (
                  <div
                    className="task mb-7 h-max w-[280px] shadow-md rounded-md p-4 "
                    key={index}>
                    <p className="text-sm font-bold  tracking-widest">
                      {task.title}
                    </p>
                    <p className="text-xs font-bold text-[#828fa3] mt-2  tracking-widest">
                      {count.length} of {task.subtasks.length} subtasks
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskComponent;
