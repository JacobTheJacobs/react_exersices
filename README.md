Fundamentals
Start Coding
Hello React
Subjects: installation, ReactDOM.render

Do all the required installations and in ReactDOM.render write some greetings on the screen. Use h1 and some p elements.

Hello React - Functional Component
Subjects: functional component, files separation

Do the previous exercise with functional component defined in a separate file.

Hello React with Styling and Interpolation
Subjects: functional component, styling, interpolation

Do the previous exercise with styling. Use inline style and classes. Add also interpolation by defining some text in a variable and making the style object in a variable.

Child Component, Props
Book by Functional Component
Subjects: functional component, props, child component, props destructuring

Define a Book component which includes book details like author, title, year, description, cover (image), etc.

Define App component containing header, main and footer. Main will include Book component. Pass book properties from Main to Book component.

Use props destructuring.

Style your application (footer on the bottom, book data in the middle).

book

Books by Functional Component
Subjects: functional component, props, child component, props destructuring

Define a Book component which includes book details like author, title, year, description, cover (image), etc as in previous exercise.

Define Main component containing at least 4 books. Pass book data from Main to Book component. Do this first by passing separate book properties to Book component. Then, try other solution by passing the whole object.

Use props destructuring in both solutions.

books

Books by Class Component
Subjects: class component, props, child component

Do Books exercise but implement Book component by class.

Lists
Quote List
Subjects: list

Show a list of quotes. Use the list from quotes.js file.

quote list

Products List
Subjects: list

Show a list of products. Use the list from products-data.js file.

List of books
Subjects: props, list

Do Book exercise from Child Component exercises. But now, use list for books in App.

At the beginning define ID for each book inside the book structure. Then try UUID library to give for each book unique ID. In such a way, the solution will be more general and later you will be able to change the list by adding or removing list elements.

You can find UUID library in react-uuid.

State & Events
Random Quote
Subjects: state, events, random

Define a button. On every click show random quote from the quote list. Use the list from quotes.js file.

Button BG
Subjects: state, events, random, style

Define a button. On every click change the button background to random color.

Message
Subjects: state, events

Explain the code:

class Message extends Component {
  state = {
    message: '',
  }

  render() {
    const message = this.state.message;
    return (
      <section className='message'>
        <input type='text' 
          placeholder='Enter a message' 
          onChange={e => {
            const val = e.target.value;
            this.setState({message: val});
          }}
        />
        <p>
          <strong>{message}</strong>
        </p>
      </section>
    );
  }
}
     
What is the difference of the next code from the previous one (see look here line):

class Message extends Component {
  state = {
    message: '',
  }

  render() {
    const message = this.state.message;
    return (
      <section className='message'>
        <input type='text'
          placeholder='Enter a message'
          onChange={e => {
            const val = e.target.value;
            
            // look here!!!
            // -----------------------------------
            this.setState(prev => 
              ({ message: prev.message + val }));
            // -----------------------------------
     
          }}
        />
        <p>
          <strong>{message}</strong>
        </p>
      </section>
    );
  }
}
Click Count
Subjects: state, events

Define a button. Count and display on the button how many times the button was clicked.

Simple Counter
Subjects: state, events

Define a counter with increment, decrement and clear buttons. Show the counter value

counter with buttons

ToDo List
Subjects: state, events, list

Explain the code:

class ToDo extends Component {
  state = {
    message: '',
    messageList: [],
  };
  setMessageList = () => {
    this.setState (prevState => ({
      messageList: [...prevState.messageList, prevState.message],
    }));
    this.setState({ message: '' });
  };

  render() {
    const { message, messageList } = this.state;
    return (
      <section className='todo-wrapper'>
        <div className='buttons'>
          <input 
            className='button message' 
            type='text' 
            value={message} placeholder='Enter a message' 
            onChange={e => 
              this.setState({ message: e.target.value })}
          />
          <input type='button' 
            className='button' 
            value='Add' 
            onClick={e=> this.setMessageList()}
          />
        </div>
        
        <ul className="list">
          {messageList.map(message => (
          <li key={uuid()}>{message}</li>
          ))}
        </ul>
      </section>
    );
  }
}
            
all

People List 1
Subjects: state, events, list

