require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const { User } = require(path.resolve(__dirname, 'schemas'));
const app = express();
const port = +process.env.PORT || 8000;
const mongoURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/mydatabase';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/get', async (req, res) => {
  try {
    let userInformation = await User.findOne({});
    if (!userInformation) {
      userInformation = await User.create({ name: 'Random Name', email: 'random@gmail.com' })
    }
    return res.status(200).send({
      status: 'success',
      data: userInformation,
    })
  } catch (e) {
    return res.status(401).send({
      status: 'failure',
      message: e?.message || ''
    })
  }
});

app.post('/insert', async (req, res) => {
  try {
    const { name = '', email = '' } = req.body;
    const userRecord = await User.insertOne({ name, email });
    return res.status(200).send({
      status: 'success',
      data: userRecord
    });
  } catch (e) {
    return res.status(401).send({
      status: 'failure',
      message: e?.message || ''
    })
  }
});

app.patch('/update/:id', async (req, res) => {
  try {
    const { id = '' } = req.params;
    const { name = '', email = '' } = req.body;
    const userRecordExists = await User.findOne({ _id: id });
    if (!userRecordExists) throw new Error('Record does not exist.');

    const updatedUserRecord = await User.findByIdAndUpdate({
      _id: id,
    }, {
      $set: {
        name,
        email
      }
    }, { upsert: true, new: true, runValidators: true, context: 'query' });

    return res.status(200).send({
      status: 'success',
      data: updatedUserRecord,
    })
  } catch (e) {
    return res.status(401).send({
      status: 'failure',
      message: e?.message || ''
    })
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

