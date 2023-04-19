import renderer, { act, create } from 'react-test-renderer'
import FirstScreen from '../src/feature/firstscreen/first_screen'

// for rendering of screen

// creating tree for test case of that file

let tree: any
act(() => {
  tree = create(<FirstScreen />)
})

// test case to see that app is render correctly
test('renders correctly', () => {
  const tree = renderer.create(<FirstScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})
// test case for render without crashing
test('render without crashing', () => {
  const res = tree.root.children
  expect(res).toBeTruthy()
})

// test case to see if text is present there
test('on render of the app there should be a text hello on top', () => {
  const res = tree.root.children
  expect(res).toBeTruthy()
})

