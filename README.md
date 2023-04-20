# Sachin_FrontEnd
Steeleye Frontend Engineer Assignment

<h2>Q1.Explain what the simple List component does.</h2><br>
Ans.The simple List component allows for efficient access to elements using their indices. Elements in a list are stored in contiguous memory locations, which makes it easy to access any element in constant time using its index. For example, if you have a list of 10 elements, you can access the 5th element directly without iterating through the list from the beginning.
The simple List component also supports dynamic sizing, meaning that elements can be added or removed from the list as needed. This makes it a flexible data structure that can be used for a variety of purposes, such as storing collections of data that may change in size over time.

<h2>Q2.What problems / warnings are there with code?</h2><br>
Ans.There are several issues and warnings with the given code:

1.useState Hook: In the WrappedListComponent, the usage of useState Hook is incorrect. The useState Hook takes an initial state value as an argument and returns an array with two elements - the current state value and a function to update the state. However, in the code, setSelectedIndex is being used as a function to update the state, which is incorrect. It should be const [selectedIndex, setSelectedIndex] = useState(null); to correctly initialize the selectedIndex state variable and the corresponding update function.

2.useEffect Hook: The useEffect Hook in the WrappedListComponent is using an empty dependency array ([]), which means it will only run once when the component mounts. However, it is trying to reset the selectedIndex state variable whenever the items prop changes. To fix this, the correct dependency should be specified in the dependency array of the useEffect Hook, i.e., [items], so that it will reset the selectedIndex whenever the items prop changes.

3.PropTypes: The propTypes for items prop in the WrappedListComponent is not defined correctly. Instead of PropTypes.array(PropTypes.shapeOf({...})), it should be PropTypes.arrayOf(PropTypes.shape({...})). The correct usage of arrayOf is to specify the type of elements expected in the array, followed by shape to define the shape of each element.

4.isSelected prop: In the WrappedSingleListItem, the isSelected prop is being used to set the background color of the li element based on its value. However, isSelected is a boolean prop, and it is being directly passed as a style value (backgroundColor: isSelected ? 'green' : 'red'), which may result in unexpected behavior. It is recommended to explicitly check for true/false value of isSelected, e.g., backgroundColor: isSelected ? 'green' : 'red'.

5.onClickHandler prop: In the WrappedSingleListItem, the onClickHandler prop is not being properly used as an event handler. Instead of onClick={onClickHandler(index)}, it should be onClick={() => onClickHandler(index)} to correctly pass a function reference as the event handler.

6.index prop: In the WrappedSingleListItem, the index prop is being passed as a parameter to the onClickHandler prop, but it is not defined in the propTypes for WrappedSingleListItem. It should be added to the propTypes definition for WrappedSingleListItem.

7.memo usage: The memo higher-order component (HOC) is used to memoize the SingleListItem and ListComponent components, but it is not being used correctly. The memo HOC is only effective when the component's props are not mutated, and the component does not have any internal state. However, in the given code, SingleListItem and ListComponent are using useState Hook to manage local state. To fix this, the usage of memo should be reviewed and removed if not needed, or used correctly if necessary.

8.defaultProps: In the WrappedListComponent, the items prop is set to null as the default prop value. However, the correct default value for an array prop should be an empty array ([]) instead of null.

<h2>Q3.Please fix, optimize, and/or modify the component as much as you think is necessary.</h2><br>
Ans.

1.Fixed useState usage: The useState hook should be called with a default value, so I updated useState() to useState(null) to set selectedIndex to null by default.

2.Fixed prop types: In WrappedListComponent, the PropTypes.array should be PropTypes.arrayOf to specify the type of the array items. Also, the PropTypes.shapeOf should be PropTypes.shape to define the shape of the object.

3.Updated memo usage: memo should wrap the innermost component, so I removed memo from WrappedSingleListItem and added it to SingleListItem and List.

4.Optimized event handler: In SingleListItem, onClickHandler was being called with onClickHandler(index) directly, which would immediately invoke the event handler when the component renders. I updated it to () => onClickHandler(index) to pass a function reference to onClick that gets called only when the item is clicked.

5.Added keys to list items: In WrappedListComponent, I added a key prop to each SingleListItem component to provide a unique identifier for React to optimize the rendering of the list.
