import {useLocation, useNavigate} from 'react-router-dom';

export const useNavigation = () => {
	const {pathname} = useLocation();
	const navigate = useNavigate();
	return {pathname, navigate};
};
