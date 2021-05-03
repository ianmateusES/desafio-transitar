const express = require('express');
const cors = require('cors');

const port = 3333;
const app = express();

app.use(express.json());
app.use(cors());  

app.get('/', (req, res) => {
  const { n1, n2, n3 } = req.query;

  if (!n1 || !n2 || !n3) {
    return res.status(400).json({ type: 'error', message: 'Missing note' });
  }

  const note1 = Number(n1);
  const note2 = Number(n2);
  const note3 = Number(n3);

  if ((0 < note1 && note1 > 10) || (0 < note2 && note2 > 10) || (0 < note3 && note3 > 10)) {
    return res.status(400).json({ type: 'error', message: 'Note out of acceptable range 0-10' });
  }

  const mean = (note1 + note2 + note3)/3;
  
  const status = mean >= 7 ? 'APROVADO' : 'REPROVADO';
  
  return res.json(status);
})

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