Build a page that contains a list of people. Define PeopleList component containing the list.The list has to be passed to the component as props. Use attached people-data.js. Use UUID.

Define 'Clear All' button to clear the list.

The results looks like:

people

People List 2
Subjects: state, events, list, parent handler as props

Same as previous exercise, where near each person add delete button. By clicking delete button, the person will be removed from the list.

The results looks like:

people

Conditional Rendering
Menu
Subjects: conditional rendering, state

Define 2 components: Home, About. Add some content in each component.

In the App component define a menu with 2 buttons: HOME, ABOUT. By clicking on menu item, the appropriate component has to be displayed. Pay attention to leave the menu unchanged when switching between components.

Use state for the type of displayed component.

Navigation
Subjects: conditional rendering, state, list

Define navigation data for at least 5 links. The data has to include link text, link url, and optional ID (or use UUID).

Display the navigation on big screens. On small screens display an hamburger. On hamburger click show the navigation. Another click will hide it.

People List 3
Subjects: conditional rendering, state, list

Same exercise for people as People List 2, but now add also info button. By clicking the info button, the appropriate person information will be shown in a popup window.

Instructions:

Define Info component and render it conditionally when info button was clicked. To do this follow the next steps in PeopleList component:

Define state to show/hide the Info
Define toggleInfo method to change the state when clicking the button and when popup is closed.
Show Info component depending on the state. Note that you need to know which person to show in the popup. Thus, when clicking the button, you have to save the person in the state
The results looks like:

people

Lifecycle Methods
Body BG
Subjects: lifecycle methods, state, random, style

Define a button. On every click change the body background to random color. Do background change in componentDidUpdate(prevProps, prevState). Hold current color in the state.

Loading
Subjects: lifecycle methods, conditional rendering, setTimeout, state

Define a component that will display something.

In the application, display "Loading ..." for 5 seconds and then display the component.

Countdown Timer
Subjects: lifecycle methods, conditional rendering, setInterval, state

Start timer for example to 2 minutes. Display remaining time every second. Stop and display a message when the time is over

Forms
Person in List
Subjects: form, state, object, lists

Define 2 input boxes for first and last name. Add a button. By pressing the button, add the person to the ul display and to the array.

Use person object for the names. Use array to hold all persons.

People List 4
Subjects: form, conditional rendering, state, list

Same exercise for people as People List 3, but now add also add button. By clicking the button, popup will be displayed for adding a new person.
Make the list sorted.

HTTP Request
Gallery
Subjects: state, fetch, events, lifecycle methods, lists

Show portraits gallery. Extract images from reddit API. While images are loaded, show loading message.

Hints:

use the following fetch in componentDidMount, which will result in array of image urls:

fetch('https://www.reddit.com/r/portrait.json')
  .then(response => response.json())
  .then(response => {
    // console.log(response.data.children);
    const picUrls = response.data.children.map(pic => pic.data.url).filter(url => url.endsWith('jpg'));
    console.log(picUrls);
    });
Random Image Generator
Subjects: state, forms, fetch, events, lifecycle methods, lists, random

Define a form with text input and submit button. When the button is clicked, random image will be displayed with the text on top of the image .

Hints:

use the following fetch in componentDidMount, which will result in array of images:

fetch("https://api.imgflip.com/get_memes")
  .then(response => response.json())
  .then(response => {
      const {memes} = response.data
      this.setState ({allMemeImgs: memes})
  })
On every submit choose random image from the array. Use onSubmit event on the form.
Use event.preventDefault() to disable page refresh on each submit.
Search Image
Subjects: state, forms, fetch, events, lists, random

Define a form with search input. When the search input is filled and enter is pressed, search images (in for example pixabay site) and display them.

Notes:

