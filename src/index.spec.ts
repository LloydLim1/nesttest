import { SERVICE_NAME } from './index';

describe('nesttest', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('nesttest');
  });
});