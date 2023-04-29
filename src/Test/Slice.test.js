import { countriesReducer } from '../Redux/Countries/countriesSlice';

test('should return the initial state', () => {
  expect(countriesReducer(undefined, { type: undefined })).toEqual(
    {
      countries: [], status: false, error: false,
    },
  );
});
