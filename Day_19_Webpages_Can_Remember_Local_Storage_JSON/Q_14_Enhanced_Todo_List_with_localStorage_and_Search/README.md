Enhanced Todo List Application

An interactive Todo List web application built using HTML, CSS, and JavaScript that allows users to manage daily tasks with persistent storage and real-time search functionality using localStorage.

✅ Features

Add new tasks
Mark tasks as completed
Delete tasks
Real-time search functionality
Tasks persist even after page reload
Each task is stored with:
Unique ID
Task description
Completion status

📁 Project Structure
/todo-app
│
├── index.html
└── README.md

🚀 How to Run the Application

Download or clone the project folder.
Open index.html in any modern web browser (Chrome, Edge, Firefox, etc.).
No server or installation required.

📝 How to Use the Application
Add a Task

Enter text in the "Add task..." field.
Click Add Task or press Enter.
Mark a Task as Completed
Click directly on the task text.
Completed tasks will appear crossed out.
Delete a Task
Click the X button next to a task to remove it permanently.
Search for a Task
Type in the search bar to filter tasks in real time.
Only matching results will appear.

💾 LocalStorage Usage

Tasks are saved inside the browser using localStorage in JSON format.
Example Stored Structure:
[
  {
    "id": 1700000000,
    "text": "Read a book",
    "completed": false
  }
]


This ensures:

Tasks persist after page refresh.
Completion status is remembered.

🛠 Technologies Used

HTML
CSS
JavaScript (ES6)
Browser LocalStorage API

📌 Notes

Tasks are saved per browser.
Clearing browser data will erase task history.
No backend or database is needed.

👨‍💻 Author

Developed by [Nikita]
Date: [05/11/2025]

📜 License

This project is for educational use.