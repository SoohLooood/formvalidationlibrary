// form-validator.js

class FormValidator {
    constructor() {
      this.validationRules = {};
      this.errorMessages = {};
    }
  
    // Add validation rules for a specific field
    addRule(field, rule, errorMessage) {
      if (!this.validationRules[field]) {
        this.validationRules[field] = [];
      }
      this.validationRules[field].push(rule);
  
      if (!this.errorMessages[field]) {
        this.errorMessages[field] = [];
      }
      this.errorMessages[field].push(errorMessage);
    }
  
    // Validate a form
    validate(form) {
      const errors = {};
  
      Object.keys(this.validationRules).forEach(field => {
        this.validationRules[field].forEach((rule, index) => {
          if (!rule(form[field])) {
            if (!errors[field]) {
              errors[field] = [];
            }
            errors[field].push(this.errorMessages[field][index]);
          }
        });
      });
  
      return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
    }
  }
  
  module.exports = FormValidator;
  