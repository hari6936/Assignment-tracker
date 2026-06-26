import React, { useState } from "react";
import "./App.css";

function App() {
const [assignments, setAssignments] = useState([]);
const [title, setTitle] = useState("");
const [subject, setSubject] = useState("");
const [dueDate, setDueDate] = useState("");
const [filter, setFilter] = useState("All");

const addAssignment = () => {
if (!title || !subject || !dueDate) {
alert("Fill all fields");
return;
}

const newAssignment = {  
  id: Date.now(),  
  title,  
  subject,  
  dueDate,  
  status: "Pending",  
};  

setAssignments([...assignments, newAssignment]);  

setTitle("");  
setSubject("");  
setDueDate("");

};

const updateStatus = (id, status) => {
setAssignments(
assignments.map((a) =>
a.id === id ? { ...a, status } : a
)
);
};

const filteredAssignments =
filter === "All"
? assignments
: assignments.filter((a) => a.subject === filter);

return (
<div className="container">
<h1>Assignment Submission Tracker</h1>
</div>
);
}

export default App;
