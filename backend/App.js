const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const userRoutes = require('./routes/userRoutes');
const musicComposerRoutes = require('./routes/musicComposerRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Enable CORS

// Routes
app.use('/api/users', userRoutes);
app.use('/api/music-composer', musicComposerRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
