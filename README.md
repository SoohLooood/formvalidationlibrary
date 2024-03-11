# Form Validation Library

A simple JavaScript library for validating form data.

## Installation

You can install the Form Validation Library via npm:

```bash
npm install form-validation-library
```

## Usage

```javascript
const FormValidator = require('form-validation-library');

// Create a new instance of FormValidator
const validator = new FormValidator();

// Add validation rules for fields
validator.addRule('email', value => /\S+@\S+\.\S+/.test(value), 'Invalid email address');
validator.addRule('password', value => value.length >= 6, 'Password must be at least 6 characters long');

// Example form data
const formData = {
  email: 'test@example.com',
  password: '12345'
};

// Validate the form data
const validationResult = validator.validate(formData);

if (validationResult.isValid) {
  console.log('Form data is valid');
} else {
  console.log('Form data is invalid');
  console.log('Errors:', validationResult.errors);
}
```

## API

### `addRule(field, rule, errorMessage)`

Adds a validation rule for a specific field.

- `field` (string): The name of the field to validate.
- `rule` (function): A validation function that returns `true` if the field is valid, `false` otherwise.
- `errorMessage` (string): The error message to display if the field is invalid.

### `validate(form)`

Validates a form object against the defined validation rules.

- `form` (object): The form data to validate.

Returns an object with the following properties:

- `isValid` (boolean): Indicates whether the form data is valid or not.
- `errors` (object): A map of field names to arrays of error messages for invalid fields.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