In order to use pixabay API you will need to sign up to pixabay to get the key (https://pixabay.com/).
If the form has a single input, pressing enter in the input will generate submit event.
Use event.preventDefault() to disable page refresh on submit.
Use onChange event in the search input.
Advanced
Children
Composition
Subjects: passing component to component

Read and follow the examples in Composition vs Inheritance.

Composition
Subjects: common component

Make 3 different content with the same box styling by using common component which defines the border and the background style.

Hooks
Message
Subjects: state, events

Explain the code.

const Message = () => {
  const [message, setMessage] = useState('');
  
  return (
    <section>
      <input type="text" 
        value={message} 
        placeholder="Enter a message" 
        onChange={e => setMessage(e.target.value)}
      />
      <p>
        <strong>{message}</strong>
      </p>
    </section>
  );
};
                 
Click Count
Subjects: hooks, useState

Define a button. Count and display on the button how many times the button was clicked.

Use hooks for the implementation.

Click Count Conditional
Subjects: hooks, useState, useEffect

Define a button. Count and display on the button how many times the button was clicked. On every count, change the button color. Stop counting and changing color, when count reaches 10 (remember to do the condition inside the hook!). While stopping, disable the button.

Use hooks for the implementation.

Simple Counter
Subjects: hooks, useState, useReduced

Define a counter with increment, decrement and clear buttons. Show the counter value

counter with buttons

First do if with useState hook. Then implement using useReducer hook.

ToDo List
Subjects: hooks, useState, list

Explain the code:

const Message = () => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  return (
    <div>
      <input type="text" value={message} 
        placeholder="Enter a message" 
        onChange={(e)=> { setMessage(e.target.value); }}
      />
      <input type="button" value="Add" 
        onClick={(e)=> {
          setMessageList([
            ...messageList,
            {
            // Use the current size as ID (needed to iterate the list later)
              id: messageList.length + 1,
              message: message
            }
          ]);
          setMessage(''); // Clear the text box
        }}
      />
      <ul>
        {messageList.map((m) => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    </div>
  );
};
                        
Person in List
Subjects: hooks, form, lists, useState

Do person in list exercise with hooks.

Resize Window
Subjects: hooks, useState, useEffect cleanup

Define useEffect which is executed on window resize. Do it by adding event listener of 'resize' event. In effect, get window.innerWidth/window.innerHeight and display it.

Fetch Photos
Subjects: hooks, useState, useEffect, fetch API, lists, conditional rendering

Fetch and display photos from: https://jsonplaceholder.typicode.com/photos, While no data, display spinner or Loading text.

Context
SideBar
Subjects: context

Define an hamburger. When pressed display sidebar. Pressing outside the sidebar will close it.

Use context.

Router
Menu
Subjects: router, state

Define 2 components: Home, About. Add some content in each component.

In the App component define a menu with 2 buttons: HOME, ABOUT. By clicking on menu item, the appropriate component has to be displayed.

Use router to switch between components.

Products
Subjects: router, parameters (useParams)

Add to the previous exercise products page with some description. Define Product component showing a single product. In the products page show a list of products. By clicking on each product, the correct product page will be displayed. You can add a button in the Product to go back by using useHistory hook (with push or goBack). Use the list from products-data.js file.

Projects
Easy
Questions & Answers
Subjects: hooks, conditional rendering

Show a list of questions. Near each question define a button. When clicking the button, show the answer. Clicking again will close the answer.

Slider
Subjects: hooks

Implement slider which supports also autoplay.

Medium
People List 5
Subjects: form, conditional rendering, state, list

Same exercise for people as People List 4, but now add also edit button. By clicking the button, popup will be displayed for editing.
Use the same Form component for adding and for editing.
For simplicity, you can add unique ID to each person in the list (not really required).
To simplify props to Form component, you can use default props with empty fields. Thus, you will not be required to pass empty person while adding a new person.

Difficult
Phone Book
Subjects: routing, form, conditional rendering, state, list ...

Phone book has to include 2 pages: main page with some explanation and contact list page.

The base of contact list has to be like in JavaScript project. In addition, all contacts will be divided into groups: all, family, friends ... For simplicity, each person can be in one group only.

Start with only one group (all) and add the option to add a new group. Modify the form to add a group to each new person and while editing.

Wallpapers
Subjects: routing, context, hooks (including useReducer), list ...

Show wallpapers from reddit API. Show big image when it is clicked. Clicking outside the full image will go back to the list.

Do this with router (using router parameters to show the image).

Try to use context and useReducer hook to handle the global state.

Gallery on Sale
Subjects: routing, context, hooks, list ...

Show gallery from reddit API. Show big image when image is clicked. Clicking outside the full image will go back to the list.

Do this with router (using router parameters to show the image).

Handle add to cart and show cart page.

Try to use context and useReducer hook to handle the global state.
