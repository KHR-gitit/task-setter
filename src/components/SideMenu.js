const SideMenu = ({toggle}) => {

    return (
        <nav className={`left-menu position-fixed top-space h-100 bg-mine z-index-6 ${toggle}`} id="side-menu">
            <ul className="navbar-nav fw-normal me-auto mb-2 mb-lg-0 px-4 w-100">
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">All Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">To Done</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">In Progress</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">Review</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fs-5" href="#">Done</a>
                </li>
            </ul>
        </nav>
    )
}

export default SideMenu;
