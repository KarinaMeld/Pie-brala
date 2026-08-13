const Menu = () => {
    return (
        <div className="section" id="menu">
            <div className="grid grid-cols-2 gap-20 my-1/4">
                <a className="relative block group">
                    <img src="/food.jpg" alt="playground" className="menu-image" />
                    <h2 className="menu-title">
                        Ēdienkarte
                    </h2>
                </a>
                <a className="relative block group">
                    <img src="/drinks.jpg" alt="playground" className="menu-image" />
                    <h2 className="menu-title">
                        Dzērienkarte
                    </h2>
                </a>
            </div>
        </div>
    )
}
export default Menu
