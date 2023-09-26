const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
return (
<div>
boo
</div>

)

}
const App = () => {
  const name = "moo";
  return (
    <>
      <h1>Hey!</h1>
     // <Hello name="sally" age={5} />
      <Hello name="tom" age={42} />
      <Hello name={name} age={32 - 33} />
  <Footer />   
 </>
  );
};

export default App;
