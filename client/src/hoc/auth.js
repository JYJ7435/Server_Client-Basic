import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_action";

function Auth(SpecificComponent, option, adminRoute) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);
    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}

export default Auth;
