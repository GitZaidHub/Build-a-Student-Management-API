const express = require("express");
const router = express.Router();
const pool = require("../db");

/*
POST /students
Create Student
*/

router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const [result] = await pool.execute(
      "INSERT INTO students (name,email,age) VALUES (?,?,?)",
      [name, email, age]
    );

    console.log(`Student Inserted: ${result.insertId}`);

    res.status(201).json({
      message: "Student created successfully",
      id: result.insertId
    });

  } catch (error) {
    console.error("Insert Error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
GET /students
Get All Students
*/

router.get("/", async (req, res) => {
  try {

    const [students] = await pool.execute(
      "SELECT * FROM students"
    );

    res.status(200).json(students);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

/*
GET /students/:id
Get Student By Id
*/

router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const [student] = await pool.execute(
      "SELECT * FROM students WHERE id=?",
      [id]
    );

    if (student.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

/*
PUT /students/:id
Update Student
*/

router.put("/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const { name, email, age } = req.body;

    const [result] = await pool.execute(
      `UPDATE students
       SET name=?, email=?, age=?
       WHERE id=?`,
      [name, email, age, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    console.log(`Student Updated: ${id}`);

    res.status(200).json({
      message: "Student updated successfully"
    });

  } catch (error) {

    console.error("Update Error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

/*
DELETE /students/:id
Delete Student
*/

router.delete("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const [result] = await pool.execute(
      "DELETE FROM students WHERE id=?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    console.log(`Student Deleted: ${id}`);

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (error) {

    console.error("Delete Error:", error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;