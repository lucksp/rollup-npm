import { setupMockFetchResponses } from '../src/LoginProvider/__fixtures__/setupMockFetchResponses';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  window.fetch = jest.fn().mockImplementation(setupMockFetchResponses);
});
