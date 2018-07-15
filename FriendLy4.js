//Github Pages LINK === https://usheninte.github.io/FriendLy/index4.html 

//FriendLy Complex Component
/*     function FriendLy(props) {
  var friendlyStyle = {
    display: "inline-block",
    margin: 20,
    height: 300,
    width: 200,
    padding: 0,
    backgroundColor: "#fff",
    WebkitFilter: "drop-shadow(0px 0px 5px #555)",
    filter: "drop-shadow(0px 0px 5px #555)"
  }
  return(
    <div style={friendlyStyle}>
      <Avatar img={props.img} />
      <UserName name={props.name} />
      <GetConnected />
    </div>
  );
} */

//use the map() method to pass props from people to the FriendLy component
function FriendLy(props) {
  //femaleUsers
  var femaleUsers = props.people.filter(function(female) {
    return female.gender === 'female';
  })
  .map(function(female) {
    var friendlyStyle = {
      display: "inline-block",
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#fff",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }
    return(
      <div key={female.id} style={friendlyStyle}>
        <Avatar img={female.img} />
        <UserName name={female.name} />
        <GetConnected />
      </div>
    );
  });
  //maleUsers
  var maleUsers = props.people.filter(function(male) {
    return male.gender === 'male';
  })
  .map(function(male) {
    var friendlyStyle = {
      display: "inline-block",
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#fff",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }
    return(
      <div key={male.id} style={friendlyStyle}>
        <Avatar img={male.img} />
        <UserName name={male.name} />
        <GetConnected />
      </div>
    );
  });
  return(
    <div>
      <h1>FriendLy</h1>
        <h4>Female Users</h4>
          <div>
            {femaleUsers}
          </div>
        <hr />
        <h4>Male Users</h4>
          <div>
            {maleUsers}
          </div>
    </div>
  );
}

//create a variable that uses the filter() method to select all male users and displays them in JSX with the map() method
//create a variable that uses the filter() method to select all female users and displays them in JSX with the map() method

//Avatar Component
function Avatar(props) {
  var avatarStyle = {
    marginTop: 20,
    marginLeft: 24,
    marginRight: 20,
    width: 150,
    height: 150,
    borderRadius: "50%"
  }
  return(
    <img src={props.img} alt="profile pic" title="profile pic" style={avatarStyle}/>
  );
}

//UserName Component
function UserName(props) {
  var nameStyle = {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serifS",
    margin: 20
  }
  return(
    <h1 style={nameStyle}>{props.name}</h1>
  );
}

//GetConnected Component
function GetConnected() {
  var getConnectedStyle = {
    marginLeft: 15
  }
  return(
    <div style={getConnectedStyle}>
      <Like />
      <Share />
      <Add />
    </div>
  );
}

  var iconStyle = {
    margin: 20
  }

  //Like Component
  function Like() {
    return(
      <i className="fas fa-heart" style={iconStyle}></i>  
    );
  }

  //Share Component
  function Share() {
    return(
      <i className="fas fa-share-alt-square" style={iconStyle}></i>
    );
  }

  //Add Component
  function Add() {
    return(
      <i className="fas fa-users" style={iconStyle}></i>
    );
  }

//CHALLENGE - pass people array to the FriendLy component

var people = [{id: 0, name: "Usheninte", gender: "male", img: "https://pbs.twimg.com/profile_images/1016166221102927874/aIBWy-J9_400x400.jpg"},
            {id: 1, name: "Charles", gender: "male", img:"https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg"},
            {id: 2,  name: "Natalie", gender: "female", img: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg"},
            {id: 3, name: "Sarah", gender: "female", img: "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg"},
            {id: 4, name: "Kenny", gender: "male", img: "https://static.pexels.com/photos/325682/pexels-photo-325682.jpeg"},
            {id: 5, name: "John", gender: "male", img: "https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg"},
            {id: 6, name: "Alisha", gender: "female", img: "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"}
            ];

ReactDOM.render(
  <div>
    <FriendLy 
      people={people}
      />
    <br /><br /><br />
    <h3><a href="https://github.com/Usheninte/FriendLy">View on Github</a></h3>
  </div>,
  document.getElementById("app")
);