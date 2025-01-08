```javascript
const query = {
  field: { $regex: /pattern/i }
};

db.collection('myCollection').find(query).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs);
});
```