import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1154",
  database: "eventmanagement",
});

app.use(express.json());
app.use(cors());

// Fetch all events from the eventlist table
app.get("/eventlist", (req, res) => {
  const q = "SELECT * FROM eventlist ORDER BY id DESC";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json(err);
    }
    console.log("Fetched events:", data);
    return res.status(200).json(data);
  });
});

// Fetch event by ID from the eventlist table
app.get("/eventlist/:id", (req, res) => {
  const eventId = req.params.id;
  const q = "SELECT * FROM eventlist WHERE id = ?";
  db.query(q, [eventId], (err, data) => {
    if (err) {
      console.error("Error fetching event:", err);
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json(data[0]);
  });
});

// Create a new event
app.post("/eventlist", (req, res) => {
  const q =
    "INSERT INTO eventlist (title, description, cover, date_of_event, time_of_event) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.date_of_event,
    req.body.time_of_event,
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error("Error creating event:", err);
      return res
        .status(500)
        .json({ message: "Error creating event", error: err });
    }
    return res.status(201).json({
      message: "Event has been created successfully",
      id: data.insertId,
    });
  });
});

// Delete event by ID
app.delete("/eventlist/:id", (req, res) => {
  const eventId = req.params.id;
  const q = "DELETE FROM eventlist WHERE id = ?";
  db.query(q, [eventId], (err, data) => {
    if (err) {
      console.error("Error deleting event:", err);
      return res.status(500).json(err);
    }
    return res.status(200).json("Event has been deleted successfully");
  });
});

// Update event by ID
app.put("/eventlist/:id", (req, res) => {
  const eventId = req.params.id;
  const { title, description, cover, date_of_event, time_of_event } = req.body;
  const q =
    "UPDATE eventlist SET title = ?, description = ?, cover = ?, date_of_event = ?, time_of_event = ?  WHERE id = ?";
  db.query(
    q,
    [title, description, cover, date_of_event, time_of_event, eventId],
    (err, result) => {
      if (err) {
        console.error("Error updating event:", err);
        return res.status(500).json(err);
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      return res.status(200).json({ message: "Event updated successfully" });
    }
  );
});

//for user autentication
app.post("/users", (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) return res.status(500).json("Error");
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "Login Successfully", success: true });
    } else {
      return res.status(404).json({ message: "No Record", success: false });
    }
  });
});

// for admin autentication
app.post("/admins", (req, res) => {
  const sql = "SELECT * FROM admins WHERE username = ? AND password = ?";

  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) return res.status(500).json("Error");
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "Login Successfully", success: true });
    } else {
      return res.status(404).json({ message: "No Record", success: false });
    }
  });
});

app.listen(8800, () => {
  console.log("Connected to backend on port 8800!");
});
