const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.options('*', cors());

app.use((req, res, next) => {
    console.log("test ===== ", req.path, req.method, new Date())
    next()
})


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/test', (req, res) => {
    res.status(200).send('Test route is working');
});

// User routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});