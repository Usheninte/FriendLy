//Github Pages LINK === https://usheninte.github.io/FriendLy/index3.html 

//FriendLy Complex Component
function FriendLy(props) {
  var FriendLyBlock = props.people.map(function(peeps) {
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
      <div key={peeps.name} style={friendlyStyle}>
        <Avatar img={peeps.img} />
        <UserName name={peeps.name} />
        <GetConnected />
      </div>
    );
  })
  return(
    <div>{FriendLyBlock}</div>
  );
}

//use the map() method to pass props from people to the FriendLy component

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

var people = [{name: "Usheninte", img: "https://pbs.twimg.com/profile_images/1016166221102927874/aIBWy-J9_400x400.jpg"},
              {name: "Charles", img:"https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg"},
              {name: "Natalie", img: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg"},
              {name: "Sarah", img: "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg"},
              {name: "Kenny", img: "https://static.pexels.com/photos/325682/pexels-photo-325682.jpeg"},
              {name: "John", img: "https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg"},
              {name: "Alisha", img: "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"}
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
)