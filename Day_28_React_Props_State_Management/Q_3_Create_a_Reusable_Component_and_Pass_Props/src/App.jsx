import MessageCard from "./MessageCard";


function App(){
  return (
    <div>
      <h1>Message Cards</h1>

      <MessageCard title="Welcome" message="Welcome to our React application!" />

      <MessageCard title="Success" message="Your data has been saved successfully." />

      <MessageCard title="Warning" message="Please check your input values." />

      <MessageCard title="Goodbye" message="Thanks for visiting. See you soon!" />
    </div>
  );


}
  

export default App;