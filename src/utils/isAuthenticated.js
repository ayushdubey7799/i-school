import { AuthenticationConstants } from "./constants";

export const isAuthenticated = () => {
    const accessToken = useSelector(state => state.auth.userData?.accessToken);
    const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

    if(accessToken){
        if(clientCode=="intelliview"){
            return AuthenticationConstants.jobseeker
        }
        else{
            return AuthenticationConstants.employer
        }
    }
    return AuthenticationConstants.deny
}