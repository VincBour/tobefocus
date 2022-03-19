import React from "react";
import { Settings } from "../components/settings/Settings";
import { Pomodoro, Todo } from "../features";

export const Container = () => {
  return (
    <div className="container mx-auto h-full flex flex-col justify-center space-y-8">
      <header className="h-16 bg-primary-500"><Settings /></header>
      <main className="grid grid-cols-2 gap-4 grow">
        <Pomodoro />
        <Todo />
      </main>
      <footer className="h-16 bg-green-500">Footer</footer>
    </div>
  );
};
