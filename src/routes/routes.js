import AuthRoutes from '../modules/Authentication/routes'
import ControlPanelRoutes from '../modules/ControlPanel/routes'

// eslint-disable-next-line import/no-anonymous-default-export
export default [...AuthRoutes, ...ControlPanelRoutes]
