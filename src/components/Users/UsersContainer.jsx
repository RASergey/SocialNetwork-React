import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = () => { }
let mapDispatchToProps = () => { }


let usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;