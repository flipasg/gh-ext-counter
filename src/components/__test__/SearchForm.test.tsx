import { render } from '@testing-library/react'
import SearchForm from '../SearchForm'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
    handleSubmit: () => jest.fn(),
    getValues: () => jest.fn(),
    formState: {
      isValid: true,
      errors: {},
    },
    setValue: () => jest.fn(),
    watch: () => jest.fn(),
  }),
  Controller: () => [],
  useSubscribe: () => ({
    r: { current: { subject: { subscribe: () => jest.fn() } } },
  }),
}))

describe('SearchForm', () => {
  test('should render submit button', () => {
    const { getByTestId } = render(<SearchForm onSubmit={jest.fn()} />)
    const submitButton = getByTestId('submitButton')
    expect(submitButton).toBeInTheDocument()
  })
  // TODO: test input render, with Controller mock
})
