//Github Pages LINK === https://usheninte.github.io/FriendLy/index.html 

//FriendLy Complex Component
function FriendLy() {
  var friendlyStyle = {
    height: 300,
    width: 200,
    padding: 0,
    backgroundColor: "#fff",
    WebkitFilter: "drop-shadow(0px 0px 5px #555)",
    filter: "drop-shadow(0px 0px 5px #555)"
  }
  return(
    <div style={friendlyStyle}>
      <Avatar />
      <UserName />
      <GetConnected />
    </div>
  );
}

  //Avatar Component
  function Avatar() {
    var avatarStyle = {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      width: 150,
      height: 150,
      borderRadius: "50%"
    }
    return(
      <img src="https://pbs.twimg.com/profile_images/1016166221102927874/aIBWy-J9_400x400.jpg" alt="profile pic" title="profile pic" style={avatarStyle}/>
    );
  }

  //UserName Component
  function UserName() {
    var nameStyle = {
      fontSize: 24,
      fontFamily: "Arial, Helvetica, sans-serifS",
      margin: 20
    }
    return(
      <h1 style={nameStyle}>Profile Name</h1>
    );
  }

  //GetConnected Component
  function GetConnected() {
    return(
      <div>
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

ReactDOM.render(
  <FriendLy />,
  document.getElementById("app")
)