require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Use environment variable for port, or default to 3000
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

// const cors = require('cors');

// app.use(cors({
//     origin: 'https://task-manager-app-frontend-seven.vercel.app/',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


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

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});