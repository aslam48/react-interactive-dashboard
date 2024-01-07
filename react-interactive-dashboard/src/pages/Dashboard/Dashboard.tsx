import dayjs from "dayjs";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { generateDate, months } from "../../util/calendar";
import cn from "../../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Dashboard: React.FC = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<{ [date: string]: string[] }>(
    JSON.parse(localStorage.getItem("todos") || "{}")
  );

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (selectDate && todoInput.trim() !== "") {
      const dateKey = selectDate.toDate().toDateString();
      setTodos((prevTodos) => ({
        ...prevTodos,
        [dateKey]: [...(prevTodos[dateKey] || []), todoInput],
      }));
      setTodoInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Fragment>
      <main className="h-screen">
        <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-screen items-center sm:flex-row flex-col">
          <div className="w-96 h-96 ">
            <div className="flex justify-between items-center">
              <h1 className="select-none font-semibold">
                {months[today.month()]}, {today.year()}
              </h1>
              <div className="flex gap-10 items-center ">
                <GrFormPrevious
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <h1
                  className=" cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(currentDate);
                  }}
                >
                  Today
                </h1>
                <GrFormNext
                  className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-7 ">
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                  >
                    {day}
                  </h1>
                );
              })}
            </div>

            <div className=" grid grid-cols-7 ">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                    >
                      <h1
                        className={cn(
                          currentMonth ? "" : "text-gray-400",
                          today ? "bg-red-600 text-white" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "bg-black text-white"
                            : "",
                          "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                        )}
                        onClick={() => {
                          setSelectDate(date);
                        }}
                      >
                        {date.date()}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="h-96 w-96 sm:px-5">
            <h1 className=" font-semibold">
              Schedule for {selectDate.toDate().toDateString()}
            </h1>
            {todos[selectDate.toDate().toDateString()] ? (
              <ul>
                {todos[selectDate.toDate().toDateString()].map(
                  (todo, index) => (
                    <li key={index} className="mb-1 ml-4 list-disc">
                      {todo}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-gray-400">No todos for today.</p>
            )}

            <div className="mt-4">
              <input
                type="text"
                placeholder="Add todo"
                value={todoInput}
                onChange={handleTodoInputChange}
                className="mr-2 p-2 border border-gray-300 outline-none rounded-sm"
              />
              <button
                onClick={handleAddTodo}
                className="p-2 bg-black rounded-md text-white"
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Dashboard;
