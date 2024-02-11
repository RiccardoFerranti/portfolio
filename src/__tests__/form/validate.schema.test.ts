import LABELS from 'consts/labels';
import validateSchema from 'form/validate.schema';

describe('validateSchema', () => {
  it('should return null for a valid name field', () => {
    expect(validateSchema('John Doe', LABELS.form.name.field)).toBeNull();
  });

  it('should return an error message for an empty name field', () => {
    expect(validateSchema('', LABELS.form.name.field)).toBe(LABELS.form.name.error.empty);
  });

  it('should return an error message for a name field with less than 4 characters', () => {
    expect(validateSchema('Joh', LABELS.form.name.field)).toBe(LABELS.form.name.error.atLeast);
  });

  it('should return null for a valid email field', () => {
    expect(validateSchema('john@example.com', LABELS.form.email.field)).toBeNull();
  });

  it('should return an error message for an empty email field', () => {
    expect(validateSchema('', LABELS.form.email.field)).toBe(LABELS.form.email.error.empty);
  });

  it('should return an error message for an invalid email format', () => {
    expect(validateSchema('invalid-email', LABELS.form.email.field)).toBe(LABELS.form.email.error.valid);
  });

  it('should return null for a valid message field', () => {
    expect(validateSchema('Test valid message', LABELS.form.message.field)).toBeNull();
  });

  it('should return an error message for an empty message field', () => {
    expect(validateSchema('', LABELS.form.message.field)).toBe(LABELS.form.message.error.empty);
  });

  it('should return an error message for a message field with less than 15 characters', () => {
    expect(validateSchema('Short message', LABELS.form.message.field)).toBe(LABELS.form.message.error.atLeast);
  });

  it('should return an error message for a message field with more than 300 characters', () => {
    const longMessage = 'a'.repeat(301); // Create a message with 301 characters
    expect(validateSchema(longMessage, LABELS.form.message.field)).toBe(LABELS.form.message.error.maxLength);
  });
});

