const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

connectDB();

app.use((req, res, next) => {
    console.log(req.path, req.method, new Date())
    next()
})

app.options('*', cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// User routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});