import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <h1 className="text-3xl font-semibold mb-4">About Our To-Do List App</h1>
      <p className="text-gray-700 dark:text-slate-200">
        Welcome to our To-Do List app, built with TypeScript, React, and Tailwind CSS. Our app is designed to help you
        stay organized and manage your tasks efficiently.
      </p>
      <p className="text-gray-700 dark:text-slate-200 mt-2">
        With our user-friendly interface and intuitive features, you can easily add, edit, and mark tasks as completed.
        Whether it's for personal or work-related tasks, our app has you covered.
      </p>
      <p className="text-gray-700 dark:text-slate-200 mt-2">
        We understand the importance of a clutter-free workspace, and that's why we created this app to help you keep
        track of your tasks in a straightforward and efficient manner.
      </p>
      <p className="text-gray-700 dark:text-slate-200 mt-2">
        Feel free to explore the different features of our app and start managing your tasks more effectively today!
      </p>
    </div>
  );
};

export default About;
