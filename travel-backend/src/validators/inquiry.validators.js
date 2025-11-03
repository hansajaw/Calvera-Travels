import { body } from 'express-validator';
export const inquiryRules = [
  body('name').isString().trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('phone').optional().isString().isLength({ min: 6 }),
  body('travelers').optional().isInt({ min: 1 }).toInt(),
  body('preferredDestinations').optional().isArray(),
  body('budgetUSD').optional().isFloat({ min: 0 }).toFloat(),
  body('message').optional().isString().isLength({ max: 5000 }),
  body('sourcePage').optional().isIn(['plan-trip', 'contact', 'package', 'destination', 'other'])
];
