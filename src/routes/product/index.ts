import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Product from '../../models/product/index.model';

/**
 *
 */
router.get('/product', async (req: Request, res: Response) => {
    await Product.find({}).sort([['order', 1]]).exec((err: Error, data: {}[]) => {
        if (err) {
            res.json(err);
        } else {
            res.status(200).json(data);
        }
    });
});

/**
 *
 */
router.post('/product', async (req: Request, res: Response) => {
    const city = new Product(req.body);

    await city.save((err: Error, data: {}) => {
        if (err) {
            res.json(err);
        } else {
            res.status(200).json({ message: 'successfully saved' });
        }
    });
});

/**
 *
 */
router.put('/product/:id', async (req: Request, res: Response) => {
    await Product.update({ _id: req.params.id }, req.body, (err: Error, data: {}) => {
        if (err) {
            res.json(err);
        } else {
            res.status(200).json({ message: 'successfully edited' });
        }
    });
});

/**
 *
 */
router.delete('/product/:id', async (req: Request, res: Response) => {
    Product.find({ _id: req.params.id }).remove().exec((err: Error, data: {}) => {
        if (err) {
            res.json(err);
        } else {
            res.status(200).json({ message: 'successfully removed' });
        }
    });
});

module.exports = router;
