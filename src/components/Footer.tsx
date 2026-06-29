import {socials} from "../../constants";

const Footer = () => {
    return (
        <footer className="bottom-0 w-full flex flex-col items-center py-10 gap-5">
            <p>
                "Pie Brāļa" Krogs | Restorāns
            </p>
            <div className="socials flex flex-row gap-10">
                {socials.map ((social) => (
                    <a href={social.href} className="socials-icon h-10 hover:opacity-75" id={social.id}>
                        <img src={social.img} alt={social.id} className={social.invert ? 'invert w-10': 'w-20'} />
                    </a>
                ))}
            </div>

        </footer>
    )
}
export default Footer
