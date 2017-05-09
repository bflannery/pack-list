const express = require('express');
const router = express.Router();
const Item = require('../models/item');


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({'error': message});
}

router.get('/api', (req,res)=> {
  res.send('api works');
});


router.route('/items')
  .post((req, res) => {
    const item = new Item({
      name: req.body.name,
      quntity: req.body.quantity
    });

    item.save((err) => {
      if(err) {
        return res.send(err);
      }
      return res.json({ message: 'New Item Created!'});
    });
})
.get((req, res) => {
  Item.find({}).sort({ createdAt: -1 }).exec((err, item) => {
        if (err){
          return res.send(err);
        }
        return res.json(item);
      });
});

router.route('/item/:id')
  .get((req, res)=> {
    Item.findById(req.params.id, (err, item)=> {
      if(err) {
        return res.send(err);
      }
      return res.json(item);
    });
  })
  .put((req, res)=> {
    Item.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      quntity: req.body.quantity
    }, (err) => {
      if(err) {
        return res.send(err);
      }
      return res.json({message: 'Item updated successfully'});
    });
  })
  .delete((req, res) => {
    Item.remove({ _id: req.params.id },
      (err)=> {
        if(err) {
          return res.send(err);
        }
        return res.json({ message: 'Item has been removed!' });
      });
  });

module.exports = router;
