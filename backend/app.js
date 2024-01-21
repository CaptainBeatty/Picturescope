
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'c67ab8a7',
      title: 'beach', 
      description: `C'était une belle balade. Il y avait le soleil...et Ksenia.`,
      imageUrl: 'http://localhost:3000/image-1.jpg',
    },
  ];
  res.status(200).json(stuff);
});
//  [
//     { "id": "c67ab8a7", "url": "http://localhost:3000/image-1.jpg", "title": "beach", "description": "C'était une belle balade. Il y avait le soleil...et Ksenia."},
//     { "id": "c1515181", "url": "http://localhost:3000/image-2.jpg", "title": "boat", "description": "C'était une belle balade. Il y avait le soleil...et Svetlana."},
//     { "id": "j15151j5", "url": "http://localhost:3000/image-3.jpg", "title": "forest", "description": "C'était une belle balade. Il y avait le soleil...et Anastasia." },
//     { "id": "b154t566", "url": "http://localhost:3000/image-4.jpg", "title": "city", "description": "C'était une belle balade. Il y avait le soleil...et Alexandra." },
//     { "id": "er1515z1", "url": "http://localhost:3000/image-5.jpg", "title": "italy", "description": "C'était une belle balade. Il y avait le soleil...et Katerina." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },
//     { "id": "z1515r15", "url": "http://localhost:3000/peinture-lac-montagne-montagne-arriere-plan.jpg", "title": "lac", "description": "C'était une belle balade. Il y avait le soleil...et Natalia." },{ "id": "c67ab8a7", "url": "http://localhost:3000/image-1.jpg", "title": "beach", "description": "C'était une belle balade. Il y avait le soleil...et Ksenia."}
//   ]


module.exports = app;