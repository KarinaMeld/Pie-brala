import {contacts} from "../../constants";

const Contacts = () => {
    return (
        <div className="container mx-auto mb-20" id="contacts">
            <h2 className="text-4xl">
                Sazinies ar mums
            </h2>

            <div className="contacts-info flex flex-col gap-5">

                <p className="footer-p">
                    {contacts.address}
                </p>
                <p className="footer-p">
                    {contacts.email}
                </p>
                <p className="footer-p">
                    {contacts.phoneReservations}
                </p>
                <p className="footer-p">
                    {contacts.phoneBanquets}
                </p>
                <p className="footer-p">
                    {contacts.phoneBanquets2}
                </p>
                <p className="footer-p">
                    {contacts.gps}
                </p>
            </div>
        </div>
    )
}
export default Contacts
