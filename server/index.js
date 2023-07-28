require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./connectDB');
const Notes = require('./models/Notes');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get All Notes
app.get('/api/notes', async (req, res) => {
  try {
    const data = await Notes.find({});
    if (!data) {
      throw new Error('🏮 An error occured while fetching notes.');
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: 'An error occured while fetching notes.' });
  }
});

// Get Note by ID
app.get('/api/notes/:id', async (req, res) => {
  try {
    const noteID = req.params.id;

    const data = await Notes.findById(noteID);

    if (!data) {
      throw new Error('🏮 An error occured while fetching notes.');
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(`🏮 Error: ${error}`);
  }
});

// Create A Note
app.post('/api/notes', async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = await Notes.create({ title, description });

    if (!data) {
      throw new Error('🏮 An error occured while creating a note.');
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(`🏮 Error: ${error}`);
  }
});

// Update A Note
app.put('/api/notes/:id', async (req, res) => {
  try {
    const noteID = req.params.id;
    const { title, description } = req.body;

    const data = await Notes.findByIdAndUpdate(noteID, { title, description });

    if (!data) {
      throw new Error('🏮 An error occured while updating a note.');
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`🏮 Error: ${error}`);
  }
});

// Delete A Note by ID
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const noteID = req.params.id;

    const data = await Notes.findByIdAndDelete(noteID);

    if (!data) {
      throw new Error('🏮 An error occured while deleting a note.');
    }

    res.status(204).json(data);
  } catch (error) {
    res.status(404).json(`🏮 Error: ${error}`);
  }
});

app.get('/', (req, res) => {
  res.json('Hello mate! ');
});

app.get('*', (req, res) => {
  res.sendStatus('404');
});

app.listen(PORT, () => {
  console.log(`🔰 Server is running on port : ${PORT}`);
});
